<template>
  <div class="aside-card">
    <button class="aside-card__btn">
      <div class="aside-card__label">
        <div class="aside-card__country">
          <img :src="url" alt="" />
        </div>
        <div class="aside-card__title">
          {{ country }}
          {{ code }}
        </div>
      </div>

      <div class="aside-card__count">{{ count }} шт</div>
    </button>
  </div>
</template>

<script setup>
import url from "~/assets/img/flag/ru.png";
const country = "Россия";
const code = "(+7)";
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

