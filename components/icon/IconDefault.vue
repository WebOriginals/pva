<template>
  <object type="image/svg+xml" :data="`/icons/${props.name}.svg`" class="icon"></object>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>