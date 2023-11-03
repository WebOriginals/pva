<template>
  <UModal v-model="storeModal.getIsOpenModal"  class="modelReg"
          :ui="{width: 'sm:max-w-[608px]', rounded: 'rounded-lg lg:rounded-2xl',overlay:{background:'bg-stone-950/75 dark:bg-stone-950/75'},container:'items-center'}">
    <div class="modelReg__wrapper">
      <slot name="buttonClose"/>
      <slot name="body"/>
    </div>
  </UModal>
</template>

<script setup>
import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()
</script>

<style lang="scss">
.modelReg {

  &__wrapper {
    @apply grid py-12 px-6  relative lg:px-16 lg:rounded-2xl;
  }

  &__close {
    @apply absolute top-4 right-4 lg:top-6 lg:right-6 ;
  }

  &__title {
    @apply grid justify-items-center text-center mb-8 gap-4;
  }

  &__alert{
    @apply py-4 px-5 bg-red-200 rounded-lg text-red-600 w-full mb-4;
  }

  &__alternative {
    @apply flex justify-center relative mb-7;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #CDE2FF;
      top: 50%;
      left: 0;
    }

    span {
      @apply bg-white text-sky-400 z-[2] px-2 dark:bg-gray-900 text-center;
    }
  }

  &__form {
    @apply grid gap-4;

    & .passwordRequirements {
      @apply mb-1 grid text-xs gap-2;
    }

    & .btn {
      @apply mt-4;
    }
  }

  &__grid-btn {
    @apply grid gap-4 sm:grid-cols-2 mt-4;
  }

  &__btn {
    & .btn {
      @apply w-full;
    }
  }
}
</style>