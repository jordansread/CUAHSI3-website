<script setup lang="ts">
useHead({
  title: 'Tools & platforms · CUAHSI',
  meta: [{ name: 'description', content: 'CUAHSI operates HydroShare and related cyberinfrastructure for publishing, discovering, analyzing, and managing water science data. Open to all researchers.' }]
})

const hydroshareCapabilities = [
  {
    id: 'publish',
    label: 'Publish',
    color: '#EFF6FF',
    text: '#1E40AF',
    title: 'HydroShare: Publish',
    desc: 'Upload, document, and formally publish water data, models, code, and workflows with DOI registration via DataCite. FAIR-aligned metadata, fine-grained access control, and automated NSF Public Access Repository compliance.',
    tags: ['DOI registration', 'FAIR data', 'NSF compliance', 'Access control'],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    color: '#EDE9FE',
    text: '#5B21B6',
    title: 'HydroShare: Workflows',
    desc: 'Run reproducible analyses directly on HydroShare-hosted data using pre-configured JupyterHub instances for Python, R, and MATLAB. Supports a continuum of reproducibility from simple co-located scripts to fully automated, containerized workflows triggered from GitHub.',
    tags: ['JupyterHub', 'Python / R / MATLAB', 'Reproducible science', 'Cloud compute'],
  },
  {
    id: 'timeseries',
    label: 'Time Series',
    color: '#DCFCE7',
    text: '#15803D',
    title: 'HydroShare: Time Series',
    desc: 'Hosting and support for sensor data management across field campaigns. Stream real-time data from instruments, review and quality-control data interactively, then migrate seamlessly into HydroShare: Publish at project end. Built on open-source community platforms — no proprietary formats or subscription fees.',
    tags: ['Sensor data', 'Real-time streaming', 'QA/QC tools', 'Field campaigns'],
    badge: 'New capability',
  },
  {
    id: 'discover',
    label: 'Discover',
    color: '#FFF7ED',
    text: '#C2410C',
    title: 'HydroShare: Discover',
    desc: 'Find water data across HydroShare and connected repositories. Full-text and metadata search with spatial and temporal filtering, autocomplete, and quick previews. Schema.org JSON-LD metadata promotes discovery via Google and Bing. Python (hsclient) and R client libraries for programmatic access.',
    tags: ['Full-text search', 'Spatial queries', 'Python client', 'R client'],
  },
]

const partners = [
  'National Science Foundation', 'NOAA / CIROH', 'Internet of Water Coalition',
  'USGS', 'Utah State University', 'Environmental Data Initiative',
  'EarthScope', 'NEON', 'Community Surface Dynamics Modeling System',
  'DataONE', 'Stroud Water Research Center', 'HydroLearn',
]
</script>

