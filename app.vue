<template>
  <div>
    <!-- Global nav -->
    <nav class="border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-6 flex items-center h-12">
        <NuxtLink to="/" class="text-sm font-medium mr-7">
          CUAHSI <span class="text-gray-400 font-normal">water science</span>
        </NuxtLink>
        <div class="flex gap-0 text-sm">
          <NuxtLink to="/about" class="px-3 py-3 text-gray-500 hover:text-gray-900">About</NuxtLink>
          <NuxtLink to="/data-platforms" class="px-3 py-3 text-gray-500 hover:text-gray-900">Tools &amp; platforms</NuxtLink>
          <NuxtLink to="/learn-train" class="px-3 py-3 text-gray-500 hover:text-gray-900">Learn &amp; train</NuxtLink>
          <NuxtLink to="/community" class="px-3 py-3 text-gray-500 hover:text-gray-900">Get involved</NuxtLink>
        </div>
      </div>
    </nav>

    <NuxtPage />

    <footer class="border-t border-gray-100 mt-16">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex gap-5 text-xs text-gray-400">
          <NuxtLink to="/about/contact">Contact</NuxtLink>
          <NuxtLink to="/about/membership">Membership</NuxtLink>
          <NuxtLink to="/about/policies">Policies</NuxtLink>
        </div>
        <p class="text-xs text-gray-400">© 2026 CUAHSI</p>
      </div>
    </footer>
  </div>
</template>
