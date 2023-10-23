<template>
  <UModal v-model="storeModal.getIsOpenModalRegistrationSuccessfully"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalRegistrationSuccessfully"/>

      <div class="modelReg__title">
        <h3>Регистрация</h3>
        <p>На почту {{ userData.email }} было отправлено письмо. Пожалуйста перейдите по ссылке из письма.</p>
      </div>

      <div class="modelReg__grid-btn">
        <UiBaseButton size="xxl" label="Отправить повторно" @click="fetchRegistrationAgain"></UiBaseButton>
        <UiBaseButton size="xxl" label="Сменить email" variant="soft"></UiBaseButton>
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
import {index} from '~/components/api/fetchRegistation'
const fetchRegistrationAgain = async () => {
  console.log("запрос пошел")

  const params = {
    email: userData.value.email,
    password: userData.value.password,
    password_confirmation: userData.value.confirmPassword
  }
  const {user, pending, status, refresh, error} = await index(params)
};
</script>

<style scoped lang="scss">
.modelReg__grid-btn{
  @apply grid gap-4 sm:grid-cols-2;
}
</style>