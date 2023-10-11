<script setup>
defineProps({
  size: {
    type: String,
  }
})
const styleInput = {
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75',
  rounded: 'rounded-lg',
  placeholder: 'placeholder-sky-400 dark:placeholder-sky-700',
  icon: {
    base: 'flex-shrink-0 text-sky-400 dark:text-sky-700',
    size: {
      xxl: "h-6 w-11"
    },
  },
  variant: {
    none: 'bg-sky-50 border-2 border-transparent focus:border-sky-600 focus:border-2 focus:shadow-none dark:text-sky-700'
  },
  size: {
    md: "text-base",
    xl: "text-base",
    xxl: 'text-base',
  },
  gap: {
    xxl: 'gap-x-2.5'
  },
  padding: {
    xl: 'p-4 pr-11',
    xxl: 'p-5 pr-11'
  },
}
</script>

<template lang="pug">
UInput(icon='icon-pva__search' trailing :size='size', variant='none' :placeholder="$t('UiSearchServiceLabel')" :ui="styleInput")
</template>
