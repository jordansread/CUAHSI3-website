<script setup lang="ts">
// Permanent redirect: individual highlight pages moved to About → Impact.
definePageMeta({
  redirect: (to) => `/about/impact/${to.params.slug}`
})
</script>
<template><div /></template>
