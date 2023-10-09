<template lang="pug">
section.getNumber
  .getNumber__container
    h2(v-html="$t('main.getNumber.titleH2')")
    .getNumber__grid.getNumber-grid
      .getNumber-grid__service.getNumber-grid-service
        UiSearchService.search(size="xxl")

        .getNumber-grid-service__wrapper.scrollCust
          .services
            UiServiceCard(v-for="account in accounts" :key="account.id" :account="account")

      .getNumber-grid__description
        h4 {{ $t('main.getNumber.titleH3') }}
        .text(v-html="$t('main.getNumber.description')")
        UiBtnBlue.btn(size="xxl" :label="$t('main.getNumber.btn')")
</template>

<script setup>

const { data: accounts } = await useFetch('/api/accounts',{
  transform: (_accounts) => _accounts.data
})

</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.getNumber{
  @include adaptiveValue(padding-top, 160, 96);
  @include adaptiveValue(padding-bottom, 160, 96);
  h2{
    @apply text-center;
  }

  &-grid{
    @include adaptiveValue(padding-top, 64, 32);
    @apply grid lg:grid-cols-2 gap-16 2xl:gap-32;

    &-service{
      @apply bg-white rounded-2xl;

      .search{
        @apply my-3 mx-4 md:my-6 md:mx-8;
      }

      &__wrapper{
        @apply pt-3 pb-6 pl-4 pr-2 mr-2 overflow-y-auto max-h-[340px] border-t border-sky-200 md:pl-8 md:pt-6 md:pb-6 md:pr-4 md:mr-4 md:max-h-[616px];

        .services{
          @apply grid gap-2 ;
        }
      }
    }

    &__description{
      @apply grid content-center;

      .text{
        @apply pb-8 pt-6 grid gap-4;
      }

      .btn{
        @apply min-w-[240px] w-fit;
      }
    }
  }
}
</style>