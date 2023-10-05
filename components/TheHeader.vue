<template lang="pug">
header.header(:class="{ 'sticky-header': isSticky }")
  .header__container
    IconTheBurgerMenu(class="lg:hidden" :class="{ open : IsOpenMenu }" @click="openMenu")

    NuxtLink(v-if="width > 640" :to="localePath('/')" class="header-logo")
      IconTheLogoLight(v-if="isDark")
      IconTheLogoDark(v-else)
    NuxtLink(v-else :to="localePath('/')" class="header-logo rr")
      IconTheLogoLightMini(v-if="isDark")
      IconTheLogoDarkMini(v-else)

    nav.header__nav.header-nav
      NuxtLink(:to="localePath('/service')" class="header-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
      NuxtLink(:to="localePath('/freeNumbers')" class="header-nav__link") {{ $t('nav.freeNumbers') }}
      NuxtLink(:to="localePath('/news')" class="header-nav__link") {{ $t('nav.news') }}
      NuxtLink(:to="localePath('/api')" class="header-nav__link") {{ $t('nav.api') }}
      NuxtLink(:to="localePath('/about')" class="header-nav__link") {{ $t('nav.about') }}
      NuxtLink(:to="localePath('/demo')" class="header-nav__link")  Demo

    .header-elementsLeft
      UiTheLangSwitcher(class="hidden sm:block langSelect")
      UiBtnBlue(size="lg" :label="$t('logout')" variant="soft" @click="store.actionIsLoggedIn"  v-if="!store.getIsLoggedIn")
      UiTheHeaderProfile(v-if="store.getIsLoggedIn")
      UiColorModeButton

    .header__mobile.header-mobile(v-if="IsOpenMenu" :class="{ IsOpenMenu: open }" class="lg:hidden")
      nav.header-mobile__nav.header-mobile-nav
        NuxtLink(:to="localePath('/service')" class="header-mobile-nav__link" v-if="store.getIsLoggedIn" ) {{ $t('nav.service') }}
        NuxtLink(:to="localePath('/freeNumbers')" class="header-mobile-nav__link") {{ $t('nav.freeNumbers') }}
        NuxtLink(:to="localePath('/news')" class="header-mobile-nav__link") {{ $t('nav.news') }}
        NuxtLink(:to="localePath('/api')" class="header-mobile-nav__link") {{ $t('nav.api') }}
        NuxtLink(:to="localePath('/about')" class="header-mobile-nav__link") {{ $t('nav.about') }}
        NuxtLink(:to="localePath('/demo')" class="header-mobile-nav__link")  Demo
      .header-mobile__wrapper
        UiTheLangSwitcher.w-32(class="langSelect")

</template>

<script setup>
import {useUserStore} from "~/store/user.js";

const emit = defineEmits()
const { t } = useI18n()
const localePath = useLocalePath()
const {isDark} = useDarkMode()
const store = useUserStore()


const IsOpenMenu = ref(false)
const width = ref(null);
const openMenu = () => {
  IsOpenMenu.value = !IsOpenMenu.value
  emit("lockScroll", IsOpenMenu)
}
const onResize = () => {
  width.value = window.innerWidth;
};
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});


const isSticky = ref(false);
const handleScroll = () => {
  if (window.scrollY > 0) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">

.header {
  @apply py-6 bg-white dark:bg-gradient-to-r dark:from-sky-950 dark:to-sky-900;

  &.sticky-header {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    @apply fixed top-0 left-0 w-full bg-white dark:bg-gradient-to-r dark:from-sky-950 dark:to-sky-900 z-10 py-3;
}

  &__container {
    @apply flex items-center justify-center h-12;
  }

  &-logo {
    @apply mr-12 -mt-1.5;
  }

  &-nav {
    @apply hidden lg:flex gap-3 ;

    &__link {

      @media (any-hover: hover) {
        &:hover {
          @apply text-sky-600 dark:text-sky-400;
        }
      }

      &.router-link-active {
        @apply text-sky-600 dark:text-sky-400;
      }
    }
  }

  &-elementsLeft {
    @apply flex gap-4 ml-auto items-center;
  }

  &-mobile{
    height: calc(100vh - 96px);
    @apply w-full sm:w-72 bg-white absolute border-t-2 border-sky-50 left-0 top-24 z-10 dark:bg-sky-950 dark:border-sky-400;

    &-nav{
      @apply py-6 grid;

      &__link{
        @apply py-4 px-6;

        @media (any-hover: hover) {
          &:hover {
            @apply text-sky-600 dark:text-sky-400;
          }
        }
      }
    }

    &__wrapper{
      @apply py-8 px-3 border-t-2 border-sky-50 sm:hidden dark:border-sky-400;
    }
  }
}
</style>