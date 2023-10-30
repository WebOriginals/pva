<template>
<div>
  <div class="modelReg__title">
    <h3>Восстановление пароля</h3>
    <p>Мы отправим письмо с инструкцией для восстановления пароля на указанный email</p>
  </div>
  <UForm class="modelReg__form">


    <UiBaseInput
        v-model="userData.email"
        :type-input="'email'"
        :label="'Введите email'"
        :error="v$.email.$error"
        :errors="v$.email.$errors"
        :placeholder="'Введите email'"
        @change="v$.email.$touch"
        autocomplete="off"
    ></UiBaseInput>

    <UiBaseButton
        class="btn"
        size="xl"
        label="Отправить письмо"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="sendEmail"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
import { useUserStore } from '~/store/user';
import { storeToRefs } from "pinia";
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()

import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Поле электронной почты обязательно', required),
      email: helpers.withMessage('Неверный формат электронной почты', email),
    }
  };
});
const v$ = useVuelidate(rules, userData);

import {index} from "~/components/api/fatchRestorePassword";
const sendEmail = async () => {
  const params = {
    email: userData.value.email,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const {user, pending, status, refresh, error} = await index(params)
    console.log(status)
    if(!error.value){
      storeModal.actionIsOpenModalRestorePassword()
      storeModal.actionIsOpenModalRestorePasswordSuccessfully()
    }
  }
};
</script>

<style scoped lang="scss">

</style>