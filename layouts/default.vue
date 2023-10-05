<template lang="pug">
div
  html(:lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir")
    head
      template(v-for='link in head.link', :key='link.id')
        link(:id='link.id', :rel='link.rel', :href='link.href', :hreflang='link.hreflang')
      template(v-for='meta in head.meta', :key='meta.id')
        meta(:id='meta.id', :property='meta.property', :content='meta.content')
    body
      .wrapper(:class="{ lock : lockScrollValue }")
        TheHeader(@lockScroll="lockScroll")
        main.page
            slot
        TheFooter

</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const lockScrollValue = ref(false)
const lockScroll = (value) => {
  lockScrollValue.value = value.value
}
</script>

<style  lang="scss">

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > main {
    flex: 1 1 auto;
  }

  &.lock{
    height: 100vh;
  }
}
</style>