<template>
  <UModal v-model="storeModal.getIsOpenModalChangePasswordSuccessfully"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalChangePasswordSuccessfully"/>

      <div class="modelReg__title">
        <h3>Смена пароля</h3>
        <p>Пароль успешно изменён, теперь вы можете войти в свой аккаунт</p>
      </div>

      <div class="modelReg__btn">
        <UiBaseButton class="btn" size="xxl" label="Войти" @click="logIn"></UiBaseButton>
      </div>


    </div>
  </UModal>
</template>

<script setup>
import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

const logIn = () => {
      storeModal.actionIsOpenModalChangePasswordSuccessfully()
      storeModal.actionIsOpenModalRegistrationSuccessfully()
};
</script>

<style scoped lang="scss">
.modelReg__btn{
    & .btn{
      @apply w-full;
    }
}
</style>