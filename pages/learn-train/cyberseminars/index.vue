<script setup lang="ts">
useHead({
  title: 'Cyberseminar archive · Learn & train · CUAHSI',
  meta: [{ name: 'description', content: 'Browse 200+ CUAHSI cyberseminar recordings on water science, data management, career development, and more. Free and open to all.' }]
})

const { data: seminars } = await useAsyncData('cyberseminars', () =>
  queryContent('cyberseminars').where({ published: true }).sort({ date: -1 }).find()
)

const allTags = computed(() =>
  [...new Set(seminars.value?.flatMap(s => s.tags ?? []))].sort()
)

const allSeries = computed(() =>
  [...new Map(
    seminars.value?.filter(s => s.series).map(s => [s.series_slug, s.series])
  ).entries()].map(([slug, name]) => ({ slug, name }))
)

const activeTag = ref('all')
const activeSeries = ref('all')
const activeVideo = ref<string | null>(null)
const activeTranscript = ref<string | null>(null)
const transcripts = ref<Record<string, any>>({})

const filtered = computed(() => {
  let items = seminars.value ?? []
  if (activeSeries.value !== 'all') items = items.filter(s => s.series_slug === activeSeries.value)
  if (activeTag.value !== 'all') items = items.filter(s => s.tags?.includes(activeTag.value))
  return items
})

const byYear = computed(() => {
  const years: Record<string, typeof filtered.value> = {}
  for (const s of filtered.value ?? []) {
    const y = String(new Date(s.date).getFullYear())
    if (!years[y]) years[y] = []
    years[y].push(s)
  }
  return Object.entries(years).sort(([a], [b]) => Number(b) - Number(a))
})

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function selectVideo(slug: string) {
  if (activeVideo.value === slug) {
    activeVideo.value = null
    activeTranscript.value = null
  } else {
    activeVideo.value = slug
    activeTranscript.value = null
  }
}

