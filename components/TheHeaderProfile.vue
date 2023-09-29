<template lang="pug">
.header-profile
  IconTheProfile

  .header-profile__middle
    span ID: 643248
    span.color-blue $8 016 128

  IconTheTopUpBalance.header-profile__topUpBalance

</template>

<script>

</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.header-profile{
  display: flex;
  gap: rem(8);

  &__middle{
    display: grid;
  }

  &__topUpBalance{
    margin-top: auto;
    cursor: pointer;
  }
}
</style>