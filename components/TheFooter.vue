<template lang="pug">
footer.footer

  .footer__top
    .footer__container.top
      NuxtLink(:to="localePath('/')" class="footer-logo")
        IconTheLogoLight

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
        .footer__info © 2023. PVABOOM

        ul.footer__socialMedia.footer-doc
          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.publicOffer') }}

          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.personalInformation') }}

          NuxtLink(:to="localePath('/')" class="footer-doc__link") {{ $t('nav.returnsPolicy') }}

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
@import "~/assets/css/mixins.scss";

.footer {
  background: var(--gradien, linear-gradient(82deg, #000C36 0%, #001769 100%));
  color: white;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.top{
      @include adaptiveValue(padding-top, 68, 20);
      @include adaptiveValue(padding-bottom, 64, 20);
    }

    &.bottom{
      @include adaptiveValue(padding-top, 24, 20);
      @include adaptiveValue(padding-bottom, 24, 20);
    }
  }

  &__bottom {
    border-top: 1px solid #324072;
  }

  &-nav{
    display: flex;
    gap: rem(28);

    &__link{
      padding: rem(8) rem(10);
      font-size: rem(16);

      @media (any-hover: hover) {
        &:hover {
          color: #1B4DFF;
        }
      }
    }
  }

  &-doc{
    display: flex;
    gap: rem(12);

    &__link{
      padding: rem(8) rem(10);
      font-size: rem(12);

      @media (any-hover: hover) {
        &:hover {
          color: #1B4DFF;
        }
      }
    }
  }

  &-socialMedia{
    display: flex;
    align-items: center;
    gap: rem(8);
  }

  &__info{
    font-size: rem(12);
    color:#8E9AC7;

  }

  &__paymentSystems{
    display: flex;
    gap: rem(12);
  }
}

</style>