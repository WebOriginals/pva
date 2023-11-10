<template>
  <template v-if="props.size === 'md'">
    <div class="counter">
      <UiBaseButton
          size="lg"
          icon="icon-pva__minus"
          variant="soft"
          @click.stop="dec()"
      />

<!--      <div class="counter__input">-->
<!--&lt;!&ndash;        <input type="number" v-model="count">&ndash;&gt;-->
<!--        <span class="currency-symbol"> {{count}} {{ $t('pc') }}</span>-->
<!--      </div>-->

      <UiBaseButton
          size="lg"
          icon="icon-pva__plus"
          variant="soft"
          @click.stop="inc()"
      />
    </div>
  </template>
  <template v-else-if="props.size === 'sm'">
    <div class="counter counter-sm">
      <UiBaseButton
          size="2xs"
          rounded="rounded-full"
          icon="icon-pva__minus"
          variant="soft"
          @click.stop="dec()"
      />

      <div class="counter__input">
<!--        <input type="number" v-model="count">-->
        <span class="currency-symbol"> {{count}} {{ $t('pc') }}</span>
      </div>

      <UiBaseButton
          size="2xs"
          rounded="rounded-full"
          icon="icon-pva__plus"
          variant="soft"
          @click.stop="inc()"
      />
    </div>
  </template>

</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    required: true,
    default: "md"
  },
});
import { useCounter } from '@vueuse/core'
const { count, inc, dec, set, reset } = useCounter(1, { min: 1, max: 10 })
</script>

<style scoped lang="scss">
.counter{
  @apply border border-sky-400 p-2 rounded-lg bg-white flex gap-4 items-center ;

  &-sm{
    @apply rounded-full;
  }

  &__input{
    @apply w-11 relative flex justify-center;

    input{
      @apply w-11 ;
    }

    .currency-symbol{
      //@apply absolute right-0 top-0;
    }
  }
}
</style>