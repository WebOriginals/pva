<template>
  <modal-base-modal >
    <template #buttonClose>
      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="closeModal"/>
    </template>
    <template #body>
      <modal-block-login v-if="modalState === AuthModalState.login" @getModalNeedState="getModalNeedState"></modal-block-login>
      <modal-block-google-tow-f-a v-else-if="modalState === AuthModalState.GoogleTowFA" @getModalNeedState="getModalNeedState"></modal-block-google-tow-f-a>
      <modal-block-change-password v-else-if="modalState === AuthModalState.changePassword" @getModalNeedState="getModalNeedState"></modal-block-change-password>
      <modal-block-change-password-successfully v-else-if="modalState === AuthModalState.ChangePasswordSuccessfully" @getModalNeedState="getModalNeedState"></modal-block-change-password-successfully>
      <modal-block-code-from-email v-else-if="modalState === AuthModalState.CodeFromEmail" @getModalNeedState="getModalNeedState"></modal-block-code-from-email>
      <modal-block-registration v-else-if="modalState === AuthModalState.Registration" @getModalNeedState="getModalNeedState"></modal-block-registration>
      <modal-block-registration-successfully v-else-if="modalState === AuthModalState.RegistrationSuccessfully" @getModalNeedState="getModalNeedState"></modal-block-registration-successfully>
      <modal-block-restore-password v-else-if="modalState === AuthModalState.RestorePassword" @getModalNeedState="getModalNeedState"></modal-block-restore-password>
      <modal-block-restore-password-successfully v-else-if="modalState === AuthModalState.RestorePasswordSuccessfully" @getModalNeedState="getModalNeedState"></modal-block-restore-password-successfully>
      <modal-block-welcome-back-in-google v-else-if="modalState === AuthModalState.WelcomeBackInGoogle" @getModalNeedState="getModalNeedState"></modal-block-welcome-back-in-google>
    </template>
  </modal-base-modal>
</template>

<script setup>
const { AuthModalState } = useAuthModalState();
import {useModalStore} from "~/store/modal";

const storeModal = useModalStore()
const props = defineProps({
  targetModal: {
    type: Boolean,
    required: true,
    default: false
  },
  modalDefaultState: {
    type: Number,
    default: 0
  }
});

const modalState = ref(props.modalDefaultState)
const getModalNeedState = (ev = AuthModalState.login) => {
  modalState.value = ev
}

const closeModal = () => {
  modalState.value = props.modalDefaultState
  storeModal.closeIsOpenModal()
}
</script>

<style scoped lang="scss">

</style>