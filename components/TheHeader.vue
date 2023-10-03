<template lang="pug">
header.header
  .header__container
    IconTheBurgerMenu(class="lg:hidden" :class="{ open : IsOpenMenu }" @click="openMenu")

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

    .header__mobile.header-mobile(v-if="IsOpenMenu" :class="{ IsOpenMenu: open }" class="lg:hidden")
      nav.header-mobile__nav.header-mobile-nav
        NuxtLink(:to="localePath('/service')" class="header-mobile-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
        NuxtLink(:to="localePath('/freeNumbers')" class="header-mobile-nav__link") {{ $t('nav.freeNumbers') }}
        NuxtLink(:to="localePath('/news')" class="header-mobile-nav__link") {{ $t('nav.news') }}
        NuxtLink(:to="localePath('/api')" class="header-mobile-nav__link") {{ $t('nav.api') }}
        NuxtLink(:to="localePath('/about')" class="header-mobile-nav__link") {{ $t('nav.about') }}
        NuxtLink(:to="localePath('/demo')" class="header-mobile-nav__link")  Demo
      .header-mobile__wrapper
        UiTheLangSwitcher

</template>

<script setup>
import {useUserStore} from "~/store/user.js";
const emit = defineEmits(["setName"])
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

const IsOpenMenu = ref(false)

const openMenu = () => {
  IsOpenMenu.value = !IsOpenMenu.value
  emit("lockScroll", IsOpenMenu)
}
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

  &-mobile{
    height: calc(100vh - 114px);
    @apply w-full sm:w-72 bg-white absolute border-t-2 border-sky-50 left-0 top-28;

    &-nav{
      @apply py-6 grid;

      &__link{
        @apply py-4 px-6;
      }
    }

    &__wrapper{
      @apply py-8 px-3 border-t-2 border-sky-50 sm:hidden;
    }
  }
}
</style>