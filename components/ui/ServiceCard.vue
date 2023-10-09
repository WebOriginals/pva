<template lang="pug">
.services-el
  .services-el__img
    img(:src="imgService")
  span.services-el__name {{ account.servName }}
  span.services-el__quantity  {{ account.count }} шт.
  UiBtnBlue.services-el__btn(size="lg" :label="labelService" variant="outline" @click="redirectServices")
</template>

<script setup>
const props =defineProps({
  account: {
    type: Object,
    required: true,
  }
})

const  redirectServices = () => {
  console.log("6666");
}
const labelService = `от $ ${props.account.prices.def}`;
const imgService = `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${props.account.service}0.webp`;
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.services-el{
  @include adaptiveValue(padding-top, 12, 8);
  @include adaptiveValue(padding-bottom, 12, 8);
  @apply bg-sky-50 rounded-lg px-3 md:px-5 flex items-center gap-2;

  &__img{
    @apply bg-sky-50 rounded-full overflow-hidden w-8 h-8;

    img{
      @apply max-w-full;
    }
  }

  &__name{
    @apply truncate text-ellipsis overflow-hidden mr-2 md:mr-0;
  }

  &__quantity{
    @apply hidden md:block ml-[auto];
  }

  &__btn{
    @apply ml-[auto] md:ml-0;
  }
}
</style>