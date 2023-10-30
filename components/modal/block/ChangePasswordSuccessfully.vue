<template >
<div>
  <div class="modelReg__title">
    <h3>Смена пароля</h3>
    <p>Пароль успешно изменён, теперь вы можете войти в свой аккаунт</p>
  </div>
  <div class="modelReg__btn">
    <UiBaseButton class="btn" size="xxl" label="Войти" @click="logIn"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

const logIn = () => {
  storeModal.actionIsOpenModalChangePasswordSuccessfully()
  storeModal.actionIsOpenModalLogin()
};
</script>

<style scoped lang="scss">

</style>