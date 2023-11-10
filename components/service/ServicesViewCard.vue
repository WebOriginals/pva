<template>
  <div class="services-el" :class="{'bg': background}">

    <div class="services-el__img">
      <img :src="imgService" />
    </div>

    <span class="services-el__name">{{ account.servName }}</span>

    <template v-if="account.count">
      <span class="services-el__quantity"> {{ account.count }} шт.</span>
    </template>

    <template v-if="account.prices">
      <UiBaseButton
          class="services-el__btn"
          size="lg"
          :label="labelService"
          variant="outline"
          @click="() => $router.push(`${locale}/service/${account.servName}`)"
      ></UiBaseButton>
    </template>

  </div>
</template>

<script setup>
const { locale } = useI18n();
const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
  background:{
    type: Boolean,
    required: true,
  }
});

const labelService = computed(() =>  {
  if(props.account.prices) {
   return `от $ ${props.account.prices.def}`
  }
})
const imgService = `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${props.account.service}0.webp`;
</script>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.services-el {
  @include adaptiveValue(padding-top, 12, 8);
  @include adaptiveValue(padding-bottom, 12, 8);
  @apply cursor-pointer rounded-lg px-3 md:px-5 flex flex items-center gap-2;

  &.bg{
    @apply bg-sky-50;
  }

  &.active{
    @apply lg:bg-sky-600 lg:text-white;
  }

  &__img {
    @apply bg-sky-50 rounded-full overflow-hidden w-6 h-6 md:w-8 md:h-8 shrink-0;

    img {
      @apply max-w-full;
    }
  }

  &__name {
    @apply truncate  mr-2  md:mr-0 text-base dark:text-stone-500;
  }

  &__quantity {
    @apply hidden md:block ml-[auto] shrink-0;
  }

  &__btn {
    @apply ml-[auto] text-xs min-w-[78px] md:ml-0 md:text-base md:min-w-[94px];
  }
}
</style>
