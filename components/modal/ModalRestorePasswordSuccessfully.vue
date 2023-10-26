<template>
  <UModal v-model="storeModal.getIsOpenModalRestorePasswordSuccessfully"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalRestorePasswordSuccessfully"/>

      <div class="modelReg__title">
        <h3>Восстановление пароля</h3>
        <p>Письмо со ссылкой на сброс пароля было отправлено на почту {{ userData.email }}</p>
      </div>

      <div class="modelReg__grid-btn">
        <UiBaseButton size="xxl" label="Отправить повторно" @click="sendEmailAgain"></UiBaseButton>
        <UiBaseButton size="xxl" label="Сменить email" variant="soft" @click="changeEmail"></UiBaseButton>
      </div>
    </div>
  </UModal>
</template>

<script setup>
import {storeToRefs} from "pinia";
import { useUserStore } from '~/store/user.js';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

import {index} from '~/components/api/fatchRestorePassword';
const sendEmailAgain = async () => {
  const params = {
    email: userData.value.email,
  }
  const {status, error} = await index(params)
};

const changeEmail = () => {
  storeModal.actionIsOpenModalRestorePasswordSuccessfully()
  storeModal.actionIsOpenModalRestorePassword()
}
</script>

<style scoped lang="scss">
.modelReg__grid-btn{
  @apply grid gap-4 sm:grid-cols-2;
}
</style>