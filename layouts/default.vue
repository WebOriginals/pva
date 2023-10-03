<template lang="pug">
.wrapper(:class="{ lock : lockScrollValue }")
  TheHeader(@lockScroll="lockScroll")
  main.page
      slot
  TheFooter

</template>

<script setup>
const lockScrollValue = ref(false)
const lockScroll = (value) => {
  lockScrollValue.value = value.value
}
</script>

<style  lang="scss">

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > main {
    flex: 1 1 auto;
  }

  &.lock{
    height: 100vh;
  }
}
</style>