<template>
  <div class="root">
    <header>Header page</header>
    <NuxtLink to="/scroll/long-page">Long page</NuxtLink>
    <Nuxt />
    <notifications group="foo" />
  </div>
</template>

<script>
  export default {
    scrollToTop: true
  }
</script>

<style>

</style>
