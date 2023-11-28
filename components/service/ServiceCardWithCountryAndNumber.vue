<template>

  <button class="services-el" :class="{'bg': showBackground}">

    <div v-if="showLogoService" class="services-el__logo-service">
      <img :src="serviceLogo" alt=""/>
    </div>

    <div v-if="props.showCountry" class="services-el__country-icon">
      <img :src="serviceCountry" alt=""/>
    </div>

    <div v-if="props.account.servName" class="aside-card__title">
      {{ props.account.servName }}
    </div>
    <div v-if="props.account.phone" class="aside-card__title">
      {{ phone }}
    </div>

    <div v-if="props.showQuantity" class="services-el__quantity">
      {{ props.account.count }}
    </div>

  </button>

</template>

<script setup>
const props = defineProps({
  account: {
    type: Object,
    required: true,
    default: {}
  },
  showCountry: {
    type: Boolean,
    default: false
  },
  showQuantity: {
    type: Boolean,
    default: false
  },
  showLogoService: {
    type: Boolean,
    default: false
  },
  showBackground:{
    type: Boolean,
    default: true,
  }
})
const urlAmazonCountry = 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/';
const urlAmazonService = 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/';
import {phoneFormatV2} from "~/utils/phoneFormarV2";

const serviceCountry = computed(() => {
 return `${urlAmazonCountry}${props.account.country}.svg`
});
const serviceLogo = computed(() => {
  return `${urlAmazonService}${props.account.service}0.webp`
});

const phone = computed(() => {
 return  phoneFormatV2(props.account.countryCode, props.account.phone)
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixins.scss';

.services-el {
  @apply cursor-pointer rounded-lg px-5 py-4 flex flex items-center gap-2;

  &.bg{
    @apply bg-sky-50;
  }
  &.cardTop{
    @apply px-3 py-2;
  }

  &.active{
    @apply lg:bg-sky-600 lg:text-white;
  }

  &__logo-service {
    @apply bg-sky-50 rounded-full overflow-hidden w-6 h-6 shrink-0;

    img {
      @apply max-w-full;
    }
  }
  &__country-icon {
    @apply bg-sky-50 rounded overflow-hidden w-5 h-4 ;

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

