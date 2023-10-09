<template lang="pug">
section.first
  .first__container
    .first__wrapper
      h1 {{ $t('main.first.title') }}
      p {{ $t('main.first.subTitle') }}
      UiBtnBlue.first__btn(size="xxl" :label="$t('main.first.btn')")

section.first-sub
  .first-sub__wrapper
  .first-sub__container
    .first-sub__img
      img(src="~/assets/img/iphone.png")
    ul.first-sub__list.first-sub-list
      li.first-sub-list__element
        h4 {{ $t('main.firstSub.firstSubList.elementOne.title') }}
        p {{ $t('main.firstSub.firstSubList.elementThree.description') }}
      li.first-sub-list__element
        h4 {{ $t('main.firstSub.firstSubList.elementTwo.title') }}
        p {{ $t('main.firstSub.firstSubList.elementThree.description') }}
      li.first-sub-list__element
        h4 {{ $t('main.firstSub.firstSubList.elementThree.title') }}
        p {{ $t('main.firstSub.firstSubList.elementThree.description') }}

    ul.first-sub__listTwo.first-sub-listTwo
      li.first-sub-listTwo__element
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}
      li.first-sub-listTwo__element
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}
      li.first-sub-listTwo__element
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}

section.first-mobile-slider
  .first-mobile-slider__container
    Swiper(
      class="first-mobile-slider__swiper"
      :height="300"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      :slides-per-view="1")

      SwiperSlide
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}
      SwiperSlide
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}
      SwiperSlide
        p {{ $t('main.firstSub.firstSubListTwo.elementThree.description') }}

</template>

<script setup>
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
</script>

<style  lang="scss">
@import "~/assets/css/mixins.scss";

.first {
  @include adaptiveValue(padding-top, 130, 90);
  @apply bg-gradient-to-r from-sky-950 to-sky-900 text-white pb-56;

  &__wrapper {
    max-width: rem(650);
  }

  h1 {
    @include adaptiveValue(font-size, 64, 40);
    line-height: rem(64);
    @apply font-semibold mb-4 ;
  }

  p {
    @apply text-sky-400 mb-8;
  }

}

.first-sub {
  @apply relative -mt-24;

  &__wrapper {
    border-radius: rem(32);
    margin-left: max(24px, calc((100% - 1170px) / 2));
    @apply bg-white z-0 absolute h-full w-full;
  }

  &__container {
    @apply relative;
  }

  &__img {
    z-index: 6;
    @include adaptiveValue(bottom, 210, 430);
    @include adaptiveValue(width, 410, 200);
    @apply absolute hidden lg:block  right-0;

    & img {
      @apply max-w-full;
    }
  }

  &-list {
    @include adaptiveValue(padding-top, 48, 30);
    @include adaptiveValue(padding-bottom, 48, 30);
    @include adaptiveValue(padding-left, 64, 70);
    @apply w-full lg:w-2/3 relative grid sm:flex gap-4 z-0;

    &__element {
      @apply grid gap-2.5 justify-items-center;

      h4 {
        @include adaptiveValue(font-size, 48, 40);
        @apply font-semibold dark:text-black;
      }

      p {
        @apply text-center text-stone-500 text-sm;
      }
    }
  }

  &-listTwo {
    @include adaptiveValue(padding-left, 64, 30);
    @include adaptiveValue(padding-bottom, 64, 30);
    @apply relative hidden md:grid z-0 border-t border-sky-200 grid grid-cols-3 pt-12 ;

    &__element {
      @apply px-8 text-stone-500;

      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }

    }
  }

}

.first-mobile-slider {
  @apply py-12 md:hidden;

  &__swiper {

    .swiper-slide {
      @apply px-6 text-center text-stone-500;
    }

    .swiper-pagination {
      @apply relative pt-6;

      .swiper-pagination-bullet{
        @apply dark:bg-sky-400;
      }
      .swiper-pagination-bullet-active{
        @apply dark:bg-sky-500;
      }
    }
  }
}

</style>