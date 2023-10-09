<template lang="pug">
section.newsSpoller
  .newsSpoller__container
    h2 {{ $t('main.newsSpoller.title') }}
    swiper(:slides-per-view='3', :space-between='50', @swiper='onSwiper', @slidechange='onSlideChange')
      swiper-slide
        UiNewCard

</template>

<script setup>

</script>

<style scoped lang="scss">

</style>