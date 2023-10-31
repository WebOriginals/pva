<template>
<div>
  <div class="modelReg__title">
    <h3>Вход в аккаунт</h3>
    <p>Откройте приложение Google Authenticator и введите код из него или код восстановления</p>
  </div>
  <UForm class="modelReg__form">
    <UiBaseInput
        v-model="userData.twoFA"
        :type-input="'text'"
        :label="'Код Google Authenticator или код восстановления'"
        :error="v$.twoFA.$error"
        :errors="v$.twoFA.$errors"
        :placeholder="'Введите email'"
        @change="v$.twoFA.$touch"
        autocomplete="off"
    ></UiBaseInput>

    <UiBaseButton
        class="btn"
        size="xl"
        label="Отправить письмо"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="sendTwoFA"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
const {AuthModalState} = useAllUtils();
const emit = defineEmits();
import { useUserStore } from '~/store/user';
import { storeToRefs } from "pinia";
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
const rules = computed(() => {
  return {
    twoFA: {
      required: helpers.withMessage('Поле электронной почты обязательно', required),
    }
  };
});
const v$ = useVuelidate(rules, userData);

import {index} from "~/components/api/fetchTwoFA";
const sendTwoFA = async () => {
  const params = {
    twoFA: userData.value.twoFA,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const {user, pending, status, refresh, error} = await index(params)

    if(!error.value){
      storeModal.actionIsOpenModal()
      emit('getModalNeedState', AuthModalState.login);
    }
  }
};
</script>

<style scoped lang="scss">

</style>