<template>
<div>
  <div class="modelReg__title">
    <h3>Восстановление пароля</h3>
    <p>Письмо со ссылкой на сброс пароля было отправлено на почту {{ userData.email }}</p>
  </div>
  <div class="modelReg__grid-btn">
    <UiBaseButton size="xxl" label="Отправить повторно" @click="sendEmailAgain"></UiBaseButton>
    <UiBaseButton size="xxl" label="Сменить email" variant="soft" @click="changeEmail"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
const {AuthModalState} = useAuthModalState();
const emit = defineEmits();
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
  emit('getModalNeedState', AuthModalState.RestorePassword);
}
</script>

<style scoped lang="scss">

</style>