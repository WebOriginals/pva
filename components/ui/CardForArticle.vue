<template>
  <div class="newCard">
    <div class="newCard__img"><img :src="props.article.img" /></div>
    <div class="newCard__wrapper">
      <div class="newCard__teg">{{ props.article.teg }}</div>
      <h5 class="newCard__title">{{ props.article.title }}</h5>
      <div class="newCard__grid">
        <div class="newCard__date">{{ props.article.date }}</div>
        <div class="newCard__icon">
          <IconTheLink></IconTheLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.newCard {
  box-shadow: 0px 8px 24px 0px rgba(56, 100, 255, 0.04);
  cursor: pointer;

  &__img {
    @apply overflow-hidden rounded-t-2xl h-56;
  }

  &__wrapper {
    @apply px-6 pb-6 bg-white rounded-b-2xl;
  }

  &__teg {
    @apply bg-sky-500 rounded-lg text-white py-1 px-3 w-[fit-content] -translate-y-4;
  }

  &__title {
    @apply truncate dark:text-black;
  }

  &__grid {
    @apply flex justify-between items-center mt-4;
  }

  &__date {
    @apply text-stone-500;
  }
}
</style>
