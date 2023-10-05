<template lang="pug">
footer.footer

  .footer__top
    .footer__container.top
      .footer-top-mobile
        NuxtLink(:to="localePath('/')" class="footer-logo")
          IconTheLogoLight

        ul.footer-top-mobile__socialMedia.footer-top-mobile-socialMedia
          NuxtLink(:to="localePath('/')" class="footer-top-mobile-socialMedia__link")
            IconTheVK
          NuxtLink(:to="localePath('/')" class="footer-top-mobile-socialMedia__link")
            IconTheInstagram
          NuxtLink(:to="localePath('/')" class="footer-top-mobile-socialMedia__link")
            IconTheFB
          NuxtLink(:to="localePath('/')" class="footer-top-mobile-socialMedia__link")
            IconTheTW

      nav.footer__nav.footer-nav
        NuxtLink(:to="localePath('/service')" class="footer-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
        NuxtLink(:to="localePath('/freeNumbers')" class="footer-nav__link") {{ $t('nav.freeNumbers') }}
        NuxtLink(:to="localePath('/news')" class="footer-nav__link") {{ $t('nav.news') }}
        NuxtLink(:to="localePath('/api')" class="footer-nav__link") {{ $t('nav.api') }}
        NuxtLink(:to="localePath('/about')" class="footer-nav__link") {{ $t('nav.about') }}

      ul.footer__socialMedia.footer-socialMedia
        NuxtLink(:to="localePath('/')" class="footer-socialMedia__link")
          IconTheVK
        NuxtLink(:to="localePath('/')" class="footer-socialMedia__link")
          IconTheInstagram
        NuxtLink(:to="localePath('/')" class="footer-socialMedia__link")
          IconTheFB
        NuxtLink(:to="localePath('/')" class="footer-socialMedia__link")
          IconTheTW

  .footer__bottom
      .footer__container.bottom
        .footer__info © {{new Date().getFullYear()}}. PVABOOM

        ul.footer__socialMedia.footer-doc
          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.publicOffer') }}

          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.personalInformation') }}

          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.returnsPolicy') }}

        .footer-bottom-mobile
          .footer-bottom-mobile__info © {{new Date().getFullYear()}}. PVABOOM
          .footer__paymentSystems
            IconTheVisa
            IconTheMastercard
</template>

<script setup>
import {useUserStore} from "~/store/user.js";

const localePath = useLocalePath()
const store = useUserStore()

</script>

<style scoped lang="scss">
.footer {
  @apply text-white  bg-gradient-to-r from-sky-950 to-sky-900;

  &-logo{
    @apply flex justify-center;
  }

  &__container {

    &.top {
      @apply py-16 grid justify-center sm:flex items-center sm:justify-between;
    }

    &.bottom {
      @apply py-6  grid justify-items-center sm:flex items-center sm:justify-between;
    }
  }

  &-top-mobile {
    @apply grid gap-6;

    &-socialMedia {
      @apply flex gap-2 items-center justify-center lg:hidden;
    }
  }

  &-bottom-mobile {
    @apply flex justify-between gap-6 pt-6 w-full sm:w-auto sm:grid;


    &__paymentSystems {
      @apply flex gap-2 lg:hidden;
    }

    &__info{
      @apply flex lg:hidden text-sky-400 text-xs ;
    }
  }

  &__bottom {
    @apply border-t border-sky-700;
  }

  &-nav{
    @apply grid justify-items-center gap-3 flex-wrap pt-12 sm:flex  sm:gap-6 sm:pt-0;

    &__link{
      @apply block text-base py-2 px-2.5;

      @media (any-hover: hover) {
        &:hover {
          @apply text-sky-400;
        }
      }
    }
  }

  &-doc{
    @apply grid justify-items-center sm:flex gap-3;

    &__link{
      @apply text-xs  py-2 px-2.5;

      @media (any-hover: hover) {
        &:hover {
          @apply text-sky-400;
        }
      }
    }
  }

  &-socialMedia{
    @apply hidden lg:flex gap-2 items-center;
  }

  &__info{
    @apply hidden lg:flex text-sky-400 text-xs ;
  }

  &__paymentSystems{
    @apply flex gap-2 justify-center;
  }
}

</style>