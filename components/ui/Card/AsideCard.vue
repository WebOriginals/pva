<template>
  <div class="aside-card">
    <button class="aside-card__btn">
      <div class="aside-card__label">

        <div class="aside-card__service">
          <img :src="imgService" alt="" />
        </div>

        <div class="aside-card__country">
          <img :src="url" alt="" />
        </div>

        <div class="aside-card__title">
          {{ country }}
          {{ code }}
        </div>
      </div>

<!--      <div class="aside-card__count">{{ count }} шт</div>-->
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  account: {
    type: Object,
    required: true,
    default: {}
  }
})
import url from "~/assets/img/flag/ru.png";
const imgService = `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/hw0.webp`;
const country = "+7 (880) 80-80-80";
const code = "";
const count = 5;
</script>

<style lang="scss" scoped>
.aside-card {
    &:not(:last-child) {
        @apply mb-2;
    }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    background-color: #eef5ff;
    padding: 16px 20px;

  }
  &__label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__service{
    @apply h-6 w-6 rounded-full overflow-hidden;
  }
  &__country {
    width: 22px;
    margin-right: 8px;
    & img {
        width: 100%;
        object-fit: contain;
    }
  }
  &__title {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>

