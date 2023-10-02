<template lang="pug">
header.header
  .header__container
    UiBtnBlue(size="lg" label="burger" variant="soft" @click="" )
    NuxtLink(:to="localePath('/')" class="header-logo")
      IconTheLogoLight(v-if="isDark")
      IconTheLogoDark(v-else)

    nav.header__nav.header-nav
      NuxtLink(:to="localePath('/service')" class="header-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
      NuxtLink(:to="localePath('/freeNumbers')" class="header-nav__link") {{ $t('nav.freeNumbers') }}
      NuxtLink(:to="localePath('/news')" class="header-nav__link") {{ $t('nav.news') }}
      NuxtLink(:to="localePath('/api')" class="header-nav__link") {{ $t('nav.api') }}
      NuxtLink(:to="localePath('/about')" class="header-nav__link") {{ $t('nav.about') }}
      NuxtLink(:to="localePath('/demo')" class="header-nav__link")  Demo

    .header-elementsLeft
      UiTheLangSwitcher(class="hidden sm:block")
      UiBtnBlue(size="lg" :label="$t('logout')" variant="soft" @click="store.actionIsLoggedIn"  v-if="!store.getIsLoggedIn")
      TheHeaderProfile(v-if="store.getIsLoggedIn")
</template>

<script setup>
import {useUserStore} from "~/store/user.js";
const { t } = useI18n()
const localePath = useLocalePath()
const {isDark} = useDarkMode()
const store = useUserStore()

const navLink = [
  {path: '/service', name: t('nav.service')},
  {path: '/freeNumbers', name: t('nav.freeNumbers')},
  {path: '/news', name: t('nav.news')},
  {path: '/api', name: t('nav.api')},
  {path: '/about', name: t('nav.about')},
  {path: '/demo', name: 'Demo'},
]
</script>

<style scoped lang="scss">

.header {
  @apply py-9 bg-white dark:bg-stone-400;

  &__container {
    @apply flex items-end justify-center;
  }

  &-logo {
    @apply mr-12;
  }

  &-nav {
    @apply hidden lg:flex gap-3 ;

    &__link {

      @media (any-hover: hover) {
        &:hover {
          @apply text-sky-600;
        }
      }

      &.router-link-active {
        @apply text-sky-600;
      }
    }
  }

  &-elementsLeft {
    @apply flex gap-4 ml-auto items-center;
  }
}
</style>