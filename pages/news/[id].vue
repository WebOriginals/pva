<template>
  <section class="news-card">
    <div class="news-card__container">
        <NuxtLink :to="localePath('/news')"> {{ $route.params.id }} </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath()
const route = useRoute()

</script>

<style scoped lang="scss">

</style>