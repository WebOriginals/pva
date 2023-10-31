<template >
<div>
  <div class="modelReg__title" >
    <h3>Установить пароль</h3>
    <p>Письмо со ссылкой на сброс пароля было отправлено на почту {{ userData.email }}</p>
  </div>
  <UForm class="modelReg__form">

    <UiBaseInput
        v-model="userData.codeFromEmail"
        :type-input="'text'"
        :label="'Введите код'"
        :error="v$.codeFromEmail.$error"
        :errors="v$.codeFromEmail.$errors"
        :placeholder="'Введите код'"
        @change="v$.codeFromEmail.$touch"
        autocomplete="off"
    ></UiBaseInput>
    <div class="modelReg__grid-btn">
      <UiBaseButton  size="xxl"  label=" Отправить повторно" variant="soft" @click="sendCodeFromEmailAgain"></UiBaseButton>
      <UiBaseButton :disabled="v$.$invalid" size="xxl" label="Далее"  @click="setPassword"></UiBaseButton>
    </div>
  </UForm>

</div>
</template>

<script setup>
const {AuthModalState} = useAuthModalState();
const emit = defineEmits();
import {storeToRefs} from "pinia";
import { useUserStore } from '~/store/user.js';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
const rules = computed(() => {
  return {
    codeFromEmail: {
      required: helpers.withMessage('Поле с кодом обязательно', required),
    }
  };
});
const v$ = useVuelidate(rules, userData);

import {index} from '~/components/api/fetchCodeFromEmail';
const sendCodeFromEmailAgain = async () => {
  const params = {
    codeFromEmail: userData.value.codeFromEmail,
  }
  const {status, error} = await index(params)
};

const setPassword = () => {
  emit('getModalNeedState', AuthModalState.changePassword);
}
</script>

<style scoped lang="scss">

</style>