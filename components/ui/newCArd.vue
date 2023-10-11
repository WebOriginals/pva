<template lang="pug">
.newCard
  .newCard__img
    img(:src="props.article.img")
  .newCard__wrapper
    .newCard__teg {{props.article.teg}}
    h5.newCard__title {{props.article.title}}
    .newCard__grid
      .newCard__date {{props.article.date}}
      .newCard__icon
        IconTheLink

</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required:true,
  },
})
</script>

<style scoped lang="scss">
.newCard{
  box-shadow: 0px 8px 24px 0px rgba(56, 100, 255, 0.04);
  cursor: pointer;

  &__img{
    @apply overflow-hidden rounded-t-2xl h-56;
  }

  &__wrapper{
    @apply px-6 pb-6 bg-white rounded-b-2xl;
  }

  &__teg{
    @apply bg-sky-500 rounded-lg text-white py-1 px-3 w-[fit-content] -translate-y-4;
  }

  &__title{
    @apply truncate;
  }

  &__grid{
    @apply flex justify-between items-center mt-4;
  }

  &__date{
    @apply text-stone-500;
  }
}
</style>