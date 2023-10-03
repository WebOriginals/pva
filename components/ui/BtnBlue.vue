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

const solid = {
  disabled: "disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100 dark:disabled:bg-sky-300 ",
  dark: "dark:text-red dark:bg-{color}-950",
  darkFocus: "dark:focus-visible:outline-{color}-400",
  darkHover: "dark:hover:bg-{color}-500",
  light: "shadow-sm text-white bg-{color}-500",
  lightFocus: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500",
  lightHover: "hover:bg-{color}-600",
}
const outline = {
  disabled: "disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100 dark:disabled:bg-sky-300 dark:disabled:ring-2 dark:disabled:ring-sky-300 disabled:ring-2 disabled:ring-sky-300 dark:disabled:text-sky-400",
  dark: "dark:text-sky-950 dark:ring-sky-950",
  darkFocus: "dark:focus-visible:ring-{color}-400",
  darkHover: "dark:hover:bg-{color}-500 dark:hover:text-white dark:hover:ring-sky-500",
  light: "ring-2 ring-inset ring-current text-sky-500",
  lightFocus: "focus-visible:ring-2 focus-visible:ring-sky-500",
  lightHover: "hover:ring-sky-600 hover:bg-sky-600 hover:text-white",
}
const soft = {
  disabled: "dark:disabled:bg-transparent disabled:ring-sky-300 dark:disabled:text-sky-400 disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100 dark:disabled:bg-sky-300 ",
  dark: "dark:text-white dark:bg-sky-400",
  darkFocus: "dark:focus-visible:ring-sky-400",
  darkHover: "dark:hover:bg-{color}-500 dark:hover:text-white",
  light: "text-sky-500",
  lightFocus: "focus-visible:ring-2 focus-visible:ring-sky-500",
  lightHover: "hover:bg-sky-100 hover:text-sky-600",
}
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
  variant: {
    solid: `${solid.light} ${solid.lightFocus} ${solid.lightHover} ${solid.dark} ${solid.darkFocus} ${solid.darkHover} ${solid.disabled}`,
    outline: `${outline.light} ${outline.lightFocus} ${outline.lightHover} ${outline.dark} ${outline.darkFocus} ${outline.darkHover} ${outline.disabled}`,
    soft: `${soft.light} ${soft.lightFocus} ${soft.lightHover} ${soft.dark} ${soft.darkFocus} ${soft.darkHover} ${soft.disabled}`,
  },
}
</script>
