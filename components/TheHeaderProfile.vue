<template lang="pug">
.header-profile
  UDropdown(:items="items" :popper="{ placement: 'bottom-start' }")
    IconTheProfile

  .header-profile__middle
    span ID: 643248
    span.color-blue $8 016 128

  IconTheTopUpBalance.header-profile__topUpBalance

</template>

<script setup>
import {useUserStore} from "~/store/user.js";
const store = useUserStore()
const items = [
  [
    {
      label: 'Персональные данные',
      click: () => {
        console.log('Персональные данные')
      }
    },
    {
      label: 'История активаций',
      click: () => {
        console.log('История активаций')
      }
    },
    {
      label: 'Безопасность',
      click: () => {
        console.log('Безопасность')
      }
    }
  ],
  [
    {
      label: 'Выход',
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