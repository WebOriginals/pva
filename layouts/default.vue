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
body{
  background: #EEF5FF;
}
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