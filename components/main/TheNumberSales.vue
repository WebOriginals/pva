<template lang="pug">
section.numberSales
  .numberSales__container
    .numberSales__grid.numberSales-grid
      .numberSales-grid__info.numberSales-grid-info
        h4(v-html="$t('main.numberSales.title')")
        .numberSales-grid-info__countdown
          UiTheShoppingCounter(v-for="num in generatedNumbers" :number="num")

        p(v-html="$t('main.numberSales.description')")

      .numberSales-grid__chart
        UiTheChartSales

</template>

<script setup>
const generatedNumbers = ref([1,3,4,8,9,0]);
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.numberSales{
  @include adaptiveValue(padding-top, 160, 64);
  @include adaptiveValue(padding-bottom, 160, 64);
  @include adaptiveValue(margin-bottom, 80, 64);
  @apply  bg-gradient-to-r from-sky-950 to-sky-900 lg:grid-cols-2;

  &-grid{
    @apply grid gap-16 lg:grid-cols-2 lg:gap-36;

    &-info{
      @apply text-white grid gap-8 content-center;

      &__countdown{
        @apply grid grid-cols-6 divide-x divide-sky-900 bg-sky-500 rounded-lg w-full lg:max-w-[386px] h-16;
      }

      p{
        @apply text-sky-400 ;
      }
    }

    &__chart{

    }
  }
}
</style>