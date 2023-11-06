<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.ChangePassword.title')}}</h3>
  </div>
  <div class="modelReg__alert" v-if="error">
    {{error}}
  </div>
  <UForm class="modelReg__form">

    <UiBaseInputN
        v-model="form.password"
        :type-input="'password'"
        :label="$t('modal.authModalState.ChangePassword.input')"
        :placeholder="$t('modal.authModalState.ChangePassword.input')"
        :error="v$.password.$error"
        :errors=" v$.password.$errors"
        :show-error="false"
        @change="v$.password.$touch"
    ></UiBaseInputN>

    <div class="passwordRequirements">
      <div class="flex gap-1 items-center">
        <IconTheCheck
            v-if="!v$.password.mustBeNumber.$invalid && !v$.password.leastOneSpecialCharacter.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>{{$t('form.errorForInput.password.symbolOrNumber')}}</span>
      </div>
      <div class="flex gap-1 items-center">
        <IconTheCheck v-if="!v$.password.isCapitalLetter.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>{{$t('form.errorForInput.password.isCapitalLetter')}}</span>
      </div>
      <div class="flex gap-1 items-center">
        <IconTheCheck v-if="!v$.password.minLength.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>{{$t('form.errorForInput.password.minLength')}}</span>
      </div>
    </div>

    <UiBaseInputN
        v-model="form.confirmPassword"
        :type-input="'password'"
        :label="$t('modal.authModalState.Login.inputConfirmPassword')"
        :placeholder="$t('modal.authModalState.Login.inputConfirmPassword')"
        :error="v$.confirmPassword.$error"
        :errors=" v$.confirmPassword.$errors"
        :show-error="true"
        @change="v$.confirmPassword.$touch"
    ></UiBaseInputN>

    <UiBaseButton
        class="btn"
        size="xl"
        label="Сменить пароль"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="sendChangedPassword"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
import {authModalState} from "~/utils/authModalState";

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
const form = ref(props.userData);

const emit = defineEmits();

const {RulesForFormConfirmPassword, RulesForFormPassword} = useRulesForForm();
import {useVuelidate} from '@vuelidate/core';

const rules = computed(() => {
  return {
    password: RulesForFormPassword(),
    confirmPassword: RulesForFormConfirmPassword(form.value.password),
  };
});
const v$ = useVuelidate(rules, form);

import {api} from "~/components/api/fetchСhangePassword";
const sendChangedPassword = async () => {
  const params = {
    email: form.value.email,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const {user, pending, status, refresh, error} = await api(params)
    if(!error.value){
      emit('changeModalNeedState', authModalState.ChangePasswordSuccessfully);
    }
  }
};
</script>