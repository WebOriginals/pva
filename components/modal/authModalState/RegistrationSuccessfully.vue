<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.RegistrationSuccessfully.title')}}</h3>
    <p>{{$t('modal.authModalState.RegistrationSuccessfully.subTitle1')}} {{ form.email }} {{$t('modal.authModalState.RegistrationSuccessfully.subTitle2')}}</p>
  </div>

  <div class="modelReg__grid-btn">
    <UiBaseButton size="xxl" :label="$t('modal.authModalState.RegistrationSuccessfully.btnResend')" @click="fetchRegistrationAgain"></UiBaseButton>
    <UiBaseButton size="xxl" :label="$t('modal.authModalState.RegistrationSuccessfully.btnChangeEmail')" variant="soft" @click="openModalRegistration"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
const {AuthModalState} = useAuthModalState();
const emit = defineEmits();
const props = defineProps({
  userData: {
    type: Object,
    required: true,
    default: {
      email: '',
      password: '',
      confirmPassword: '',
      twoFA: '',
      codeFromEmail: ''
    }
  }
});
const form = ref(props.userData)

import {index} from '~/components/api/fetchRegistation'
const fetchRegistrationAgain = async () => {
  const params = {
    email: form.value.email,
    password: form.value.password,
    password_confirmation: form.value.confirmPassword
  }
  const {user, pending, status, refresh, error} = await index(params)
};

const openModalRegistration = () => {
  emit('getModalNeedState', AuthModalState.Registration);
}
</script>

<style scoped lang="scss">

</style>