function paraDisplayTime(ts: any): string {
  // Handle raw seconds (number), "m:ss" string, or NaN gracefully
  if (typeof ts === 'number' && !isNaN(ts)) {
    const m = Math.floor(ts / 60)
    const s = Math.floor(ts % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }
  if (typeof ts === 'string' && ts.includes(':') && !ts.includes('NaN')) {
    return ts
  }
  return ''
}

function paraYoutubeUrl(videoId: string, ts: any): string {
  let seconds = 0
  if (typeof ts === 'number' && !isNaN(ts)) {
    seconds = Math.floor(ts)
  } else if (typeof ts === 'string' && ts.includes(':') && !ts.includes('NaN')) {
    const parts = ts.split(':')
    seconds = parseInt(parts[0]) * 60 + parseInt(parts[1])
  }
  if (seconds === 0) return `https://www.youtube.com/watch?v=${videoId}`
  return `https://www.youtube.com/watch?v=${videoId}&t=${seconds}s`
}

async function toggleTranscript(seminar: any) {
  const id = seminar.youtube_id
  if (activeTranscript.value === id) {
    activeTranscript.value = null
    return
  }
  // Load transcript JSON if not cached
  if (!transcripts.value[id]) {
    try {
      const data = await $fetch(`/cyberseminars/transcripts/${id}.json`)
      transcripts.value[id] = data
    } catch {
      transcripts.value[id] = null
    }
  }
  activeTranscript.value = id
}
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <!-- Header -->
      <div style="padding:36px 0 28px;border-bottom:0.5px solid #f3f4f6;margin-bottom:28px;">
        <p style="font-size:11px;color:#9ca3af;margin-bottom:8px;">
          <NuxtLink to="/learn-train" style="text-decoration:none;color:#9ca3af;">Learn &amp; train</NuxtLink> / Cyberseminar archive
        </p>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px;">
          <div>
            <h1 style="font-size:28px;font-weight:500;margin-bottom:10px;">Cyberseminar archive</h1>
            <p style="font-size:14px;color:#6b7280;line-height:1.65;max-width:540px;">
              Free virtual presentations, panels, and workshops on water science topics.
              Watch recordings directly here. Transcripts are available on select recordings
              for accessibility and search.
            </p>
          </div>
          <a href="https://www.youtube.com/@CUAHSI" target="_blank" rel="noopener"
            style="flex-shrink:0;font-size:12px;padding:7px 14px;border:0.5px solid #d1d5db;border-radius:8px;text-decoration:none;color:inherit;white-space:nowrap;margin-top:4px;">
            Full archive on YouTube ↗
          </a>
        </div>
      </div>

      <!-- Filters -->
      <div style="display:flex;gap:20px;align-items:flex-start;margin-bottom:28px;flex-wrap:wrap;">
        <div>
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Series</p>
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <button @click="activeSeries='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeSeries==='all'?'#111827':'#d1d5db'};background:${activeSeries==='all'?'#111827':'transparent'};color:${activeSeries==='all'?'white':'#6b7280'};`">
              All series
            </button>
            <button v-for="s in allSeries" :key="s.slug" @click="activeSeries=s.slug"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeSeries===s.slug?'#111827':'#d1d5db'};background:${activeSeries===s.slug?'#111827':'transparent'};color:${activeSeries===s.slug?'white':'#6b7280'};`">
              {{ s.name }}
            </button>
          </div>
        </div>
        <div>
          <p style="font-size:11px;color:#9ca3af;margin-bottom:6px;font-weight:500;letter-spacing:.05em;text-transform:uppercase;">Topic</p>
          <div style="display:flex;gap:5px;flex-wrap:wrap;">
            <button @click="activeTag='all'"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeTag==='all'?'#111827':'#d1d5db'};background:${activeTag==='all'?'#111827':'transparent'};color:${activeTag==='all'?'white':'#6b7280'};`">
              All topics
            </button>
            <button v-for="t in allTags" :key="t" @click="activeTag=t"
              :style="`font-size:12px;padding:4px 10px;border-radius:99px;cursor:pointer;border:0.5px solid ${activeTag===t?'#111827':'#d1d5db'};background:${activeTag===t?'#111827':'transparent'};color:${activeTag===t?'white':'#6b7280'};`">
              {{ t.replace(/-/g,' ') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Listings by year -->
      <div style="margin-bottom:48px;">
        <div v-for="[year, items] in byYear" :key="year" style="margin-bottom:36px;">
          <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:0;padding-bottom:10px;border-bottom:0.5px solid #f3f4f6;">
            {{ year }}
          </p>

          <div v-for="seminar in items" :key="seminar.slug" style="border-bottom:0.5px solid #f3f4f6;">

            <!-- Collapsed row -->
            <div @click="selectVideo(seminar.slug)"
              style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;padding:16px 0;cursor:pointer;align-items:start;">
              <div>
                <p style="font-size:14px;font-weight:500;line-height:1.35;margin-bottom:5px;">{{ seminar.title }}</p>
                <p style="font-size:12px;color:#6b7280;margin-bottom:6px;">
                  {{ fmtDate(seminar.date) }}
                  <span v-if="seminar.speakers?.length && seminar.speakers[0] !== 'CUAHSI Staff' && seminar.speakers[0] !== 'AGU H3S Panel'">
                    · {{ seminar.speakers.join(', ') }}
                  </span>
                  <span v-if="seminar.series"> · {{ seminar.series }}</span>
                </p>
                <p style="font-size:13px;color:#6b7280;line-height:1.55;max-width:580px;">{{ seminar.description }}</p>
                <div style="display:flex;align-items:center;gap:8px;margin-top:8px;flex-wrap:wrap;">
                  <span v-for="t in seminar.tags" :key="t"
                    style="font-size:11px;padding:2px 8px;border-radius:99px;background:#f3f4f6;color:#6b7280;">
                    {{ t.replace(/-/g,' ') }}
                  </span>
                  <span v-if="seminar.has_transcript"
                    style="font-size:11px;padding:2px 8px;border-radius:99px;background:#EFF6FF;color:#1E40AF;border:0.5px solid #BFDBFE;">
                    transcript available
                  </span>
                </div>
              </div>
              <!-- Thumbnail -->
              <div style="flex-shrink:0;">
                <div v-if="activeVideo !== seminar.slug"
                  style="width:120px;height:68px;border-radius:6px;overflow:hidden;position:relative;">
                  <img :src="`https://img.youtube.com/vi/${seminar.youtube_id}/mqdefault.jpg`"
                    style="width:100%;height:100%;object-fit:cover;" />
                  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                    <div style="width:28px;height:28px;background:rgba(0,0,0,0.65);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                      <span style="color:white;font-size:10px;margin-left:2px;">▶</span>
                    </div>
                  </div>
                </div>
                <div v-else style="font-size:11px;color:#1D9E75;font-weight:500;padding-top:4px;text-align:right;">
                  ▲ hide
                </div>
              </div>
            </div>

            <!-- Expanded: video + optional transcript -->
            <div v-if="activeVideo === seminar.slug" style="padding-bottom:24px;">

              <div style="display:grid;gap:20px;"
                :style="activeTranscript === seminar.youtube_id ? 'grid-template-columns:minmax(0,1fr) 380px;' : 'grid-template-columns:1fr;'">

                <!-- Video embed -->
                <div>
                  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;background:#000;">
                    <iframe
                      :src="`https://www.youtube-nocookie.com/embed/${seminar.youtube_id}?autoplay=1&rel=0`"
                      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
                    </iframe>
                  </div>
                  <!-- Actions row under video -->
                  <div style="display:flex;align-items:center;gap:14px;margin-top:10px;">
                    <a :href="`https://www.youtube.com/watch?v=${seminar.youtube_id}`"
                      target="_blank" rel="noopener"
                      style="font-size:12px;color:#9ca3af;text-decoration:none;">
                      Watch on YouTube ↗
                    </a>
                    <button v-if="seminar.has_transcript"
                      @click.stop="toggleTranscript(seminar)"
                      style="font-size:12px;background:none;border:none;cursor:pointer;padding:0;"
                      :style="activeTranscript === seminar.youtube_id ? 'color:#1D9E75;font-weight:500;' : 'color:#6b7280;'">
                      {{ activeTranscript === seminar.youtube_id ? '▲ Hide transcript' : '≡ Show transcript' }}
                    </button>
                  </div>
                </div>

                <!-- Transcript panel -->
                <div v-if="activeTranscript === seminar.youtube_id && transcripts[seminar.youtube_id]"
                  style="border:0.5px solid #e5e7eb;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;max-height:480px;">
                  <div style="padding:12px 16px;border-bottom:0.5px solid #f3f4f6;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                    <p style="font-size:12px;font-weight:500;color:#374151;">Transcript</p>
                    <span style="font-size:11px;color:#9ca3af;">Auto-generated · may contain errors</span>
                  </div>
                  <div style="overflow-y:auto;padding:16px;flex:1;">
                    <div v-for="para in transcripts[seminar.youtube_id].paragraphs" :key="para.timestamp"
                      style="margin-bottom:16px;">
                      <a :href="paraYoutubeUrl(seminar.youtube_id, para.timestamp)"
                        target="_blank" rel="noopener"
                        style="font-size:10px;font-weight:500;color:#1D9E75;text-decoration:none;font-family:monospace;display:block;margin-bottom:4px;">
                        {{ paraDisplayTime(para.timestamp) }}
                      </a>
                      <p style="font-size:12px;color:#374151;line-height:1.65;margin:0;">{{ para.text }}</p>
                    </div>
                  </div>
                  <div style="padding:10px 16px;border-top:0.5px solid #f3f4f6;background:#f9fafb;flex-shrink:0;">
                    <p style="font-size:11px;color:#9ca3af;margin:0;">
                      Timestamps link to the corresponding point in the YouTube video.
                    </p>
                  </div>
                </div>

                <!-- Transcript loading state -->
                <div v-else-if="activeTranscript === seminar.youtube_id && !transcripts[seminar.youtube_id]"
                  style="border:0.5px solid #e5e7eb;border-radius:10px;padding:24px;display:flex;align-items:center;justify-content:center;">
                  <p style="font-size:13px;color:#9ca3af;">Transcript not available for this recording.</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <p v-if="!filtered?.length" style="font-size:14px;color:#9ca3af;padding:20px 0;">
          No recordings match this filter.
        </p>
      </div>

      <!-- YouTube CTA -->
      <div style="background:#f9fafb;border-radius:12px;padding:22px 24px;margin-bottom:48px;display:flex;align-items:center;justify-content:space-between;gap:20px;">
        <div>
          <p style="font-size:14px;font-weight:500;margin-bottom:4px;">200+ recordings in the full archive</p>
          <p style="font-size:13px;color:#6b7280;line-height:1.6;">
            Recordings going back to 2003 are on the CUAHSI YouTube channel, organized into playlists by series.
          </p>
        </div>
        <a href="https://www.youtube.com/@CUAHSI" target="_blank" rel="noopener"
          style="flex-shrink:0;font-size:13px;font-weight:500;padding:9px 18px;background:#111827;color:white;border-radius:8px;text-decoration:none;white-space:nowrap;">
          Open YouTube channel ↗
        </a>
      </div>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <NuxtLink to="/learn-train" style="font-size:12px;color:#9ca3af;text-decoration:none;">Learn &amp; train</NuxtLink>
          <NuxtLink to="/community/events" style="font-size:12px;color:#9ca3af;text-decoration:none;">Events</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
