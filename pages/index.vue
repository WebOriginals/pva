<template lang="pug">
MainTheFirst
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
const localePath = useLocalePath()
const { data } = await useFetch('/api/hello')
</script>

<style scoped>


</style>
