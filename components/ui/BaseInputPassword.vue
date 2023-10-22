<template>
  <div class="wrapper-input">
    <div class="text-field text-field_floating">
      <input
          class="text-field__input"
          :class="{'text-field__input-error': error}"
          :type="typeInput"
          :placeholder="props.placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)">
      <label
          class="text-field__label"
          for="email"
      >{{ props.label }}</label>

      <UButton class='text-field__showText'
               v-if="typeInput == 'password'"
               icon="icon-pva__eye_off"
               size="sm"
               color="primary"
               square
               variant="ghost"
               type="password"
               @click.stop="switchVisibility"/>
      <UButton class='text-field__showText'
               v-else
               icon="icon-pva__eye_on"
               size="sm" color="primary"
               square
               variant="ghost"
               type="password"
               @click.stop="switchVisibility"/>
    </div>
    <div class="wrapper-input__mas" v-if="error && isError">
      <IconTheErrorMas></IconTheErrorMas>
      <span class="text-xs text-red-500">{{ errors[0].$message }}</span>
    </div>
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
  label: {
    type: String,
    required: true,
  },
  error:{
    type: String,
  },
  errors:{
    type: Array,
    default: [],
  },
  isError:{
    type: Boolean,
    default: true,
  }
});

defineEmits(['update:modelValue']);

const typeInput = ref('password');
const switchVisibility = () => {
  // eslint-disable-next-line no-return-assign
  return typeInput.value = (typeInput.value === 'password' ? 'text' : 'password');
};
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

    &-error{
      @apply border-red-500  focus:border-red-500 ;
    }
  }

  &_floating {
    @apply relative;

    & .text-field__input {
      @apply h-14 px-5 py-4 text-base pr-12;

      &::placeholder {
        @apply text-transparent;
      }

      &:focus, &:not(:placeholder-shown) {
        @apply pt-7 pb-2.5;
      }

      &:focus ~ .text-field__label, &:not(:placeholder-shown) ~ .text-field__label {
        @apply opacity-60 scale-75 -translate-y-2.5 -translate-x-3.5;
      }
    }

    & .text-field__label {
      @apply text-sky-400 px-5 py-4 absolute top-0 left-0 h-full pointer-events-none border-transparent transition delay-150 duration-300 ease-in-out;
    }

    & .text-field__showText {
      @apply absolute top-[50%] right-3 -translate-y-2/4;
    }
  }
}

.wrapper-input{
  &__mas{
    @apply flex items-center gap-2 mt-1.5;
  }
}
</style>