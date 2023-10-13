<template lang="pug">
section.news
  .news__container
    h1(v-html="$t('nav.news')")

    UiLoadingAnimation(v-if="pending")
    UAlert(v-else-if="error" icon="i-heroicons-command-line" color="red" variant="solid" :title="error"  description="Сорян, что-то наш сервак поломался")
    .news__grid(v-else)
      template(v-for="article in articles" :key="article.id")
        NuxtLink(:to="localePath('/news/'+article.id)" class="")
          UiNewCArd(:article="article")

    button(@click="refresh") Refresh data
</template>

<script setup>
const localePath = useLocalePath()
const {status, error,  refresh, pending,  data: articles } = await useLazyFetch('/api/news/news', {
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