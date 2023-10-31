<template>
  <div>
    <div class="modelReg__title">
      <h3>Вход в аккаунт</h3>
    </div>

    <UButton label="Регистрация через Google" color="black" size="xl" block class="mb-6">
      <template #leading>
        <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
      </template>
    </UButton>

    <div class="modelReg__alternative"><span>или зарегистрируйтесь с помощью email</span></div>

    <UForm class="modelReg__form">

      <UiBaseInputN
          v-model="userData.email"
          :type-input="'text'"
          :label="'Введите email'"
          :placeholder="'Введите email'"
          :error="v$.email.$error"
          :errors=" v$.email.$errors"
          :show-error="true"
          @change="v$.email.$touch"
      ></UiBaseInputN>

      <UiBaseInputN
          v-model="userData.password"
          :type-input="'password'"
          :label="'Введите пароль'"
          :placeholder="'Введите пароль'"
          :error="v$.password.$error"
          :errors=" v$.password.$errors"
          :show-error="true"
          @change="v$.password.$touch"
      ></UiBaseInputN>


      <div class="flex justify-end">
        <UButton color="primary" variant="link" label="Забыли пароль?" @click="openModalRestorePassword"/>
      </div>

      <UiBaseButton
          class="btn"
          size="xl"
          label="Войти"
          block
          type="submit"
          :disabled="v$.$invalid"
          @click.prevent="submitForm"
      ></UiBaseButton>

      <div class="text-center">
        <span>Ещё нет аккаунта? <UButton color="primary" variant="link" label="Зарегистрироваться"
                                         @click="openModalRegistration"/></span>
      </div>

    </UForm>
  </div>
</template>

<script setup>
const {AuthModalState} = useAllUtils();
import {storeToRefs} from "pinia";
import {useUserStore} from '~/store/user';

const storeUser = useUserStore();
const {userData} = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";

const storeModal = useModalStore();

import {useVuelidate} from '@vuelidate/core';
import {required, email, minLength, helpers} from '@vuelidate/validators';

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
    }
  };
});
const v$ = useVuelidate(rules, userData);

const emit = defineEmits();
import {index} from '~/components/api/fetchLogin'

const submitForm = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {

    const params = {
      email: userData.value.email,
      password: userData.value.password
    }
    const {error, user} = await index(params)

    if (!error.value) {

      if (user.value[0].google) {
       return  emit('getModalNeedState', AuthModalState.WelcomeBackInGoogle);
      }

      if (user.value[0].twoFA) {
        return emit('getModalNeedState', AuthModalState.GoogleTowFA);
      }
      storeModal.actionIsOpenModal()
    }
  }
};

const openModalRegistration = () => {
  emit('getModalNeedState', AuthModalState.Registration);
}
const openModalRestorePassword = () => {
  emit('getModalNeedState', AuthModalState.RestorePassword);
}
</script>

<style scoped lang="scss">

</style>