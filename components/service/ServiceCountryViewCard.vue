<template>
  <div class="services-el">

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
          @click="() => console.log('bay')"
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
});

const labelService =  `от $ ${props.account.prices.def}`;
const imgService = `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${props.account.country}.svg`;
</script>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.services-el {
  @include adaptiveValue(padding-top, 12, 8);
  @include adaptiveValue(padding-bottom, 12, 8);
  @apply bg-sky-50 rounded-lg px-3 md:px-5 flex flex items-center gap-2;

  &.active{
    @apply bg-sky-600 text-white;
  }

  &__img {
    @apply bg-sky-50 rounded overflow-hidden w-6 h-6 md:w-8 md:h-8 shrink-0;

    img {
      @apply max-w-full;
    }
  }

  &__name {
    @apply truncate text-xs mr-2  md:mr-0 md:text-base dark:text-stone-500;
  }

  &__quantity {
    @apply hidden md:block ml-[auto] shrink-0;
  }

  &__btn {
    @apply ml-[auto] text-xs min-w-[78px] md:ml-0 md:text-base md:min-w-[94px];
  }
}
</style>