<template >
<div>
  <div class="modelReg__title" >
    <h3>{{$t('modal.authModalState.CodeFromEmail.title')}}</h3>
    <p>{{$t('modal.authModalState.CodeFromEmail.subTitle')}} {{ form.email }}</p>
  </div>
  <UForm class="modelReg__form">

    <UiBaseInputN
        v-model="form.codeFromEmail"
        type-input="text"
        :label="$t('modal.authModalState.CodeFromEmail.input')"
        :placeholder="$t('modal.authModalState.CodeFromEmail.input')"
        :error="v$.codeFromEmail.$error"
        :errors=" v$.codeFromEmail.$errors"
        :show-error="true"
        @change="v$.codeFromEmail.$touch"
    ></UiBaseInputN>

    <div class="modelReg__grid-btn">
      <UiBaseButton  size="xxl"  :label="$t('modal.authModalState.CodeFromEmail.btnResend')" variant="soft" @click="sendCodeFromEmailAgain"></UiBaseButton>
      <UiBaseButton :disabled="v$.$invalid" size="xxl" :label="$t('modal.authModalState.CodeFromEmail.btnFurther')"  @click="setPassword"></UiBaseButton>
    </div>
  </UForm>

</div>
</template>

<script setup>
const {RulesForFormCodeFromEmail} = useRulesForForm();
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
    codeFromEmail: RulesForFormCodeFromEmail()
  };
});
const v$ = useVuelidate(rules, form);

import {api} from '~/components/api/fetchCodeFromEmail';
const sendCodeFromEmailAgain = async () => {
  const params = {
    codeFromEmail: form.value.codeFromEmail,
  }
  const {status, error} = await api(params)
};

const setPassword = () => {
  emit('changeModalNeedState', authModalState.changePassword);
}
</script>

<style scoped lang="scss">

</style>