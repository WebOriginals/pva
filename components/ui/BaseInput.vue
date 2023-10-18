<template>
  <div class="text-field text-field_floating">
    <input
        class="text-field__input"
        :type="props.typeInput"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
    <label
        class="text-field__label"
        for="email"
    >{{props.label}}</label>
  </div>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: true,
	},
	label:{
		type: String,
		required: true,
	},
  typeInput:{
    type: String,
    required: true,
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss">
.text-field {


  &__label {
    @apply block;
  }

  &__input {
    @apply block w-full h-14 py-2.5 px-5 text-black bg-white border border-sky-200 rounded-lg transition delay-150 duration-300 ease-in-out ;

    &::placeholder {
      @apply text-sky-400;
    }

    &:focus {
      @apply border-sky-600 outline-none;
    }
  }

  &_floating {
    @apply relative;

    & .text-field__input {
      @apply h-14 px-5 py-4 text-base;

      &::placeholder {
        @apply text-transparent;
      }

      &:focus, &:not(:placeholder-shown){
        @apply pt-7 pb-2.5;
      }

      &:focus~.text-field__label, &:not(:placeholder-shown)~.text-field__label{
        @apply opacity-60 scale-75 -translate-y-2.5 -translate-x-3.5;
      }
    }

    & .text-field__label {
      @apply text-sky-400 px-5 py-4 absolute top-0 left-0 h-full pointer-events-none border-transparent transition delay-150 duration-300 ease-in-out;
    }
  }
}
</style>