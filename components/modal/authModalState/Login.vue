<template>
  <div>
    <div class="modelReg__title">
      <h3>{{ $t('modal.authModalState.Login.title') }}</h3>
    </div>

    <div class="modelReg__alert" v-if="alertGlobal.error">
      {{ alertGlobal.error }} {{ alertGlobal.status }}
    </div>

    <UButton :label="$t('modal.authModalState.Login.googleBtn')" color="black" size="xl" block class="mb-6">
      <template #leading>
        <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
      </template>
    </UButton>

    <div class="modelReg__alternative"><span>{{ $t('modal.authModalState.Login.googleSubText') }}</span></div>

    <UForm class="modelReg__form">

      <UiBaseInputN
          v-model="form.email"
          type-input="text"
          :label="$t('modal.authModalState.Login.inputEmail')"
          :placeholder="$t('modal.authModalState.Login.inputEmail')"
          :error="v$.email.$error"
          :errors=" v$.email.$errors"
          :show-error="true"
          @change="v$.email.$touch"
      ></UiBaseInputN>

      <UiBaseInputN
          v-model="form.password"
          :type-input="'password'"
          :label="$t('modal.authModalState.Login.inputPassword')"
          :placeholder="$t('modal.authModalState.Login.inputPassword')"
          :error="v$.password.$error"
          :errors=" v$.password.$errors"
          :show-error="true"
          @change="v$.password.$touch"
      ></UiBaseInputN>

      <div class="flex justify-end">
        <UButton color="primary" variant="link" :label="$t('modal.authModalState.Login.forgotYourPassword')"
                 @click="openModalRestorePassword"/>
      </div>

      <UiBaseButton
          class="btn"
          size="xl"
          :label="$t('modal.authModalState.Login.formBtn')"
          block
          type="submit"
          :disabled="v$.$invalid"
          @click.prevent="submitForm"
      ></UiBaseButton>

      <div class="text-center">
        <span> {{ $t('modal.authModalState.Login.noAccount') }}
          <UButton
              color="primary"
              variant="link"
              :label="$t('modal.authModalState.Login.Register')"
              @click="openModalRegistration"
          /></span>
      </div>

    </UForm>
  </div>
</template>

<script setup>
import {useUserStore} from "~/store/user";

const storeUser = useUserStore();

import {useModalStore} from "~/store/modal";

const storeModal = useModalStore();

const {RulesForFormEmail, RulesForFormPassword} = useRulesForForm();
import {authModalState} from "~/utils/authModalState";

const props = defineProps({
  userData: {
    type: Object,
    required: true,
    default: {
      email: '',
      password: '',
      confirmPassword: '',
      twoFA: '',
      codeFromEmail: ''
    }
  }
});
const emit = defineEmits();


import {useVuelidate} from '@vuelidate/core';

const form = ref(props.userData)

const rules = computed(() => {
  return {
    email: RulesForFormEmail(),
    password: RulesForFormPassword()
  };
});
const v$ = useVuelidate(rules, form);

const alertGlobal = ref('');
import {api} from '~/components/api/fetchLogin';

const submitForm = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {

    const params = {
      email: form.value.email,
      password: form.value.password
    }
    const {error, login, status} = await api(params)

    alertGlobal.value = {error: error.value, status: status.value, data: login.value}

    if (!error.value) {

      if (login.value[0].google) {
       return  emit('changeModalNeedState', authModalState.WelcomeBackInGoogle);
      }

      if (login.value[0].twoFA) {
        return emit('changeModalNeedState', authModalState.GoogleTowFA);
      }

      storeModal.actionIsOpenModal()
      storeUser.actionIsLoggedIn()
    }
  }
};

const openModalRegistration = () => {
  emit('changeModalNeedState', authModalState.Registration);
}
const openModalRestorePassword = () => {
  emit('changeModalNeedState', authModalState.RestorePassword);
}
</script>