<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.GoogleTowFA.title')}}</h3>
    <p>{{$t('modal.authModalState.GoogleTowFA.subTitle')}}</p>
  </div>
  <UForm class="modelReg__form">
    <UiBaseInputN
        v-model="form.twoFA"
        type-input="text"
        :label="$t('modal.authModalState.GoogleTowFA.input')"
        :placeholder="$t('modal.authModalState.GoogleTowFA.input')"
        :error="v$.twoFA.$error"
        :errors=" v$.twoFA.$errors"
        :show-error="true"
        @change="v$.twoFA.$touch"
    ></UiBaseInputN>

    <UiBaseButton
        class="btn"
        size="xl"
        :label="$t('logout')"
        block
        type="submit"
        :disabled="v$.$invalid"
        @click.prevent="sendTwoFA"
    ></UiBaseButton>
  </UForm>
</div>
</template>

<script setup>
const {RulesForFormTwoFA} = useRulesForForm();
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
import {authModalState} from "~/utils/authModalState";
const emit = defineEmits();

const form = ref(props.userData)

import { useModalStore } from "~/store/modal";
const storeModal = useModalStore()

import { useVuelidate } from '@vuelidate/core';

const rules = computed(() => {
  return {
    twoFA: RulesForFormTwoFA(),
  };
});
const v$ = useVuelidate(rules, form);

import {api} from "~/components/api/fetchTwoFA";
const sendTwoFA = async () => {
  const params = {
    twoFA: form.value.twoFA,
  }
  v$.value.$validate();
  if (!v$.value.$error) {
    const { error } = await api(params)

    if(!error.value){
      storeModal.actionIsOpenModal()
      emit('getModalNeedState', authModalState.login);
    }
  }
};
</script>