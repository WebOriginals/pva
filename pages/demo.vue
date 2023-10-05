<template lang="pug">
.__container
  h1.text-3xl.font-bold.underline {{Demo}}

  section.buttons.pt-8.pb-8.bg-white.rounded-lg
    div.__container
      .grid.grid-cols-1.gap-4.mb-8
        UiSearchService(size="xxl")
        UiSearchService(size="xl")
        UiSearchService(size="md")

      .grid.grid-cols-2.gap-6.mb-8(class="w-2/3")
        UiBtnBlue(size="xxl" label="Button")
        UiBtnBlue(disabled label="Button")
        UiBtnBlue(size="xl" label="Button")
        UiBtnBlue(disabled label="Button")
        UiBtnBlue(size="lg" label="Button")
        UiBtnBlue(disabled label="Button")
        UiBtnBlue(size="md" icon="icon-pva__copy" label="Button")
        UiBtnBlue(disabled icon="icon-pva__copy" label="Button")
        UiBtnBlue(size="sm" label="Button")
        UiBtnBlue(disabled label="Button")

      .grid.grid-cols-4.gap-4.mb-8.w-52
        UiBtnBlue(size="sm" icon="icon-pva__plus" rounded="rounded-full")
        UiBtnBlue(disabled icon="icon-pva__plus" rounded="rounded-full")
        UiBtnBlue(size="lg" icon="icon-pva__update")
        UiBtnBlue(disabled icon="icon-pva__update")


      .grid.grid-cols-2.gap-4.mb-8(class="w-2/3")
        UiBtnBlue(size="xxl" label="Button" variant="outline")
        UiBtnBlue(disabled label="Button" variant="outline")
        UiBtnBlue(size="xl" label="Button" variant="outline")
        UiBtnBlue(disabled label="Button" variant="outline")
        UiBtnBlue(size="lg" label="Button" variant="outline")
        UiBtnBlue(disabled label="Button" variant="outline")
        UiBtnBlue(size="md" icon="icon-pva__copy" label="Button" variant="outline")
        UiBtnBlue(disabled icon="icon-pva__copy" label="Button" variant="outline")
        UiBtnBlue(size="sm" label="Button" variant="outline")
        UiBtnBlue(disabled label="Button" variant="outline")

      .grid.grid-cols-4.gap-4.mb-8.w-52
        UiBtnBlue(size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="outline")
        UiBtnBlue(disabled icon="icon-pva__plus" rounded="rounded-full" variant="outline")
        UiBtnBlue(size="lg" icon="icon-pva__update" variant="outline")
        UiBtnBlue(disabled icon="icon-pva__update" variant="outline")


      .grid.grid-cols-2.gap-4.mb-8(class="w-2/3")
        UiBtnBlue(size="xxl" label="Button" variant="soft")
        UiBtnBlue(disabled label="Button" variant="soft")
        UiBtnBlue(size="xl" label="Button" variant="soft")
        UiBtnBlue(disabled label="Button" variant="soft")
        UiBtnBlue(size="lg" label="Button" variant="soft")
        UiBtnBlue(disabled label="Button" variant="soft")
        UiBtnBlue(size="md" icon="icon-pva__copy" label="Button" variant="soft")
        UiBtnBlue(disabled icon="icon-pva__copy" label="Button" variant="soft")
        UiBtnBlue(size="sm" label="Button" variant="soft")
        UiBtnBlue(disabled label="Button" variant="soft")

      .grid.grid-cols-4.gap-4.mb-8.w-52
        UiBtnBlue(size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="soft")
        UiBtnBlue(disabled icon="icon-pva__plus" rounded="rounded-full" variant="soft")
        UiBtnBlue(size="lg" icon="icon-pva__update" variant="soft")
        UiBtnBlue(disabled icon="icon-pva__update" variant="soft")
  section.accordion.py-32
    UiTheAccordion


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