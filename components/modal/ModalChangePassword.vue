<template>
  <UModal v-model="storeModal.getIsOpenModalChangePassword" class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalChangePassword"/>

      <div class="modelReg__title">
        <h3>Смена пароля</h3>
      </div>

      <UForm class="modelReg__form">

        <UiBaseInputPassword
            v-model="formData.password"
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
            v-model="formData.confirmPassword"
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
            @click.prevent="submitForm"
        ></UiBaseButton>
      </UForm>

    </div>
  </UModal>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
const storeModal = useModalStore()

import {useVuelidate} from '@vuelidate/core';
import {required, sameAs, minLength, helpers} from '@vuelidate/validators';

const isCapitalLetter = helpers.regex(/[A-Z]/)
const mustBeNumber = helpers.regex(/[0-9]/);
const leastOneSpecialCharacter = helpers.regex(/[^a-zA-Z0-9]/);

const formData = ref({
  password: '',
  confirmPassword: '',
});


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
      sameAs: helpers.withMessage("Пароли не совпадают", sameAs(formData.value.password)),
    },
  };
});

const v$ = useVuelidate(rules, formData);


const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    console.log("запрос пошел")

    setTimeout(() => {
      storeModal.actionIsOpenModalChangePassword()
      storeModal.actionIsOpenModalChangePasswordSuccessfully()
    }, 2000);
  }
};
</script>

<style scoped lang="scss">

</style>