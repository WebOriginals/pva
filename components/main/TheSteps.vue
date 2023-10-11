<template lang="pug">
section.steps
  .steps__container
    h2(v-html="$t('main.steps.title')")
    .steps__grid.steps-grid
      .steps-grid__el.steps-grid-el(v-for="(elem, index) in $tm('main.steps.list')" :key="index")
        .steps-grid-el__head
          .steps-grid-el__img
            img(:src="'_nuxt/assets/img/step_'+index+'.png'" :alt="index")
          h4.steps-grid-el__title(v-html="$rt(elem.title)")

        .steps-grid-el__body
          p(v-html="$rt(elem.description)")

  .steps__bg
    .steps__phone
      img(src="~assets/img/iphone_trim.png")

</template>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";
.steps{
  @include adaptiveValue(padding-top, 80, 48);
  position: relative;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 96px;
  }

  h2{
    @apply text-center;
  }

  &-grid{
    @include adaptiveValue(margin-top, 64, 32);
    @apply grid border border-sky-200 rounded-2xl bg-white divide-y divide-sky-200 lg:grid-cols-3 lg:rounded-t-2xl lg:rounded-b-[0px] lg:divide-y-[0px] lg:divide-x ;

    &-el{
      @apply p-6 md:p-8 lg:h-[700px];

      &__head{
      @apply grid grid-cols-[64px,_1fr] gap-4 items-center mb-6;
      }

      &__title{
        @apply dark:text-black;
      }
    }
  }

  &__bg{
    @apply hidden lg:flex justify-center w-full absolute bottom-0 left-0;
  }

  &__phone{
    @include adaptiveValue(width, 722, 508, 1375, 1024);
    img{
      max-width: 100%;
    }
  }
}
</style>