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
    <UiBaseInput
        v-model="form.email"
        :type-input="'email'"
        :label="$t('modal.authModalState.Registration.inputEmail')"
        :error="v$.email.$error"
        :errors="v$.email.$errors"
        :placeholder="$t('modal.authModalState.Registration.inputEmail')"
        @change="v$.email.$touch"
        autocomplete="off"
    ></UiBaseInput>
    <UiBaseInputPassword
        v-model="form.password"
        :label="$t('modal.authModalState.Registration.inputPassword')"
        :placeholder="$t('modal.authModalState.Registration.inputPassword')"
        :error="v$.password.$error"
        :is-error="false"
        @change="v$.password.$touch"
    ></UiBaseInputPassword>
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
    <UiBaseInputPassword
        v-model="form.confirmPassword"
        :label="$t('modal.authModalState.Registration.inputConfirmPassword')"
        :placeholder="$t('modal.authModalState.Registration.inputConfirmPassword')"
        :error="v$.confirmPassword.$error"
        :errors=" v$.confirmPassword.$errors"
        @change="v$.confirmPassword.$touch"
    ></UiBaseInputPassword>
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

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

import { useVuelidate } from '@vuelidate/core';

const rules = computed(() => {
  return {
    email: RulesForFormEmail(),
    password: RulesForFormPassword(),
    confirmPassword: RulesForFormConfirmPassword(form.value.password),
  };
});
const v$ = useVuelidate(rules, form);

import {index} from '~/components/api/fetchRegistation'
const submitRegistrationForm = async ()  => {
  v$.value.$validate();
  if (!v$.value.$error) {
    const params = {
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.confirmPassword,
      access_token: 'tyryrRerw456'
    }
    const {error} = await index(params)

    if(!error.value){
      emit('getModalNeedState', AuthModalState.RegistrationSuccessfully);
    }

  }
};
</script>

<style scoped lang="scss">

</style>