<template>
  <div>
    <nav style="border-bottom:0.5px solid #e5e7eb;">
      <div style="max-width:1024px;margin:0 auto;padding:0 24px;display:flex;align-items:center;height:48px;">
        <NuxtLink to="/" style="font-size:14px;font-weight:500;margin-right:28px;text-decoration:none;color:inherit;">CUAHSI <span style="color:#9ca3af;font-weight:400;">water science</span></NuxtLink>
        <NuxtLink to="/about" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">About</NuxtLink>
        <NuxtLink to="/data-platforms" style="font-size:12px;color:#111827;padding:0 12px;text-decoration:none;border-bottom:2px solid #111827;line-height:48px;">Tools &amp; platforms</NuxtLink>
        <NuxtLink to="/learn-train" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Learn &amp; train</NuxtLink>
        <NuxtLink to="/programs" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Programs</NuxtLink>
        <NuxtLink to="/community" style="font-size:12px;color:#6b7280;padding:0 12px;text-decoration:none;">Get involved</NuxtLink>
        <div style="margin-left:auto;">
          <SiteSearch />
        </div>
      </div>
    </nav>

    <div style="max-width:1024px;margin:0 auto;padding:0 24px;">

      <!-- Hero -->
      <section style="padding:48px 0 40px;border-bottom:0.5px solid #f3f4f6;">
        <p style="font-size:11px;color:#9ca3af;font-weight:500;letter-spacing:.07em;text-transform:uppercase;margin-bottom:12px;">Tools &amp; platforms</p>
        <h1 style="font-size:32px;font-weight:500;line-height:1.2;margin-bottom:16px;max-width:580px;">
          Cyberinfrastructure for the full water data lifecycle
        </h1>
        <p style="font-size:15px;color:#6b7280;line-height:1.7;max-width:580px;margin-bottom:24px;">
          CUAHSI operates shared data platforms used by water scientists at universities, federal agencies,
          and research organizations worldwide. These tools are open to all — no CUAHSI membership required.
          Google Scholar returns more than 6,000 results searching "CUAHSI OR HydroShare."
        </p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#f3f4f6;border:0.5px solid #f3f4f6;border-radius:12px;overflow:hidden;max-width:440px;">
          <div style="background:#f9fafb;padding:14px 18px;">
            <p style="font-size:22px;font-weight:500;margin-bottom:2px;">25,660</p>
            <p style="font-size:11px;color:#9ca3af;">HydroShare registered users</p>
          </div>
          <div style="background:#f9fafb;padding:14px 18px;">
            <p style="font-size:22px;font-weight:500;margin-bottom:2px;">1,600+</p>
            <p style="font-size:11px;color:#9ca3af;">Published datasets (2016–2024)</p>
          </div>
          <div style="background:#f9fafb;padding:14px 18px;">
            <p style="font-size:22px;font-weight:500;margin-bottom:2px;">8,500+</p>
            <p style="font-size:11px;color:#9ca3af;">Cyberseminar registrations</p>
          </div>
        </div>
      </section>

      <!-- HydroShare ecosystem -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:40px;align-items:start;margin-bottom:32px;">
          <div>
            <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">Core platform</p>
            <h2 style="font-size:22px;font-weight:500;margin-bottom:12px;">HydroShare ecosystem</h2>
            <p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px;">
              HydroShare is the water science community platform for publishing, discovering, and collaborating
              on data, models, code, and workflows. It co-locates data storage with analysis tools and compute
              resources — delivering value well beyond data archival and download.
            </p>
            <p style="font-size:14px;color:#374151;line-height:1.75;margin-bottom:14px;">
              The Nature Publishing Group, AGU, and the American Society of Civil Engineers have all recognized
              HydroShare as a repository of record. HydroShare is open-source, developed under Agile methods,
              and built on modern cloud infrastructure (Kubernetes, infrastructure-as-code, automated CI/CD).
              All data and metadata are accessible via a well-documented REST API.
            </p>
            <p style="font-size:14px;color:#374151;line-height:1.75;">
              HydroShare strives to adhere to TRUST repository principles: code is open-source, services are
              broadly available, and modern practices ensure hosted data are preserved and community needs are met.
            </p>
          </div>
          <div style="background:#f9fafb;border-radius:12px;padding:20px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:12px;">Recognized by</p>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div v-for="r in ['Nature Publishing Group', 'American Geophysical Union (AGU)', 'American Society of Civil Engineers', 'NSF Public Access Repository']" :key="r"
                style="display:flex;align-items:center;gap:8px;">
                <span style="width:5px;height:5px;border-radius:50%;background:#1D9E75;flex-shrink:0;"></span>
                <p style="font-size:12px;color:#374151;">{{ r }}</p>
              </div>
            </div>
            <div style="border-top:0.5px solid #e5e7eb;margin-top:14px;padding-top:14px;">
              <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;">Data types supported</p>
              <p style="font-size:12px;color:#6b7280;line-height:1.6;">Individual samples · Point-scale time series · Geospatial layers · Multidimensional arrays · Models · Code · Workflows</p>
            </div>
            <a href="https://www.hydroshare.org" target="_blank" rel="noopener"
              style="display:block;margin-top:14px;font-size:13px;font-weight:500;padding:8px 16px;background:#111827;color:white;border-radius:8px;text-decoration:none;text-align:center;">
              Open HydroShare ↗
            </a>
          </div>
        </div>

        <!-- Four capability cards -->
        <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;">
          <div v-for="cap in hydroshareCapabilities" :key="cap.id"
            style="border:0.5px solid #e5e7eb;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span :style="`font-size:11px;padding:3px 10px;border-radius:99px;font-weight:500;background:${cap.color};color:${cap.text};`">
                {{ cap.label }}
              </span>
              <span v-if="cap.badge" style="font-size:10px;padding:2px 8px;border-radius:99px;background:#FEF9C3;color:#854D0E;border:0.5px solid #FDE68A;">
                {{ cap.badge }}
              </span>
            </div>
            <p style="font-size:14px;font-weight:500;margin-bottom:7px;">{{ cap.title }}</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin-bottom:12px;">{{ cap.desc }}</p>
            <div style="display:flex;flex-wrap:wrap;gap:5px;">
              <span v-for="t in cap.tags" :key="t"
                style="font-size:11px;padding:2px 8px;border-radius:99px;border:0.5px solid #e5e7eb;color:#6b7280;">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Research data management guide -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;">

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:22px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">Guidance</p>
            <p style="font-size:15px;font-weight:500;margin-bottom:8px;">Research data management guide</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:14px;">
              Practical guidance for planning, organizing, and publishing water science data throughout the
              research lifecycle. Covers FAIR and CARE principles, data management plans for NSF compliance,
              reproducible workflow practices, and how to align your work with open-science norms.
            </p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:14px;">
              Staff are available to provide pre-publication data curation assistance — approximately six hours
              per data publication, free of charge — and can help identify the right repository when HydroShare
              is not the best fit (e.g., EDI for aquatic biology, EarthChem for samples).
            </p>
            <a href="https://www.cuahsi.org/data-services/research-data-management-guide" target="_blank" rel="noopener"
              style="font-size:13px;color:#1D9E75;text-decoration:none;">View the guide ↗</a>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:22px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">Standards &amp; principles</p>
            <p style="font-size:15px;font-weight:500;margin-bottom:12px;">FAIR and CARE data practices</p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div style="padding:12px;background:#f9fafb;border-radius:8px;">
                <p style="font-size:12px;font-weight:500;margin-bottom:3px;">FAIR principles</p>
                <p style="font-size:12px;color:#6b7280;line-height:1.5;">Findable, Accessible, Interoperable, Reusable. HydroShare provides DOIs, machine-readable metadata, and a public API. CUAHSI staff offer expert review and badging for new submissions.</p>
              </div>
              <div style="padding:12px;background:#f9fafb;border-radius:8px;">
                <p style="font-size:12px;font-weight:500;margin-bottom:3px;">CARE principles</p>
                <p style="font-size:12px;color:#6b7280;line-height:1.5;">Collective Benefit, Authority to Control, Responsibility, Ethics. CUAHSI is actively working with Tribal leaders to center Indigenous data governance in how HydroShare supports data sovereignty.</p>
              </div>
              <div style="padding:12px;background:#f9fafb;border-radius:8px;">
                <p style="font-size:12px;font-weight:500;margin-bottom:3px;">Reproducibility</p>
                <p style="font-size:12px;color:#6b7280;line-height:1.5;">From simple co-located scripts to containerized workflows with automated dependency tracking — HydroShare supports a continuum of reproducibility for users at all proficiency levels.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- HIS legacy note -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="background:#f9fafb;border-radius:12px;padding:22px;display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:24px;align-items:start;">
          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <p style="font-size:14px;font-weight:500;">Hydrologic Information System (HIS)</p>
              <span style="font-size:10px;padding:2px 8px;border-radius:99px;background:#F3F4F6;color:#6B7280;border:0.5px solid #e5e7eb;">Legacy</span>
            </div>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:10px;">
              The CUAHSI Hydrologic Information System has provided discovery and access to water time-series
              data from federal agencies, universities, and research networks since the early 2000s. HIS
              established foundational standards including WaterML and the Observations Data Model.
            </p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;">
              HIS currently operates on legacy hardware and is being actively migrated into the HydroShare
              ecosystem. The full HIS catalog is being integrated into HydroShare as individual time-series
              resources, ensuring all legacy datasets remain discoverable. Spatial and temporal query
              capabilities will be added to HydroShare: Discover as part of this transition.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="padding:12px;background:white;border-radius:8px;border:0.5px solid #e5e7eb;">
              <p style="font-size:11px;color:#9ca3af;margin-bottom:3px;">Migrating to</p>
              <p style="font-size:12px;font-weight:500;">HydroShare: Discover</p>
            </div>
            <div style="padding:12px;background:white;border-radius:8px;border:0.5px solid #e5e7eb;">
              <p style="font-size:11px;color:#9ca3af;margin-bottom:3px;">Replacing legacy with</p>
              <p style="font-size:12px;font-weight:500;">HydroShare: Time Series</p>
            </div>
            <a href="https://his.cuahsi.org" target="_blank" rel="noopener"
              style="font-size:12px;color:#9ca3af;text-decoration:none;text-align:center;padding:8px;">
              Access HIS ↗
            </a>
          </div>
        </div>
      </section>

      <!-- HydroLearn -->
      <section style="padding:40px 0;border-bottom:0.5px solid #f3f4f6;">
        <div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start;">
          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:22px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">Educational platform</p>
            <p style="font-size:15px;font-weight:500;margin-bottom:8px;">HydroLearn</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:12px;">
              An online platform for undergraduate and graduate students featuring open-access learning
              modules on hydrology and water resources. HydroLearn has provided training for 58 instructors
              from 52 U.S. institutions, resulting in 50+ modules viewed 40,000 times.
              Modules frequently draw on HydroShare-hosted data, connecting learning directly to research infrastructure.
            </p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:12px;">
              CUAHSI recently assumed technical operations of HydroLearn and is developing a peer-review
              process for new modules, a governing body under the Education and Outreach Advisory Committee,
              and annual impact reports for module authors.
            </p>
            <a href="https://www.hydrolearn.org" target="_blank" rel="noopener"
              style="font-size:13px;color:#1D9E75;text-decoration:none;">Browse HydroLearn modules ↗</a>
          </div>

          <div style="border:0.5px solid #e5e7eb;border-radius:12px;padding:22px;">
            <p style="font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;">API access</p>
            <p style="font-size:15px;font-weight:500;margin-bottom:8px;">HydroShare client libraries</p>
            <p style="font-size:13px;color:#6b7280;line-height:1.65;margin-bottom:12px;">
              HydroShare provides a well-documented REST API and client libraries for programmatic access.
              The Python client (hsclient) supports user authentication, dataset search, upload, and
              download. An R client with equivalent features is in development.
            </p>
            <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
              <div style="padding:10px 12px;background:#f9fafb;border-radius:8px;font-family:monospace;font-size:12px;color:#374151;">
                pip install hsclient
              </div>
              <div style="padding:10px 12px;background:#f9fafb;border-radius:8px;font-family:monospace;font-size:12px;color:#374151;">
                # install.packages("HSClientR")
              </div>
            </div>
            <a href="https://hydroshare.readthedocs.io" target="_blank" rel="noopener"
              style="font-size:13px;color:#1D9E75;text-decoration:none;">View API documentation ↗</a>
          </div>
        </div>
      </section>

      <!-- Partners -->
      <section style="padding:40px 0 48px;">
        <p style="font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:#9ca3af;margin-bottom:16px;">Partner organizations</p>
        <p style="font-size:13px;color:#6b7280;line-height:1.65;max-width:600px;margin-bottom:20px;">
          CUAHSI platforms are developed and maintained in collaboration with a broad network of federal agencies,
          universities, and research infrastructure organizations.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          <span v-for="p in partners" :key="p"
            style="font-size:12px;padding:5px 12px;border-radius:99px;border:0.5px solid #e5e7eb;color:#6b7280;">
            {{ p }}
          </span>
        </div>
      </section>

    </div>

    <footer style="border-top:0.5px solid #f3f4f6;">
      <div style="max-width:1024px;margin:0 auto;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;">
        <div style="display:flex;gap:20px;">
          <a href="mailto:info@cuahsi.org" style="font-size:12px;color:#9ca3af;text-decoration:none;">Contact</a>
          <a href="https://www.cuahsi.org/data-services/frequently-asked-questions" target="_blank" style="font-size:12px;color:#9ca3af;text-decoration:none;">FAQ</a>
          <NuxtLink to="/about/membership" style="font-size:12px;color:#9ca3af;text-decoration:none;">Membership</NuxtLink>
        </div>
        <p style="font-size:12px;color:#9ca3af;">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
