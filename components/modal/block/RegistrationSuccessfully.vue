<template>
<div>
  <div class="modelReg__title">
    <h3>Регистрация</h3>
    <p>На почту {{ userData.email }} было отправлено письмо. Пожалуйста перейдите по ссылке из письма.</p>
  </div>

  <div class="modelReg__grid-btn">
    <UiBaseButton size="xxl" label="Отправить повторно" @click="fetchRegistrationAgain"></UiBaseButton>
    <UiBaseButton size="xxl" label="Сменить email" variant="soft" @click="openModalRegistration"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
const {AuthModalState} = useAllUtils();
const emit = defineEmits();
import { storeToRefs } from "pinia";
import { useUserStore } from '~/store/user';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

import {index} from '~/components/api/fetchRegistation'
const fetchRegistrationAgain = async () => {
  const params = {
    email: userData.value.email,
    password: userData.value.password,
    password_confirmation: userData.value.confirmPassword
  }
  const {user, pending, status, refresh, error} = await index(params)
};

const openModalRegistration = () => {
  emit('getModalNeedState', AuthModalState.Registration);
}
</script>

<style scoped lang="scss">

</style>