//Documentation for UDropdown https://ui.nuxt.com/elements/dropdown
<template lang="pug">
.header-profile
  UDropdown(:items="items" :popper="{ placement: 'bottom-start' }")
    IconTheProfile

  .header-profile__middle
    span ID: 643248
    span.text-sky-500.font-semibold $8 016 128

  IconTheTopUpBalance.header-profile__topUpBalance

</template>

<script setup>
const localeRoute = useLocaleRoute()
const { t } = useI18n()
import {useUserStore} from "~/store/user.js";
const store = useUserStore()
const items = [
  [
    {
      label: t('nav.personalInformation'),
      click: () => {
        const route = localeRoute({ name: 'personalInformation' })
        if (route) {
          return navigateTo(route.fullPath)
        }
      }
    },
    {
      label: t('nav.activationHistory'),
      click: () => {
        const route = localeRoute({ name: 'activationHistory' })
        if (route) {
          return navigateTo(route.fullPath)
        }
      }
    },
    {
      label: t('nav.safety'),
      click: () => {
        const route = localeRoute({ name: 'safety' })
        if (route) {
          return navigateTo(route.fullPath)
        }
      }
    }
  ],
  [
    {
      label: t('nav.exit'),
      click: store.actionIsLoggedIn
    }
  ]
]
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.header-profile{
  display: flex;
  gap: rem(8);

  &__middle{
    display: grid;
  }

  &__topUpBalance{
    margin-top: auto;
    cursor: pointer;
  }
}
</style>