<template lang="pug">
UButton(:ui="btnStyle" :label="props.label" :size="props.size" :icon="props.icon" :variant="props.variant")
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  size: {
    type: String,
    required: true,
  },
  icon:{
    type: String,
    default: null,
  },
  rounded: {
    type: String,
    default: "rounded-lg",
  },
  variant: {
    type: String,
    default: "solid",
  }
})

const btnStyle = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed justify-center",
  size: {
    sm: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
    xxl: 'text-base'
  },
  padding: {
    sm: 'p-0.5',
    md: 'p-1',
    lg: 'p-2',
    xl: 'p-3',
    xxl: 'p-4'
  },
  rounded: props.rounded,
  font: 'font-semibold',
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-sky-300 dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-sky-300 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-sky-300 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-sky-3000 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",

    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-sky-300 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-sky-300 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100  dark:bg-{color}-950 dark:hover:bg-{color}-500 dark:disabled:bg-sky-300 dark:disabled:text-sky-400 dark:disabled:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-2 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:ring-sky-600 hover:bg-sky-600 hover:text-white disabled:ring-transparent disabled:text-sky-400 disabled:bg-sky-300 dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: " text-{color}-500 dark:text-{color}-400  hover:bg-sky-100 hover:text-sky-600 disabled:ring-transparent disabled:text-sky-400 disabled:bg-sky-300 dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
  },
}
</script>
