<script setup>

import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

const isCapitalLetter =  helpers.regex(/[A-Z]/)
const mustBeNumber = helpers.regex(/[0-9]/);
const leastOneSpecialCharacter = helpers.regex(/[^a-zA-Z0-9]/);

const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
});

const isDisabled = ref(true);

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
      sameAs: helpers.withMessage("Пароли не совпадают", sameAs(formData.value.password)),
    },
  };
});

const v$ = useVuelidate(rules, formData);



const myValueSquare = computed(() => {

  if(!v$.value.$error){
    isDisabled.value = false
  } else {
    return true
  }
})



const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    //    Some code
  }
};
</script>

<template>
  <main class="min-h-screen bg-[#1a1a1a]">
    <section class="container mx-auto px-5 py-24 text-gray-400">
      <form
          @submit.prevent="submitForm"
          class="mx-auto mt-10 flex w-full flex-col rounded-lg bg-[#242424] bg-opacity-50 p-8 shadow-lg md:mt-0 md:w-1/2 lg:w-2/6"
      >
        <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Register</h2>

        <!-- Email input -->
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
          <div class="relative">
            <input
                v-model="formData.email"
                type="text"
                id="email"
                name="email"
                placeholder="e.g. example@email.com"
                class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                :class="{
                'border-red-500 focus:border-red-500': v$.email.$error,
                'border-[#42d392] ': !v$.email.$invalid,
              }"
                @change="v$.email.$touch"
                autocomplete="off"
            />
            <Icon
                v-if="!v$.email.$invalid || v$.email.$error"
                class="absolute right-2 h-full text-xl text-green-500"
                :class="{ 'text-green-500': !v$.email.$invalid, 'text-yellow-500': v$.email.$error }"
                :name="`heroicons-solid:${!v$.email.$error ? 'check-circle' : 'exclamation'}`"
            />
          </div>
          <span class="text-xs text-red-500" v-if="v$.email.$error">{{
              v$.email.$errors[0].$message
            }}</span>
        </div>

        <!-- Password input -->
        <div class="relative mb-4">
          <label for="password" class="text-sm leading-7 text-gray-400">Password</label>
          <div class="relative">
            <input
                v-model="v$.password.$model"
                type="text"
                id="password"
                name="password"
                class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                :class="{
                ' border-red-500 focus:border-red-500': v$.password.$error,
                'border-[#42d392]': !v$.password.$invalid,
              }"
                @change="v$.password.$touch"
            />
            <Icon
                v-if="!v$.password.$invalid || v$.password.$error"
                class="absolute right-2 h-full text-xl text-green-500"
                :class="{
                'text-green-500': !v$.password.$invalid,
                'text-yellow-500': v$.password.$error,
              }"
                :name="`heroicons-solid:${!v$.password.$error ? 'check-circle' : 'exclamation'}`"
            />
          </div>
          <template v-for="errorElem in v$.password.$errors">
            <span class="text-xs text-red-500 block" v-if="v$.password.$error">{{errorElem.$message}} {{errorElem.$validator}}</span>
          </template>

          <div class="passwordRequirements">
            <div class="flex gap-1 items-center">
              <IconTheCheck v-if="!v$.password.mustBeNumber.$invalid && !v$.password.leastOneSpecialCharacter.$invalid"></IconTheCheck>
              <IconTheError v-else></IconTheError>
              <span>Должен содержать символ или цифру</span>
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
        </div>

        <!-- Confirm Password input -->
        <div class="relative mb-4">
          <label for="confirmPassword" class="text-sm leading-7 text-gray-400"
          >Confirm password</label
          >
          <div class="relative">
            <input
                v-model="v$.confirmPassword.$model"
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                :class="{
                ' border-red-500 focus:border-red-500': v$.confirmPassword.$error,
                'border-[#42d392]': !v$.confirmPassword.$invalid,
              }"
                @change="v$.confirmPassword.$touch"
            />
            <Icon
                v-if="!v$.confirmPassword.$invalid || v$.confirmPassword.$error"
                class="absolute right-2 h-full text-xl text-green-500"
                :class="{
                'text-green-500': !v$.confirmPassword.$invalid,
                'text-yellow-500': v$.confirmPassword.$error,
              }"
                :name="`heroicons-solid:${
                !v$.confirmPassword.$error ? 'check-circle' : 'exclamation'
              }`"
            />
          </div>
          <span class="text-xs text-red-500" v-if="v$.confirmPassword.$error">{{
              v$.confirmPassword.$errors[0].$message
            }}</span>
        </div>

        <button
            type="submit"
            class="rounded border-0 bg-blue-500 py-2 px-8 font-bold text-[#213547] transition-colors duration-500 hover:bg-blue-600 focus:outline-none"
            :disabled="myValueSquare"
        >
          Submit {{myValueSquare}}
        </button>
      </form>
    </section>
  </main>
</template>