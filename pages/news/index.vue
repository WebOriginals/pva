<template lang="pug">
section.news
  .news__container
    h1(v-html="$t('nav.news')")
    p(v-if="pending") идет загрузка
    .news__grid(v-else)
      template(v-for="article in articles" :key="article.id")
        NuxtLink(:to="localePath('/news/'+article.id)" class="")
          UiNewCArd(:article="article")
</template>

<script setup>
const localeRoute = useLocaleRoute()
const { pending,  data: articles } = await useLazyFetch('/api/news/news',{
  transform: (_articles) => _articles.data
})
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.news{
  @include adaptiveValue(padding-top, 64, 32);
  @include adaptiveValue(padding-bottom, 60, 32);

  &__grid{
    @apply grid gap-4 mt-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-8;
  }
}
</style>