/**
 * download-team-photos.mjs
 *
 * Downloads team headshots from cuahsi.org for anyone who doesn't yet
 * have a local photo path in full-team.json.
 *
 * Usage:
 *   node scripts/download-team-photos.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, createWriteStream, unlink } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import https from 'https'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = join(__dirname, '../public/team/headshots')
const TEAM_JSON  = join(__dirname, '../content/team/full-team.json')

// Hardcoded source URLs for anyone still missing a local photo
// (local paths start with '/' and should be skipped)
const SOURCE_URLS = {
  'jordan-read':            'https://www.cuahsi.org/uploads/team/img/_headshot/JRead_headshot.jpg',
  'lindsay-platt':          'https://www.cuahsi.org/uploads/team/img/_headshot/Lindsay-Platt.jpg',
  'martin-seul':            'https://www.cuahsi.org/uploads/team/img/_headshot/martin_seul.jpg',
  'danielle-tijerina-kreuzer': 'https://www.cuahsi.org/uploads/team/img/_headshot/Danielle_Tijerina-Kreuzer.jpg',
  'kimmy-wong':             'https://www.cuahsi.org/uploads/team/img/_headshot/Kimberlee-Wong.jpg',
  'kaysa-vaarre-lamoureux': 'https://www.cuahsi.org/uploads/team/img/_headshot/Kaysa-Vaarre-Lamoureux.jpg',
  'callie-porter-borden':   'https://www.cuahsi.org/uploads/team/img/_headshot/Callie-Porter-Borden.jpg',
  'barbara-walker':         'https://www.cuahsi.org/uploads/team/img/_headshot/Barbara-Walker.jpg',
  'neal-debuhr':            'https://www.cuahsi.org/uploads/team/img/_headshot/Neal-DeBuhr.jpg',
}

mkdirSync(OUTPUT_DIR, { recursive: true })

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest)
    https.get(url, { headers: { 'Referer': 'https://www.cuahsi.org/' } }, res => {
      if (res.statusCode !== 200) {
        file.close()
        unlink(dest, () => {})
        reject(new Error(`HTTP ${res.statusCode}`))
        return
      }
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', err => {
      file.close()
      unlink(dest, () => {})
      reject(err)
    })
  })
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

const team = JSON.parse(readFileSync(TEAM_JSON, 'utf8'))
let updated = 0

console.log('Downloading missing headshots...\n')

for (const person of team) {
  // Skip if already has a local path
  if (person.photo && person.photo.startsWith('/')) {
    console.log(`  ✓ ${person.name} (already local)`)
    continue
  }

  const url = SOURCE_URLS[person.slug]
  if (!url) {
    if (!person.photo) console.log(`  — ${person.name} (no source URL known)`)
    continue
  }

  const ext  = url.split('.').pop().split('?')[0]
  const local = `/team/headshots/${person.slug}.${ext}`
  const dest  = join(OUTPUT_DIR, `${person.slug}.${ext}`)

  process.stdout.write(`  ${person.name}... `)
  try {
    await download(url, dest)
    person.photo = local
    updated++
    console.log('✓')
  } catch (err) {
    console.log(`⚠ ${err.message}`)
  }

  await sleep(300)
}

if (updated > 0) {
  writeFileSync(TEAM_JSON, JSON.stringify(team, null, 2))
  console.log(`\n✓ ${updated} photo(s) downloaded. full-team.json updated.`)
  console.log('  Commit public/team/headshots/ to your repo.')
} else {
  console.log('\nNothing new to download.')
}
