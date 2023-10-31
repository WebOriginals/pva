<template>
<div>
  <div class="modelReg__title">
    <h3>С возвращением!</h3>
    <p>{{userData.email}}</p>
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
const {AuthModalState} = useAllUtils();
const emit = defineEmits();
import { storeToRefs } from "pinia";
import { useUserStore } from '~/store/user.js';
const storeUser = useUserStore();
const { userData } = storeToRefs(storeUser);

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore();

const setPassword = () => {
  emit('getModalNeedState', AuthModalState.CodeFromEmail);
};
</script>

<style scoped lang="scss">

</style>