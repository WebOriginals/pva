<template>
  <div class="alert">
    <div class="alert__wrapper">
      <div class="alert__info">
        <div class="alert__title-wrapper">
          <div class="alert__logo">
            <img :src="imgService" :alt="imgService">
          </div>
          <div class="alert__title">{{props.sms.phoneFrom}}</div>
        </div>
        <div class="alert__time-ago">{{timePassedFromNow}}</div>
      </div>
      <div class="alert__message mb-4"> {{props.sms.text}}</div>
      <UiBaseButton size="lg" icon="icon-pva__copy" label="СМС код: 320640"></UiBaseButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sms: {
    type: Object,
    required: true,
    default: {}
  },
  showBtnCode: {
    type: Boolean,
    default: false
  }
})

const urlAmazonService = 'https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/';

const imgService = computed(() => {
  return `${urlAmazonService}${props.sms.service}0.webp`
});
const timePassedFromNow = computed(() => {
  const startDate = new Date(props.sms.date);
  const now = new Date();

  const difference = now - startDate;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

 const t = (hours === 0) ? '' : `${hours % 24} часов,`
  return `${t} ${minutes % 60} минут`;
})
</script>

<style lang="scss" scoped>
.alert {
  @apply p-6 rounded-lg bg-sky-50;
  &:not(:last-child) {
    @apply mb-2;
  }
  &__info {
    @apply flex justify-between
  }
  &__title {
    &-wrapper {
      @apply flex items-center gap-2 mb-2;
    }
  }
  &__logo {
    @apply w-6;
    & img {
      @apply rounded-full;
    }
  }
  &__time-ago {
    @apply text-xs text-stone-500;
  }
  &__message {
    @apply text-sm text-stone-500;
  }
}
</style>