<template>
  <div class="pva-spoiler">
    <button 
        class="pva-spoiler__button"
        @click="toggleShowText"
        :class="{isOpen: isVisible}"
    >
      <span class="text">{{$rt(item.label)}}</span>
      <span class="icon icon-pva__plus"></span>
    </button>
    <div 
        class="pva-spoiler__content"
        ref="spoilerContent"
        :class="{isOpen: isVisible}"
    >
      <div>
        {{ $rt(item.content) }}
      </div>
    </div>
  </div>
</template>



<script setup>
name: "spoiler-card"
const props = defineProps({
    item: Object
});
const instance = getCurrentInstance();
const spoilerContent = ref(null);
const isVisible = ref(false);


const toggleShowText = () => {
    isVisible.value = !isVisible.value
};
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";
.pva-spoiler {
    @apply bg-white rounded-2xl;
    &:not(:last-child) {
        margin-bottom: 1.25rem;
    }
    &__button {
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include adaptiveValue(padding-top, 34, 24);
        @include adaptiveValue(padding-bottom, 34, 24);
        @include adaptiveValue(padding-right, 48, 24);
        @include adaptiveValue(padding-left, 48, 24);
        @apply text-black text-left group-hover:text-primary-500 font-semibold text-xl;
        transition: color 0.3s;
        & .icon {            
            @apply w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-800 dark:text-white flex shrink-0 items-center justify-center -my-1;
            transition: background 0.3s, transform 0.3s;
            &:before {
                font-size: .75rem;
                transition: color 0.3s;
            }
        }
        &.isOpen {
            @apply text-sky-600;
                & .icon {
                    @apply bg-primary-500 text-white;
                    transform: rotate(45deg)
                }
        }
    }
    &__content {
        @apply px-11 text-stone-500;
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s;
        @include adaptiveValue(padding-right, 48, 24);
        @include adaptiveValue(padding-left, 48, 24);
        &.isOpen {
            grid-template-rows: 1fr;
            @include adaptiveValue(padding-bottom, 34, 24);
            
        }
        & > div {
            overflow: hidden;
        }
    }
}
@media(hover: hover) {
    .pva-spoiler {
        &:hover {
            .pva-spoiler__button {
                @apply text-sky-600;
                & .icon {
                    @apply bg-primary-500 text-white;
                }
            }

        }
    }
}
</style>