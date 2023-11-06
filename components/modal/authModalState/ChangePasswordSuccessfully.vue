<template >
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.ChangePasswordSuccessfully.title')}}</h3>
    <p>{{$t('modal.authModalState.ChangePasswordSuccessfully.subTitle')}}</p>
  </div>
  <div class="modelReg__btn">
    <UiBaseButton class="btn" size="xxl" :label="$t('logout')" @click="logIn"></UiBaseButton>
  </div>
</div>
</template>

<script setup>
import {authModalState} from "~/utils/authModalState";
const emit = defineEmits();

const logIn = () => {
  emit('getModalNeedState', authModalState.login);
};
</script>