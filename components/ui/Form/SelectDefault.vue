<template>
  <USelectMenu 
    v-model="selected" 
    :options="props.items" 
    :placeholder="props.placeholder"
    :ui="buttonStyle"
    :uiMenu ="menuStyle"
  >
    <template v-if="selected !== '' && avatar === true" #label>
      <img :src="selected.icon.src" class="-m-px" alt="">
      {{ selected.label }}
    </template>
    <template #option="{ option }">
      <span
        class="flex-shrink-0"
      >
        <img :src="option.icon.src" alt="">
      </span>
      <span class="truncate leading-none">{{ option.label }}</span>
    </template>
  </USelectMenu>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "Выберите значение"
  },
  items: {
    type: Array,
    requered: true
  },
  avatar: {
    type: Boolean,
    default: false,
  }
})
const selected = ref('')
const menuStyle = {
  padding: 'pt-0',
  option: {
    padding: 'p-4',
    base: 'cursor-pointer',
  }
}
const buttonStyle = {  
  wrapper: "default-select",
  padding: {
    "2xs": "p-4",
    "xs": "p-4",
    "sm": "p-4",
    "md": "p-4",
    "lg": "p-4",
    "xl": "p-4"
  },
}
const log = () => {
  console.log(selected.value);
}

</script>

<style lang="scss">
.default-select {
  & button {
    cursor: pointer;
  }
}
</style>