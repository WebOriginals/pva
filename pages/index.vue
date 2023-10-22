<template>
  <div class="grid gap-4 grid-cols-2">
    <UiBaseButton size="xxl" label="смена пароля" @click="storeModal.actionIsOpenModalChangePassword"></UiBaseButton>
    <UiBaseButton size="xxl" label="смена пароля успешно"></UiBaseButton>
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
