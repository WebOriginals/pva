<script setup lang="ts">
const {locales, locale, setLocale} = useI18n();

const currLoc = computed({
  get() {
    return locales.value.find(el => el.code == locale.value)
  },
  set(v) {
    setLocale(v.code)
  }
})

const selectStyle = {
  container: "z-20",
  width: "w-full",
  height: "max-h-60",
  base: "relative focus:outline-none overflow-y-auto scroll-py-1",
  background: "bg-yellow-500 dark:bg-gray-800",
  shadow: "shadow-lg",
  rounded: "rounded-md",
  padding: "p-1",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  input: "block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none",
  option: {
    base: "cursor-default select-none relative flex items-center justify-between gap-1",
    rounded: "rounded-md",
    padding: "px-2 py-1.5",
    size: "text-sm",
    color: "text-gray-900 dark:text-white",
    container: "flex items-center gap-2 min-w-0",
    active: "bg-gray-100 dark:bg-gray-900",
    inactive: "",
    selected: "pe-7",
    disabled: "cursor-not-allowed opacity-50",
    empty: "text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",
    icon: {
      base: "flex-shrink-0 h-4 w-4",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-400 dark:text-gray-500"
    },

  },

}

</script>
<template lang="pug">
USelectMenu( v-model="currLoc" :options="locales" variant="none" :trailing="true" trailingIcon="icon-pva__arrow_down" :selectedIcon="null")

  template(#label)
    img(:src="currLoc.flag" :alt="currLoc.name")
    span {{ currLoc.name }}


  template(#option="{ option: lacale }")
    img(:src="lacale.flag" :alt="lacale.name")
    span {{typeof lacale === 'object' ? lacale.name : lacale}}
</template>

<style lang="scss">

.langSelect {
  @apply rounded-lg;

  .icon-pva__arrow_down{
    font-size: 4px;
    @apply text-black flex items-center justify-center dark:text-white;
  }

  &[data-headlessui-state="open"]{
    @apply bg-sky-50 dark:bg-sky-700;

    .icon-pva__arrow_down{
      @apply -scale-y-100;
    }
  }
}
</style>