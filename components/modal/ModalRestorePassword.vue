<template>
  <UModal v-model="storeModal.getIsOpenModalRestorePassword"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalRestorePassword"/>

      <div class="modelReg__title">
        <h3>Восстановление пароля</h3>
        <p>Мы отправим письмо с инструкцией для восстановления пароля на указанный email</p>
      </div>


      <UForm class="modelReg__form">


        <UiBaseInput

            v-model="formData.email"
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
            @click.prevent="submitForm"
        ></UiBaseButton>
      </UForm>

    </div>
  </UModal>
</template>

<script setup>
import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const formData = ref({
  email: '',

});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Поле электронной почты обязательно', required),
      email: helpers.withMessage('Неверный формат электронной почты', email),
    }
  };
});

const v$ = useVuelidate(rules, formData);


const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    console.log("злпррос пошел")

    setTimeout(() => {
      storeModal.actionIsOpenModalRestorePassword()
      storeModal.actionIsOpenModalRestorePasswordSuccessfully()
    }, 2000);
  }
};
</script>

<style lang="scss">

</style>