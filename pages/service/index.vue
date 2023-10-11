<template lang="pug">
h1 service
p(v-if="store.getIsLoggedIn" ) вы авторизованы это все вам!
div(v-else)
  p опа а ну-ка авторизуйся дружок
  UButton(color="sky" variant="soft" @click="store.actionIsLoggedIn"  ) {{ $t('logout') }}
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})

import { useUserStore } from "~/store/user.js";

const store = useUserStore()

</script>

<style scoped>

</style>