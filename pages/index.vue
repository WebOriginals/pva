<template>
  <div class="grid gap-4 grid-cols-7">
    <UiBaseButton size="xxl" label="смена пароля" @click="storeModal.actionIsOpenModalChangePassword"></UiBaseButton>
    <UiBaseButton size="xxl" label="востановление ппароля" @click="storeModal.actionIsOpenModalRestorePassword"></UiBaseButton>
    <UiBaseButton size="xxl" label="войти" @click="storeModal.actionIsOpenModalLogin"></UiBaseButton>
    <UiBaseButton size="xxl" label="регистрация" @click="storeModal.actionIsOpenModalRegistration"></UiBaseButton>
    <UiBaseButton size="xxl" label="2fa" @click="storeModal.actionIsOpenModalTwoFA"></UiBaseButton>
    <UiBaseButton size="xxl" label="С возвращением!" @click="storeModal.actionIsOpenModalWelcomeBackInGoogle"></UiBaseButton>
    <UiBaseButton size="xxl" label="код на посте" @click="storeModal.actionIsOpenModalCodeFromEmail"></UiBaseButton>
    <UiBaseButton size="xxl" label="главная " @click="storeModal.actionIsOpenModalAuthorization"></UiBaseButton>
  </div>
  <MainTheFirst></MainTheFirst>
  <MainGetNumber></MainGetNumber>
  <MainTheSteps></MainTheSteps>
  <MainTheNumberSales></MainTheNumberSales>
  <MainTheNews></MainTheNews>
  <MainTheQuestion></MainTheQuestion>

</template>

<script setup lang="ts">
useHead({
	title: 'PVA',
	meta: [{ name: 'description', content: 'My amazing site.' }],
});

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()
</script>

<style scoped></style>
