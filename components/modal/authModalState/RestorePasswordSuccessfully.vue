<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.RestorePasswordSuccessfully.title')}}</h3>
    <p>{{$t('modal.authModalState.RestorePasswordSuccessfully.subTitle')}} {{ form.email }}</p>
  </div>
  <div class="modelReg__grid-btn">
    <UiBaseButton size="xxl" :label="$t('modal.authModalState.RestorePasswordSuccessfully.btnResend')" @click="sendEmailAgain"></UiBaseButton>
    <UiBaseButton size="xxl" :label="$t('modal.authModalState.RestorePasswordSuccessfully.btnChangeEmail')" variant="soft" @click="changeEmail"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
import {authModalState} from "~/utils/authModalState";
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

import {api} from '~/components/api/fatchRestorePassword';
const sendEmailAgain = async () => {
  const params = {
    email: form.value.email,
  }
  const {status, error} = await api(params)
};

const changeEmail = () => {
  emit('getModalNeedState', authModalState.RestorePassword);
}
</script>

<style scoped lang="scss">

</style>