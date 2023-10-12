<template lang="pug">
.callToAction
  p Регистрируйтесь в соцсетях, на торговых площадках, биржах и онлайн-сервисах без спама и разглашения личных данных.
  UiBtnBlue(size="xxl" label="Получить номер" variant="soft")
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";
.callToAction{
  @include adaptiveValue(padding-top, 92, 64);
  @include adaptiveValue(padding-bottom, 92, 64);
  @include adaptiveValue(padding-left, 64, 24);
  @include adaptiveValue(padding-right, 64, 24);
  @apply grid md:grid-cols-[1fr_240px] gap-8 bg-sky-500 rounded-[32px] -mt-36;

  p{
    @apply text-white;
  }
}
</style>