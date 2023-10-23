<template>
  <UModal v-model="storeModal.getIsOpenModalRegistration" ref="modalRef" class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeModal.actionIsOpenModalRegistration"/>

      <div class="modelReg__title">
        <h2 v-if="error"> проблемы на сервере попробуйте позже {{error}}</h2>
        <h2 v-if="pending">loading</h2>
        <h3>Регистрация</h3>
        <p>Не используйте временную или одноразовую почту. Мы не восстанавливаем доступ к подобным аккаунтам.</p>

      </div>

      <UButton label="Регистрация через Google" color="black" size="xl" block class="mb-6">
        <template #leading>
          <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
        </template>
      </UButton>

      <div class="modelReg__alternative"><span>или зарегистрируйтесь с помощью email</span></div>

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
            <IconTheCheck v-if="!v$.password.mustBeNumber.$invalid && !v$.password.leastOneSpecialCharacter.$invalid"></IconTheCheck>
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
            label="Зарегистрироваться"
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
import { storeToRefs } from "pinia";
import { useUserStore } from '~/store/user.js';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const isCapitalLetter = helpers.regex(/[A-Z]/)
const mustBeNumber = helpers.regex(/[0-9]/);
const leastOneSpecialCharacter = helpers.regex(/[^a-zA-Z0-9]/);

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('Поле электронной почты обязательно', required),
      email: helpers.withMessage('Неверный формат электронной почты', email),
    },
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

import {index} from '~/components/api/fetchRegistation'
const submitForm = async ()  => {
  v$.value.$validate();
  if (!v$.value.$error) {
    console.log("запрос пошел")

    const params = {
          email: userData.value.email,
          password: userData.value.password,
          password_confirmation: userData.value.confirmPassword
        }
    const {error} = await index(params)

    if(!error.value){
      storeModal.actionIsOpenModalRegistration()
      storeModal.actionIsOpenModalRegistrationSuccessfully()
    }

  }
};
</script>

<style lang="scss">
.modelReg {

  &__wrapper {
    @apply grid py-12 px-6  relative lg:px-16 lg:rounded-2xl;
  }

  &__close {
    @apply absolute top-4 right-4 lg:top-6 lg:right-6 ;
  }

  &__title {
    @apply grid justify-items-center text-center mb-8 gap-4;
  }

  &__alternative {
    @apply flex justify-center relative mb-7;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #CDE2FF;
      top: 50%;
      left: 0;
    }

    span {
      @apply bg-white text-sky-400 z-[2] px-2 dark:bg-gray-900 text-center;
    }
  }

  &__form {
    @apply grid gap-4;

    & .passwordRequirements {
      @apply mb-1 grid text-xs gap-2;
    }

    & .btn {
      @apply mt-4;
    }
  }
}
</style>