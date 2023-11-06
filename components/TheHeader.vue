<template>
  <div class="relative">
    <header class="header" :class="{ 'sticky-header': isSticky }">
      <div class="header__container">
        <IconTheBurgerMenu
            class="lg:hidden"
            :class="{ open: IsOpenMenu }"
            @click="openMenu"
        ></IconTheBurgerMenu>
        <NuxtLink class="header-logo" v-if="width > 640" :to="localePath('/')">
          <IconTheLogoLight v-if="isDark"></IconTheLogoLight>
          <IconTheLogoDark v-else></IconTheLogoDark>
        </NuxtLink>
        <NuxtLink v-else class="header-logo" :to="localePath('/')">
          <IconTheLogoLightMini v-if="isDark"></IconTheLogoLightMini>
          <IconTheLogoDarkMini v-else></IconTheLogoDarkMini>
        </NuxtLink>
        <nav class="header__nav header-nav">
          <NuxtLink
              class="header-nav__link"
              :to="localePath('/service')"
              v-if="storeUser.getIsLoggedIn"
          >
            {{ $t('nav.service') }}
          </NuxtLink>
          <NuxtLink class="header-nav__link" :to="localePath('/freeNumbers')">{{
              $t('nav.freeNumbers')
            }}
          </NuxtLink>
          <NuxtLink class="header-nav__link" :to="localePath('/news')">{{
              $t('nav.news')
            }}
          </NuxtLink>
          <NuxtLink class="header-nav__link" :to="localePath('/api')">{{
              $t('nav.api')
            }}
          </NuxtLink>
          <NuxtLink class="header-nav__link" :to="localePath('/about')">{{
              $t('nav.about')
            }}
          </NuxtLink>
          <NuxtLink class="header-nav__link" :to="localePath('/demo')">
            Demo
          </NuxtLink>
        </nav>
        <div class="header-elementsLeft">
          <UiTheLangSwitcher
              class="hidden sm:block langSelect"
          ></UiTheLangSwitcher>
          <!--вызов модалки-->
          <UiBaseButton
              size="lg"
              :label="$t('logout')"
              variant="soft"
              @click="storeModal.actionIsOpenModal"
              v-if="!storeUser.getIsLoggedIn"
          ></UiBaseButton>
          <Teleport to="body">
            <ModalAuthModalStateBaseModalLogin :modal-default-state="0"></ModalAuthModalStateBaseModalLogin>
          </Teleport>
          <!--вызов модалки-->
          <TheHeaderDropdownForProfile v-if="storeUser.getIsLoggedIn"></TheHeaderDropdownForProfile>
          <UiColorModeButton></UiColorModeButton>
        </div>
        <div
            class="header__mobile header-mobile lg:hidden"
            v-if="IsOpenMenu"
            :class="{ IsOpenMenu: open }"
        >
          <nav class="header-mobile__nav header-mobile-nav">
            <NuxtLink
                class="header-mobile-nav__link"
                :to="localePath('/service')"
                v-if="store.getIsLoggedIn"
            >
              {{ $t('nav.service') }}
            </NuxtLink>
            <NuxtLink
                class="header-mobile-nav__link"
                :to="localePath('/freeNumbers')"
            >{{ $t('nav.freeNumbers') }}
            </NuxtLink
            >
            <NuxtLink
                class="header-mobile-nav__link"
                :to="localePath('/news')"
            >{{ $t('nav.news') }}
            </NuxtLink
            >
            <NuxtLink
                class="header-mobile-nav__link"
                :to="localePath('/api')"
            >{{ $t('nav.api') }}
            </NuxtLink
            >
            <NuxtLink
                class="header-mobile-nav__link"
                :to="localePath('/about')"
            >{{ $t('nav.about') }}
            </NuxtLink
            >
            <NuxtLink class="header-mobile-nav__link" :to="localePath('/demo')">
              Demo
            </NuxtLink
            >
          </nav>
          <div class="header-mobile__wrapper">
            <UiTheLangSwitcher class="w-32 langSelect"></UiTheLangSwitcher>
          </div>
        </div>
      </div>
    </header>
    <div id="placeForalert"></div>
  </div>
</template>

<script setup>
import {useUserStore} from '~/store/user.js';

const storeUser = useUserStore();
import {useModalStore} from "~/store/modal";

const storeModal = useModalStore()


const emit = defineEmits();
const {t} = useI18n();
const localePath = useLocalePath();
const {isDark} = useAllUtils();


const IsOpenMenu = ref(false);
const width = ref(null);
const openMenu = () => {
  IsOpenMenu.value = !IsOpenMenu.value;
  emit('lockScroll', IsOpenMenu);
};
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
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


const isModalAuthorization = ref(false)
const toggleModalAuthorization = () => {
  return (isModalAuthorization.value = !isModalAuthorization.value);
}
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
    @apply hidden lg:flex gap-3;

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

  &-mobile {
    height: calc(100vh - 96px);
    @apply w-full sm:w-72 bg-white absolute border-t-2 border-sky-50 left-0 top-24 z-10 dark:bg-sky-950 dark:border-sky-400;

    &-nav {
      @apply py-6 grid;

      &__link {
        @apply py-4 px-6;

        @media (any-hover: hover) {
          &:hover {
            @apply text-sky-600 dark:text-sky-400;
          }
        }
      }
    }

    &__wrapper {
      @apply py-8 px-3 border-t-2 border-sky-50 sm:hidden dark:border-sky-400;
    }
  }
}
</style>
