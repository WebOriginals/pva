<template>
  <ModalBaseModal>
    <template #buttonClose>
      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="closeModal"/>
    </template>
    <template #body>
      <ModalAuthModalStateLogin
          v-if="modalState === AuthModalState.login"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateLogin>
      <ModalAuthModalStateGoogleTowFA
          v-else-if="modalState === AuthModalState.GoogleTowFA"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateGoogleTowFA>
      <ModalAuthModalStateChangePassword
          v-else-if="modalState === AuthModalState.changePassword"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateChangePassword>
      <ModalAuthModalStateChangePasswordSuccessfully
          v-else-if="modalState === AuthModalState.ChangePasswordSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateChangePasswordSuccessfully>
      <ModalAuthModalStateCodeFromEmail
          v-else-if="modalState === AuthModalState.CodeFromEmail"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateCodeFromEmail>
      <ModalAuthModalStateRegistration
          v-else-if="modalState === AuthModalState.Registration"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRegistration>
      <ModalAuthModalStateRegistrationSuccessfully
          v-else-if="modalState === AuthModalState.RegistrationSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRegistrationSuccessfully>
      <ModalAuthModalStateRestorePassword
          v-else-if="modalState === AuthModalState.RestorePassword"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRestorePassword>
      <ModalAuthModalStateRestorePasswordSuccessfully
          v-else-if="modalState === AuthModalState.RestorePasswordSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRestorePasswordSuccessfully>
      <ModalAuthModalStateWelcomeBackInGoogle
          v-else-if="modalState === AuthModalState.WelcomeBackInGoogle"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateWelcomeBackInGoogle>

    </template>
  </ModalBaseModal>
</template>

<script setup>
const {AuthModalState} = useAuthModalState();
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

const userData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  twoFA: '',
  codeFromEmail: ''
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