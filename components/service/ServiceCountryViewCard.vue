<template>
  <div class="services-el">
    <div class="flex gap-2">
      <div class="services-el__img">
        <img :src="imgService" />
      </div>
      <span class="services-el__name">{{ account.servName }}</span>
    </div>
    <template v-if="account.count">
      <span class="services-el__quantity"> {{ account.count }} {{ $t('pc') }}</span>
    </template>
    <UiBaseCounter size="sm"/>
    <template v-if="account.prices">
      <UiBaseButton
          class="services-el__btn"
          size="lg"
          icon="icon-pva__bag"
          :label="labelService"
          @click="() => console.log('bay')"
      ></UiBaseButton>
    </template>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const urlAmazonCountry = 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/';
const props = defineProps({
  account: {
    type: Object,
    required: true,
  },
});

const labelService =  `$${props.account.prices.def}`;
const imgService = `${urlAmazonCountry}${props.account.country}.svg`;
</script>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.services-el {

  @apply bg-sky-50 rounded-lg p-5  grid gap-x-2 gap-y-4 justify-between grid-cols-[141px_100px] sm:gap-4 sm:grid-cols-[1fr_auto_auto_auto] items-center;

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
    @apply truncate  mr-2  md:mr-0 text-base dark:text-stone-500;
  }

  &__quantity {
    @apply block text-xs ml-[auto] shrink-0 text-stone-500;
  }

  &__btn {
    @apply ml-[auto]  min-w-[78px] md:ml-0 text-base md:min-w-[94px] h-full;
  }
}
</style>