<template>
  <div class="comparison-card">
    <div class="comparison-card__title-wrapper">
      <h4 class="comparison-card__title">{{ props.item.title }}</h4>
      <p class="comparison-card__subtitle">{{ props.item.subtitle }}</p>
    </div>
    <ul class="comparison-card__list">
      <li
        class="comparison-card__item"
        v-for="listItem in props.item.list"
        :key="listItem.id"
      >
        <IconDefault v-if="listItem.icon" name="done" />
        <IconDefault v-else name="false" />
        {{ listItem.label }}
      </li>
    </ul>
    <UiBtnBlue
      v-if="props.buttonType == 'default'"
      @click="$emit('clickBtn')"
      size="xxl"
      :label="props.buttonName"
    />
    <UiBtnBlue
      v-else
      @click="$emit('clickBtn')"
      size="xxl"
      :label="props.buttonName"
      :variant="props.buttonType"
    />
  </div>
</template>

<script setup>
import IconDefault from "~/components/icon/IconDefault.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  buttonName: {
    type: String,
    default: "Отправить",
  },
  buttonType: {
    type: String,
    default: "default"
  }
});
onMounted(() => {
  console.log(props.item);
});
</script>

<style lang="scss" scoped>
.comparison-card {
  padding: 48px;
  border-radius: 16px;
  background: #fff;
  &__title {
    &-wrapper {
        margin-bottom: 32px;
    }
  }
  &__subtitle {
    margin-top: 8px;
  }
  &__list {
    margin-bottom: 32px;
  }
  &__item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    &:not(:last-child) {
      @apply mb-4;
    }
  }
  & button {
    width: 100%;
  }
}
</style>