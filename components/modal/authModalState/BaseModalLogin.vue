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
          v-if="modalState === authModalState.login"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateLogin>
      <ModalAuthModalStateGoogleTowFA
          v-else-if="modalState === authModalState.GoogleTowFA"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateGoogleTowFA>
      <ModalAuthModalStateChangePassword
          v-else-if="modalState === authModalState.changePassword"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateChangePassword>
      <ModalAuthModalStateChangePasswordSuccessfully
          v-else-if="modalState === authModalState.ChangePasswordSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateChangePasswordSuccessfully>
      <ModalAuthModalStateCodeFromEmail
          v-else-if="modalState === authModalState.CodeFromEmail"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateCodeFromEmail>
      <ModalAuthModalStateRegistration
          v-else-if="modalState === authModalState.Registration"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRegistration>
      <ModalAuthModalStateRegistrationSuccessfully
          v-else-if="modalState === authModalState.RegistrationSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRegistrationSuccessfully>
      <ModalAuthModalStateRestorePassword
          v-else-if="modalState === authModalState.RestorePassword"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRestorePassword>
      <ModalAuthModalStateRestorePasswordSuccessfully
          v-else-if="modalState === authModalState.RestorePasswordSuccessfully"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateRestorePasswordSuccessfully>
      <ModalAuthModalStateWelcomeBackInGoogle
          v-else-if="modalState === authModalState.WelcomeBackInGoogle"
          @getModalNeedState="getModalNeedState"
          :userData="userData"
      ></ModalAuthModalStateWelcomeBackInGoogle>

    </template>
  </ModalBaseModal>
</template>

<script setup>
import {authModalState} from "~/utils/authModalState";
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
const getModalNeedState = (ev = authModalState.login) => {
  modalState.value = ev
}

const closeModal = () => {
  modalState.value = props.modalDefaultState
  storeModal.closeIsOpenModal()
}
</script>