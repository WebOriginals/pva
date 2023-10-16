<template>
<div>
  <h1>service</h1>
  <p v-if="store.getIsLoggedIn">вы авторизованы это все вам!</p>
  <div v-else>
    <p>опа а ну-ка авторизуйся дружок</p>
    <UButton color="sky" variant="soft" @click="store.actionIsLoggedIn">{{ $t('logout') }}</UButton>
  </div>
</div>
</template>

<script setup>
definePageMeta({
	middleware: ['auth'],
});

import { useUserStore } from '~/store/user.js';

const store = useUserStore();
</script>

<style scoped></style>