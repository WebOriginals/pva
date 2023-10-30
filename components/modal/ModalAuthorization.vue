<template>
  <UModal v-model="storeModal.getIsOpenModalAuthorization" ref="modalRef" class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="closeModal"/>
      <modal-block-login v-if="storeModal.getIsOpenModalLogin"></modal-block-login>
      <modal-block-change-password v-else-if="storeModal.getIsOpenModalChangePassword"></modal-block-change-password>
      <modal-block-change-password-successfully v-else-if="storeModal.getIsOpenModalChangePasswordSuccessfully"></modal-block-change-password-successfully>
      <modal-block-code-from-email v-else-if="storeModal.getIsOpenModalCodeFromEmail"></modal-block-code-from-email>
      <modal-block-registration v-else-if="storeModal.getIsOpenModalRegistration"></modal-block-registration>
      <modal-block-registration-successfully v-else-if="storeModal.getIsOpenModalRegistrationSuccessfully"></modal-block-registration-successfully>
      <modal-block-restore-password v-else-if="storeModal.getIsOpenModalRestorePassword"></modal-block-restore-password>
      <modal-block-restore-password-successfully v-else-if="storeModal.getIsOpenModalRestorePasswordSuccessfully"></modal-block-restore-password-successfully>
      <modal-block-google-tow-f-a v-else-if="storeModal.getIsOpenModalTwoFA"></modal-block-google-tow-f-a>
      <modal-block-welcome-back-in-google v-else-if="storeModal.getIsOpenModalWelcomeBackInGoogle"></modal-block-welcome-back-in-google>
      <div  v-else></div>
    </div>
  </UModal>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useUserStore} from '~/store/user';

const storeUser = useUserStore();
const {userData} = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";

const storeModal = useModalStore();

const closeModal = () => {
  storeModal.actionIsOpenModalAuthorization()
  storeModal.closeIsOpenModalRegistration()
  storeModal.closeIsOpenModalRegistrationSuccessfully()
  storeModal.closeIsOpenModalChangePassword()
  storeModal.closeIsOpenModalChangePasswordSuccessfully()
  storeModal.closeIsOpenModalRestorePassword()
  storeModal.closeIsOpenModalRestorePasswordSuccessfully()
  storeModal.closeIsOpenModalTwoFA()
  storeModal.closeIsOpenModalWelcomeBackInGoogle()
  storeModal.closeIsOpenModalCodeFromEmail()

  storeModal.setIsOpenModalLogin()
}
</script>

<style lang="scss">
.modelReg {

  &__wrapper {
    @apply grid py-12 px-6  relative lg:px-16 lg:rounded-2xl;
  }

  &__close {
    @apply absolute top-4 right-4 lg:top-6 lg:right-6 ;
  }

  &__title {
    @apply grid justify-items-center text-center mb-8 gap-4;
  }

  &__alternative {
    @apply flex justify-center relative mb-7;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #CDE2FF;
      top: 50%;
      left: 0;
    }

    span {
      @apply bg-white text-sky-400 z-[2] px-2 dark:bg-gray-900 text-center;
    }
  }

  &__form {
    @apply grid gap-4;

    & .passwordRequirements {
      @apply mb-1 grid text-xs gap-2;
    }

    & .btn {
      @apply mt-4;
    }
  }

  &__grid-btn {
    @apply grid gap-4 sm:grid-cols-2 mt-4;
  }

  &__btn {
    & .btn {
      @apply w-full;
    }
  }
}
</style>