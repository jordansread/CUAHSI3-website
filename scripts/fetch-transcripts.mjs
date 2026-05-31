/**
 * fetch-transcripts.mjs
 * 
 * Fetches YouTube auto-generated transcripts for all cyberseminar content files
 * and writes them back as structured JSON into the frontmatter.
 * 
 * Run once manually, or add to a CI step / cron job.
 * 
 * Usage:
 *   node scripts/fetch-transcripts.mjs
 *   node scripts/fetch-transcripts.mjs --id=unrdDmNL4mQ   # single video
 * 
 * Requirements:
 *   npm install youtube-transcript gray-matter
 */

import { YoutubeTranscript } from 'youtube-transcript'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = join(__dirname, '../content/cyberseminars')
const TRANSCRIPT_DIR = join(__dirname, '../content/cyberseminars/transcripts')

// Create transcripts directory if needed
import { mkdirSync } from 'fs'
try { mkdirSync(TRANSCRIPT_DIR) } catch {}

// Parse CLI arg
const singleId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]

// --- helpers ----------------------------------------------------------------

function formatTimestamp(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Merge short caption segments into readable paragraphs.
 * Groups segments into ~200-word chunks, each with a leading timestamp.
 */
function buildParagraphs(segments) {
  const WORDS_PER_PARA = 80
  const paras = []
  let current = { start: segments[0].start, words: [] }

  for (const seg of segments) {
    // Clean up auto-caption artifacts
    const text = seg.text
      .replace(/\[Music\]/gi, '')
      .replace(/\[Applause\]/gi, '')
      .replace(/\n/g, ' ')
      .trim()
    if (!text) continue

    const words = text.split(' ')
    current.words.push(...words)

    if (current.words.length >= WORDS_PER_PARA) {
      paras.push({ timestamp: formatTimestamp(current.start), text: current.words.join(' ') })
      current = { start: seg.start, words: [] }
    }
  }

  if (current.words.length > 0) {
    paras.push({ timestamp: formatTimestamp(current.start), text: current.words.join(' ') })
  }

  return paras
}

/**
 * Build a plain-text version for SEO / full-text search
 */
function buildPlainText(segments) {
  return segments
    .map(s => s.text.replace(/\n/g, ' ').trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
}

// --- main -------------------------------------------------------------------

async function fetchForFile(filepath) {
  const raw = readFileSync(filepath, 'utf8')
  const { data: frontmatter, content } = matter(raw)

  if (!frontmatter.youtube_id) {
    console.log(`  Skipping ${filepath} — no youtube_id`)
    return
  }

  const id = frontmatter.youtube_id
  console.log(`  Fetching transcript for ${id} (${frontmatter.title})`)

  let segments
  try {
    segments = await YoutubeTranscript.fetchTranscript(id, { lang: 'en' })
  } catch (err) {
    // Fall back to auto-generated if manual English not available
    try {
      segments = await YoutubeTranscript.fetchTranscript(id)
    } catch (err2) {
      console.warn(`  ⚠ Could not fetch transcript for ${id}: ${err2.message}`)
      return
    }
  }

  console.log(`    → ${segments.length} segments fetched`)

  const paragraphs = buildParagraphs(segments)
  const plainText = buildPlainText(segments)

  // Write the transcript as a separate JSON file keyed by youtube_id
  // (keeps the .md frontmatter clean, avoids huge inline blobs)
  const transcriptPath = join(TRANSCRIPT_DIR, `${id}.json`)
  writeFileSync(transcriptPath, JSON.stringify({
    youtube_id: id,
    fetched_at: new Date().toISOString(),
    segment_count: segments.length,
    paragraphs,
    plain_text: plainText,
  }, null, 2))

  // Update the .md frontmatter to record that a transcript exists
  if (!frontmatter.has_transcript) {
    const updated = matter.stringify(content, { ...frontmatter, has_transcript: true })
    writeFileSync(filepath, updated)
    console.log(`    → Frontmatter updated (has_transcript: true)`)
  }

  // Also copy to public/ so the client can fetch it
  const publicDir = join(__dirname, '../public/cyberseminars/transcripts')
  try { mkdirSync(publicDir, { recursive: true }) } catch {}
  const publicPath = join(publicDir, `${id}.json`)
  writeFileSync(publicPath, JSON.stringify({
    youtube_id: id, fetched_at: new Date().toISOString(),
    segment_count: segments.length, paragraphs, plain_text: plainText,
  }, null, 2))
  console.log(`    → Also copied to ${publicPath}`)
    console.log(`    → Written to ${transcriptPath}`)
}

async function main() {
  const files = readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => join(CONTENT_DIR, f))

  const targets = singleId
    ? files.filter(f => {
        const { data } = matter(readFileSync(f, 'utf8'))
        return data.youtube_id === singleId
      })
    : files

  if (targets.length === 0) {
    console.log(singleId
      ? `No content file found with youtube_id: ${singleId}`
      : 'No .md files found in content/cyberseminars/')
    process.exit(1)
  }

  console.log(`Fetching transcripts for ${targets.length} video(s)...\n`)

  for (const file of targets) {
    await fetchForFile(file)
    // Be polite — small delay between requests
    await new Promise(r => setTimeout(r, 800))
  }

  console.log('\n✓ Done. Transcripts saved to content/cyberseminars/transcripts/')
  console.log('  Commit the transcripts/ directory to version control.')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

// --- README (run `node scripts/fetch-transcripts.mjs --help`) ---------------
// 
// Setup:
//   npm install youtube-transcript gray-matter
//
// Then run:
//   node scripts/fetch-transcripts.mjs              # all videos
//   node scripts/fetch-transcripts.mjs --id=VIDEO_ID  # single video
//
// Output:
//   - content/cyberseminars/transcripts/VIDEO_ID.json  (checked into git)
//   - public/cyberseminars/transcripts/VIDEO_ID.json   (served statically)
//   - content/cyberseminars/*.md updated with has_transcript: true
//
// The script copies the JSON to public/ automatically after writing it.
// Add to package.json scripts:
//   "fetch-transcripts": "node scripts/fetch-transcripts.mjs"
//
// For CI (GitHub Actions), add a scheduled workflow:
//   - runs-on: ubuntu-latest
//   - uses: actions/checkout@v4
//   - run: npm ci && npm run fetch-transcripts
//   - uses: stefanzweifel/git-auto-commit-action@v5
//     with:
//       commit_message: "chore: update cyberseminar transcripts"
