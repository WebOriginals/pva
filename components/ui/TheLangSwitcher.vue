<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const currLoc = computed({
  get(){
    return locales.value.find(el => el.code == locale.value)
  },
  set(v){
    setLocale(v.code)
  }
})

const selectStyle = {
  default: {
    selectedIcon: null
  }
}

</script>
<template lang="pug">
USelectMenu( v-model="currLoc" :options="locales" variant="none" :ui="selectStyle")

  template(#label)
    img(:src="currLoc.flag" :alt="currLoc.name")
    span {{ currLoc.name }}


  template(#option="{ option: lacale }")
    img(:src="lacale.flag" :alt="lacale.name")
    span {{typeof lacale === 'object' ? lacale.name : lacale}}

</template>

<style scoped lang="scss">


</style>