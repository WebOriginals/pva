<template lang="pug">
.lds-dual-ring
</template>

<script setup>

</script>

<style scoped lang="scss">
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #3864FF;
  border-color: #3864FF transparent #3864FF transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
</style>