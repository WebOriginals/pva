<template lang="pug">
header.header
  .header__container

    NuxtLink(:to="localePath('/')" class="header-logo")
      IconTheLogoLight(v-if="isDark")
      IconTheLogoDark(v-else)

    nav.header__nav.header-nav
      NuxtLink(:to="localePath('/service')" class="header-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
      NuxtLink(:to="localePath('/freeNumbers')" class="header-nav__link") {{ $t('nav.freeNumbers') }}
      NuxtLink(:to="localePath('/news')" class="header-nav__link") {{ $t('nav.news') }}
      NuxtLink(:to="localePath('/api')" class="header-nav__link") {{ $t('nav.api') }}
      NuxtLink(:to="localePath('/about')" class="header-nav__link") {{ $t('nav.about') }}

    .header-elementsLeft
      UiTheLangSwitcher

      UiBtnBlue(size="lg" :label="$t('logout')" variant="soft" @click="store.actionIsLoggedIn"  v-if="!store.getIsLoggedIn")

      TheHeaderProfile(v-if="store.getIsLoggedIn" )
</template>

<script setup>
import { useUserStore } from "~/store/user.js";

const localePath = useLocalePath()
const {isDark} = useDarkMode()
const store = useUserStore()


</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.header{
  padding-top: rem(36);
  padding-bottom: rem(36);

  &__container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-logo{
    margin-right: rem(48);
  }
  &-nav{
    display: flex;
    gap: rem(12);

    &__link{
      padding: rem(8) rem(10);

      @media (any-hover: hover) {
        &:hover {
          @apply text-sky-600
        }
      }

      &.router-link-active{
        @apply text-sky-600
      }
    }
  }
  &-elementsLeft{
    display: flex;
    gap: rem(16);
    margin-left: auto;
    align-items: center;
  }
}
</style>