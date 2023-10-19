<template>
  <UModal v-model="storeUser.getIsOpenModalRegistration" ref="modalRef" class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
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

      <UForm
          class="modelReg__form"
          :schema="schema"
          :state="state"
          @submit="submit">

        <UFormGroup name="emaile">
          <UiBaseInput
              v-model="emaile"
              :type-input="'email'"
              :label="'Введите email4'"
              :placeholder="'Введите email4'"
          ></UiBaseInput>
        </UFormGroup>




        <UFormGroup name="email">
          <UiBaseInput
              v-model="state.email"
              :type-input="'email'"
              :label="'Введите email'"
              :placeholder="'Введите email'"
          ></UiBaseInput>
        </UFormGroup>

        <UFormGroup name="password">
          <UiBaseInputPassword
              v-model="state.password"
              :label="'Введите пароль'"
              :placeholder="'Введите пароль'"
          ></UiBaseInputPassword>
        </UFormGroup>
        <div class="passwordRequirements">
          <div class="flex gap-1 items-center">
            <IconTheCheck v-if="true"></IconTheCheck>
            <IconTheError v-else></IconTheError>
            <span>Должен содержать символ или цифру</span>
          </div>
          <div class="flex gap-1 items-center">
            <IconTheCheck v-if="true"></IconTheCheck>
            <IconTheError v-else></IconTheError>
            <span>Как минимум одну заглавную букву</span>
          </div>
          <div class="flex gap-1 items-center">
            <IconTheCheck v-if="true"></IconTheCheck>
            <IconTheError v-else></IconTheError>
            <span>Не менее 8 символов</span>
          </div>
        </div>
        <UFormGroup name="confirmPassword">
          <UiBaseInputPassword
              v-model="state.confirmPassword"
              :label="'Повторите пароль'"
              :placeholder="'Повторите пароль'"
          ></UiBaseInputPassword>
        </UFormGroup>

        <UiBaseButton
            class="btn"
            size="xl"
            label="Зарегистрироваться"
            block
            type="submit"
        ></UiBaseButton>
      </UForm>

    </div>
  </UModal>
</template>

<script setup lang="ts">

import {useUserStore} from '~/store/user.js';

const storeUser = useUserStore();

import {ValiError, safeParse, custom, string, object, email, minLength, Input, toTrimmed} from 'valibot';
import type {FormSubmitEvent} from '@nuxt/ui/dist/runtime/types';

const schema = object(
    {
      email: string([
        minLength(1, 'Пожалуйста, введите свой адрес электронной почты.'),
        email('Адрес электронной почты имеет неправильный формат.'),
      ]),
      password: string([
        minLength(8, "пароль должен содержать не менее 8 символов"),
        custom(
            (value) => value.match(/[A-Z]/) !== null,
            "Пароль должен содержать хотя бы одну заглавную букву."
        ),
        custom(
            (value) => value.match(/[0-9]/) !== null,
            "Пароль должен содержать как минимум одну цифру."
        ),
        custom(
            (value) => value.match(/[^a-zA-Z0-9]/),
            "Пароль должен содержать хотя бы один специальный символ."),
      ]),
      confirmPassword: string([
        minLength(8, "пароль должен содержать не менее 8 символов"),
        custom(
            (value) => value.match(/[A-Z]/) !== null,
            "Пароль должен содержать хотя бы одну заглавную букву."
        ),
        custom(
            (value) => value.match(/[0-9]/) !== null,
            "Пароль должен содержать как минимум одну цифру."
        ),
        custom(
            (value) => value.match(/[^a-zA-Z0-9]/),
            "Пароль должен содержать хотя бы один специальный символ."),
      ]),
    },
    [
      (input) => {
        if (input.password !== input.confirmPassword) {
          throw new ValiError([
            {
              reason: "string",
              validation: "custom",
              origin: "value",
              message: "Пароли должны совпадать",
              input: input.confirmPassword,
              path: [
                {
                  schema: "object",
                  input: input,
                  key: "confirmPassword",
                  value: input.confirmPassword,
                },
              ],
            },
          ])
        }
        return input
      },
    ]
)


type Schema = Input<typeof schema>
const state = ref({email: undefined, password: undefined, confirmPassword: undefined})

async function submit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}

defineShortcuts({
  escape: {
    usingInput: false,

    handler: () => {
      storeUser.setIsOpenModalRegistration()
    }
  }
})
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