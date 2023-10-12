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
        main.page(:class="{ pb150 : !store.getIsLoggedIn }")
            slot
        TheFooter

</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
import {useUserStore} from "~/store/user.js";
const store = useUserStore()

const lockScrollValue = ref(false)
const lockScroll = (value) => {
  lockScrollValue.value = value.value
}
</script>

<style  lang="scss">

.wrapper {
  //min-height: 100vh;
  //display: flex;
  //flex-direction: column;
  //overflow: hidden;
  @apply overflow-hidden flex min-h-screen flex-col;

  > main {
    //flex: 1 1 auto;
    @apply flex-auto pb-16;

    &.pb150{
      @apply pb-48;
    }
  }

  &.lock{
    //height: 100vh;
    @apply h-screen;
  }
}
</style>