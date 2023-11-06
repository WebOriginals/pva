<template>
<section class="services">
  <div class="services__container">
    <div class="service">
      <div class="service__head">

      </div>
      <div class="service__body"></div>
    </div>
    <div class="my-number">
      <h4 class="my-number__title">{{ $t('services.myNumber.title') }}</h4>
      <div class="my-number__body">
        <template v-if="store.getIsLoggedIn">
          <template v-if="false">
            <p > {{ $t('services.myNumber.authorized') }}</p>
          </template>
          <template v-else>
            ю
          </template>

        </template>
        <template v-else>
          <p>{{ $t('services.myNumber.unauthorized') }}</p>
          <UiBaseButton block class="my-number__btnLogout" size="lg" :label="$t('logout')" variant="soft" @click="storeModal.actionIsOpenModal"></UiBaseButton>
        </template>
      </div>
    </div>

  </div>
</section>
</template>

<script setup>
definePageMeta({
	middleware: ['auth'],
});

import {useModalStore} from "~/store/modal";
const storeModal = useModalStore()

import { useUserStore } from '~/store/user.js';
const store = useUserStore();
</script>

<style scoped lang="scss">
.my-number{

  &__title{
    @apply mb-8;
  }

  &__body{
    @apply bg-white py-20 px-52 text-center rounded-2xl grid justify-items-center;
  }

  &__btnLogout{
    @apply mt-6 w-[160px] text-center;
  }

}
</style>