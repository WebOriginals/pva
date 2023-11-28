<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.RestorePassword.title')}}</h3>
    <p>{{$t('modal.authModalState.RestorePassword.subTitle')}}</p>
  </div>
  <UForm class="modelReg__form">

    <UiBaseInputN
        v-model="form.email"
        type-input="text"
        :label="$t('modal.authModalState.RestorePassword.inputEmail')"
        :placeholder="$t('modal.authModalState.RestorePassword.inputEmail')"
        :error="v$.email.$error"
        :errors=" v$.email.$errors"
        :show-error="true"
        @change="v$.email.$touch"
    ></UiBaseInputN>

    <UiBaseButton
        class="btn"
        size="xl"
        :label="$t('modal.authModalState.RestorePassword.btn')"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="sendEmail"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
const {RulesForFormEmail} = useRulesForForm();
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

import { useVuelidate } from '@vuelidate/core';

const rules = computed(() => {
  return {
    email: RulesForFormEmail()
  };
});
const v$ = useVuelidate(rules, form);

import apiAuth from '~/components/api/AuthAPI';
const sendEmail = async () => {
  const params = {
    email: form.value.email,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const restorePasswordResult = await apiAuth.restorePassword(params);
    if(!restorePasswordResult.error.value){
      emit('changeModalNeedState', authModalState.RestorePasswordSuccessfully);
    }
  }
};
</script>