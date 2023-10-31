<template>
<div>
  <div class="modelReg__title">
    <h3>Смена пароля</h3>
    <div class="modelReg__alert" v-if="error">
      {{error}}
    </div>
  </div>
  <UForm class="modelReg__form">

    <UiBaseInputPassword
        v-model="userData.password"
        :label="'Введите пароль'"
        :placeholder="'Введите пароль'"
        :error="v$.password.$error"
        :is-error="false"
        @change="v$.password.$touch"
    ></UiBaseInputPassword>

    <div class="passwordRequirements">
      <div class="flex gap-1 items-center">
        <IconTheCheck
            v-if="!v$.password.mustBeNumber.$invalid && !v$.password.leastOneSpecialCharacter.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>Должен содержать символ и цифру</span>
      </div>
      <div class="flex gap-1 items-center">
        <IconTheCheck v-if="!v$.password.isCapitalLetter.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>Как минимум одну заглавную букву</span>
      </div>
      <div class="flex gap-1 items-center">
        <IconTheCheck v-if="!v$.password.minLength.$invalid"></IconTheCheck>
        <IconTheError v-else></IconTheError>
        <span>Не менее 8 символов</span>
      </div>
    </div>

    <UiBaseInputPassword
        v-model="userData.confirmPassword"
        :label="'Повторите пароль'"
        :placeholder="'Повторите пароль'"
        :error="v$.confirmPassword.$error"
        :errors=" v$.confirmPassword.$errors"
        @change="v$.confirmPassword.$touch"
    ></UiBaseInputPassword>

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
const {AuthModalState} = useAuthModalState();
const emit = defineEmits();
import { storeToRefs } from "pinia";
import { useUserStore } from '~/store/user';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import { useModalStore } from "~/store/modal";
const storeModal = useModalStore()

import {useVuelidate} from '@vuelidate/core';
import {required, sameAs, minLength, helpers} from '@vuelidate/validators';
const isCapitalLetter = helpers.regex(/[A-Z]/)
const mustBeNumber = helpers.regex(/[0-9]/);
const leastOneSpecialCharacter = helpers.regex(/[^a-zA-Z0-9]/);
const rules = computed(() => {
  return {

    password: {
      required: helpers.withMessage('Поле пароля обязательно', required),
      isCapitalLetter: helpers.withMessage('Поле должно содержать заглавную букву', isCapitalLetter),
      mustBeNumber: helpers.withMessage('Поле должно содержать хотя бы 1 цифру', mustBeNumber),
      leastOneSpecialCharacter: helpers.withMessage('Поле должно содержать хотя бы один специальный символ.', leastOneSpecialCharacter),
      minLength: helpers.withMessage('Поле должно содержать минимум 8 символов', minLength(8)),
    },
    confirmPassword: {
      required: helpers.withMessage('Поле электронной почты обязательно', required),
      sameAs: helpers.withMessage("Пароли не совпадают", sameAs(userData.value.password)),
    },
  };
});
const v$ = useVuelidate(rules, userData);

import {index} from "~/components/api/fetchСhangePassword";
const sendChangedPassword = async () => {
  const params = {
    email: userData.value.email,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const {user, pending, status, refresh, error} = await index(params)
    if(!error.value){
      emit('getModalNeedState', AuthModalState.ChangePasswordSuccessfully);
    }
  }
};
</script>

<style scoped lang="scss">

</style>