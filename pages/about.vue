<template lang="pug">
div
  h1(v-html="$t('Title2')")
  NuxtLink(:to="localePath('/')") {{ $t('Title1') }}
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style scoped>

</style>