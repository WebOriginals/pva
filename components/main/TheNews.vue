<template lang="pug">
section.newsSlider
  .newsSlider__container
    h2(v-html="$t('main.news.title')")
    swiper(
      class="newsSlider__sw"
      :slides-per-view='3',
      :space-between='50',
      :breakpoints='{ 320: {slidesPerView: 1.2,}, 640: {slidesPerView: 1.5,}, 760: {slidesPerView: 2.3,}, 940: {slidesPerView: 3,}}'
    )
      swiper-slide(v-for="article in articles" :key="article.id")
        NuxtLink(:to="localePath('/news/'+article.id)" class="")
          UiNewCArd(:article="article")

    .newsSlider__btn
      UiBtnBlue.btn(size="xxl" :label="$t('main.news.btn')" variant="outline" @click="redirectAllArticles")
</template>

<script setup>
const localePath = useLocalePath()
const localeRoute = useLocaleRoute()
const { pending,  data: articles } = await useLazyFetch('/api/mainNews/news',{
  transform: (_articles) => _articles.data
})

const redirectAllArticles = () => {
  const route = localeRoute({ name: 'news' })
  if (route) {
    return navigateTo(route.fullPath)
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";
.newsSlider{
  @include adaptiveValue(padding-top, 80, 32);
  @include adaptiveValue(padding-bottom, 80, 32);

  h2{
    @apply text-center;
  }

  &__sw{
    @include adaptiveValue(padding-top, 64, 32);
  }

  &__btn{
    @include adaptiveValue(padding-top, 48, 32);
    @apply flex justify-center;

    .btn{
      @apply  w-full md:w-[240px];
    }
  }
}
</style>