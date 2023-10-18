<template>
  <UModal v-model="storeUser.getIsOpenModalRegistration" ref="modalRef" class="modelReg" :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">

      <UButton color="gray"
               variant="ghost"
               icon="i-heroicons-x-mark-20-solid"
               class="modelReg__close"
               size="xl"
               @click="storeUser.actionIsOpenModalRegistration"/>

      <div class="modelReg__title">
        <h3>Регистрация</h3>
        <p>Не используйте временную или одноразовую почту. Мы не восстанавливаем доступ к подобным аккаунтам.</p>
      </div>

      <UButton label="Регистрация через Google" color="black" size="xl" block class="mb-6">
        <template #leading>
          <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
        </template>
      </UButton>

      <div class="modelReg__alternative"><span>или зарегистрируйтесь с помощью email</span></div>

      <UForm :schema="schema" :state="state" @submit="submit">


        <UiBaseInput v-model="state.email" :type-input="'email'"  :label="'Введите email'" :placeholder="'Введите email'"></UiBaseInput>
        <UiBaseInputPassword v-model="state.password"  :label="'Введите пароль'" :placeholder="'Введите пароль'"></UiBaseInputPassword>


        <UiBaseButton size="xl" label="Зарегистрироваться" block :ui="{ variant: {solid:'w-full'}}" type="submit"></UiBaseButton>
      </UForm>

    </div>
  </UModal>
</template>

<script setup lang="ts">

import {useUserStore} from '~/store/user.js';

const storeUser = useUserStore();

import {string, object, email, minLength, Input} from 'valibot';
import type {FormSubmitEvent} from '@nuxt/ui/dist/runtime/types';

const schema = object({
  email: string([email('Invalid email')]),
  password: string([minLength(8, 'Must be at least 8 characters')])
})
type Schema = Input<typeof schema>
const state = ref({email: undefined, password: undefined})


defineShortcuts({
  escape: {
    usingInput: false,

    handler: () => {
      storeUser.setIsOpenModalRegistration()
    }
  }
})

async function submit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<style  lang="scss">
.modelReg{

  &__wrapper{
    @apply grid py-12 px-6  relative lg:px-16 lg:rounded-2xl;
  }

  &__close{
    @apply absolute top-4 right-4 lg:top-6 lg:right-6 ;
  }

  &__title{
    @apply grid justify-items-center text-center mb-8 gap-4;
  }

  &__alternative{
    @apply flex justify-center relative mb-7;

    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #CDE2FF;
      top: 50%;
      left: 0;
    }

    span{
      @apply bg-white text-sky-400 z-[2] px-2 dark:bg-gray-900 text-center;
    }
  }
}
</style>