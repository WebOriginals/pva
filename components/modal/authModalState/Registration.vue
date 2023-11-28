<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.Registration.title')}}</h3>
    <p>{{$t('modal.authModalState.Registration.subTitle')}}</p>
  </div>

  <UButton :label="$t('modal.authModalState.Registration.googleBtn')" color="black" size="xl" block class="mb-6">
    <template #leading>
      <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
    </template>
  </UButton>

  <div class="modelReg__alternative"><span>{{$t('modal.authModalState.Registration.googleSubText')}}</span></div>

  <UForm class="modelReg__form">
    <UiBaseInputN
        v-model="form.email"
        type-input="text"
        :label="$t('modal.authModalState.Registration.inputEmail')"
        :placeholder="$t('modal.authModalState.Registration.inputEmail')"
        :error="v$.email.$error"
        :errors=" v$.email.$errors"
        :show-error="true"
        @change="v$.email.$touch"
    ></UiBaseInputN>

    <UiBaseInputN
        v-model="form.password"
        :type-input="'password'"
        :label="$t('modal.authModalState.Registration.inputPassword')"
        :placeholder="$t('modal.authModalState.Registration.inputPassword')"
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
        :label="$t('modal.authModalState.Registration.inputConfirmPassword')"
        :placeholder="$t('modal.authModalState.Registration.inputConfirmPassword')"
        :error="v$.confirmPassword.$error"
        :errors=" v$.confirmPassword.$errors"
        :show-error="true"
        @change="v$.confirmPassword.$touch"
    ></UiBaseInputN>

    <UiBaseButton
        class="btn"
        size="xl"
        :label="$t('modal.authModalState.Registration.btnRegistration')"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="submitRegistrationForm"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
const {RulesForFormEmail, RulesForFormPassword, RulesForFormConfirmPassword} = useRulesForForm();
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
    email: RulesForFormEmail(),
    password: RulesForFormPassword(),
    confirmPassword: RulesForFormConfirmPassword(form.value.password),
  };
});
const v$ = useVuelidate(rules, form);

import apiAuth from '~/components/api/AuthAPI';
const submitRegistrationForm = async ()  => {
  v$.value.$validate();
  if (!v$.value.$error) {
    const params = {
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.confirmPassword,
      access_token: 'tyryrRerw456'
    }
    const registrationResult = await apiAuth.registration(params);

    if(!registrationResult.error.value){
      emit('changeModalNeedState', authModalState.RegistrationSuccessfully);
    }

  }
};
</script>

<style scoped lang="scss">

</style>