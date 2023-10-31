<template>
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
