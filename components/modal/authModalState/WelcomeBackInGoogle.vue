<template>
<div>
  <div class="modelReg__title">
    <h3>С возвращением!</h3>
    <p>{{form.email}}</p>
    <p>Ранее вы вошли в систему с помощью Google</p>
  </div>

  <UButton label="Регистрация через Google" color="black" size="xl" block class="mb-6">
    <template #leading>
      <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
    </template>
  </UButton>

  <div class="text-center">
    <UButton color="primary" variant="link" label="Установить пароль " @click="setPassword"/>
  </div>
</div>
</template>

<script setup>
const {AuthModalState} = useAuthModalState();
const emit = defineEmits();

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
const form = ref(props.userData);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

const setPassword = () => {
  emit('getModalNeedState', AuthModalState.CodeFromEmail);
};
</script>

<style scoped lang="scss">

</style>