<template>
<div>
  <div class="modelReg__title">
    <h3>{{$t('modal.authModalState.WelcomeBackInGoogle.title')}}</h3>
    <p>{{form.email}}</p>
    <p>{{$t('modal.authModalState.WelcomeBackInGoogle.subTitle')}}</p>
  </div>

  <UButton :label="$t('modal.authModalState.WelcomeBackInGoogle.googleBtn')" color="black" size="xl" block class="mb-6">
    <template #leading>
      <UAvatar src="_nuxt/assets/img/icons_google.svg" size="xs"/>
    </template>
  </UButton>

  <div class="text-center">
    <UButton
        color="primary"
        variant="link"
        :label="$t('modal.authModalState.WelcomeBackInGoogle.btn')"
        @click="setPassword"/>
  </div>
</div>
</template>

<script setup>
import {authModalState} from "~/utils/authModalState";
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

const setPassword = () => {
  emit('changeModalNeedState', authModalState.CodeFromEmail);
};
</script>