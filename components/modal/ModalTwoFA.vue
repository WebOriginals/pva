<template>
  <UModal v-model="storeModal.getIsOpenModalTwoFA"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalTwoFA"/>

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
  </UModal>
</template>

<script setup>
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
    console.log(status)
    if(!error.value){
      storeModal.actionIsOpenModalTwoFA()
      storeUser.actionIsLoggedIn()
    }
  }
};

</script>

<style scoped lang="scss">

</style>