<template>

</template>

<script setup>
import apiAuth from '~/components/api/AuthAPI'

const route = useRoute()
const TOKEN = ref('')
if(route.query.token) TOKEN.value = route.query.token
const params = {
  token: TOKEN.value
}
const sendTokenResult = await apiAuth.sendToken(params);

if (!sendTokenResult.error.value) {
  const token = sendTokenResult.data.value.token
  localStorage.setItem("authToken", token)
}
</script>

<style scoped lang="scss">

</style>