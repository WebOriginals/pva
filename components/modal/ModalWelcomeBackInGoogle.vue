<template>
  <UModal v-model="storeModal.getIsOpenModalWelcomeBackInGoogle" ref="modalRef" class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalWelcomeBackInGoogle"/>

      <div class="modelReg__title">
        <h3>С возвращением!</h3>
        <p>{{userData.email}}</p>
        <p>Ранее вы вошли в систему с помощью Google</p>
      </div>

      <UButton label="Регистрация через Google" color="black" size="xl" block class="mb-6">
        <template #leading>
          <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
        </template>
      </UButton>

      <div class="text-center">
        <UButton color="primary" variant="link" label="Установить пароль " @click="setPassword"/>
      </div>
    </div>
  </UModal>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from '~/store/user.js';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

const setPassword = async () => {
  storeModal.actionIsOpenModalWelcomeBackInGoogle()
  storeModal.actionIsOpenModalCodeFromEmail()
};
</script>

<style scoped lang="scss">

</style>