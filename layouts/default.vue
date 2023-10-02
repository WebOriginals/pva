<template lang="pug">
.wrapper
  TheHeader
  main.page
      slot
  TheFooter

</template>

<script>

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
}
</style>