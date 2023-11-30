<template>

</template>

<script setup>
import apiAuth from '~/components/api/AuthAPI'

const route = useRoute()
const TOKEN = ref('')
if(route.query.token) {
  console.log(route.query.token)
  TOKEN.value = route.query.token
  const params = {
    token: TOKEN.value
  }
  console.log(params)

  const sendTokenResult = await apiAuth.sendToken(params);
  console.log(sendTokenResult)

  if (!sendTokenResult.error) {
    console.log(2323)
    const token = sendTokenResult.data.value.token
    localStorage.setItem("authToken", token)
  }
}

</script>

<style scoped lang="scss">

</style>