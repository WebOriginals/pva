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

import apiAuth from '~/components/api/AuthAPI';
const sendEmailAgain = async () => {
  const params = {
    email: form.value.email,
  }
  const restorePasswordResult = await apiAuth.restorePassword(params);
};

const changeEmail = () => {
  emit('changeModalNeedState', authModalState.RestorePassword);
}
</script>

<style scoped lang="scss">

</style>