<template>
  <UModal v-model="storeModal.getIsOpenModalCodeFromEmail"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalCodeFromEmail"/>

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
      </UForm>

      <div class="modelReg__grid-btn">
        <UiBaseButton :disabled="v$.$invalid" size="xxl"  label=" Отправить повторно" variant="soft" @click="sendCodeFromEmailAgain"></UiBaseButton>
        <UiBaseButton :disabled="v$.$invalid" size="xxl" label="Далее"  @click="setPassword"></UiBaseButton>
      </div>
    </div>
  </UModal>
</template>

<script setup>
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
  storeModal.actionIsOpenModalCodeFromEmail()
  storeModal.actionIsOpenModalChangePassword()
}
</script>

<style scoped lang="scss">
.modelReg__grid-btn{
  @apply grid gap-4 sm:grid-cols-2;
}
.modelReg__form{
  @apply mb-8;
}
</style>