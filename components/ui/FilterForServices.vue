<script setup>
const {t} = useI18n();
const people = computed(() => {
  return [
    {id: 1, label: t('services.filter.popularity')},
    {id: 2, label: t('services.filter.cheaper')},
    {id: 3, label: t('services.filter.expensive')},
    {id: 4, label: t('services.filter.count')},
  ]
})
const selected = ref(people.value[0])
const style = {
  "wrapper": "relative",
  "base": "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  "rounded": "rounded-md",
  "placeholder": "text-gray-900 dark:text-white",
  "size": {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base",
    "2xl": "text-base"
  },
  "gap": {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5",
    "2xl": "gap-x-2.5"
  },
  "padding": {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5",
    "2xl": "px-4 py-4"
  },
  "leading": {
    "padding": {
      "2xs": "ps-7",
      "xs": "ps-8",
      "sm": "ps-9",
      "md": "ps-10",
      "lg": "ps-11",
      "xl": "ps-12",
      "2xl": "ps-12"
    }
  },
  "trailing": {
    "padding": {
      "2xs": "pe-7",
      "xs": "pe-8",
      "sm": "pe-9",
      "md": "pe-10",
      "lg": "pe-11",
      "xl": "pe-12",
      "2xl": "pe-12"
    }
  },
  "color": {
    "white": {
      "outline": "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    },
    "gray": {
      "outline": "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
    }
  },
  "variant": {
    "outline": "shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",
    "none": "bg-transparent focus:ring-0 focus:shadow-none"
  },
  "icon": {
    "base": "flex-shrink-0 text-gray-400 dark:text-gray-500",
    "color": "text-{color}-500 dark:text-{color}-400",
    "size": {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6",
      "2xl": "h-8 w-8"
    },
    "leading": {
      "wrapper": "absolute inset-y-0 start-0 flex items-center",
      "pointer": "pointer-events-none",
      "padding": {
        "2xs": "ps-2",
        "xs": "ps-2.5",
        "sm": "ps-2.5",
        "md": "ps-3",
        "lg": "ps-3.5",
        "xl": "ps-3.5",
        "2xl": "ps-3.5"
      }
    },
    "trailing": {
      "wrapper": "absolute inset-y-0 end-0 flex items-center",
      "pointer": "pointer-events-none",
      "padding": {
        "2xs": "pe-2",
        "xs": "pe-2.5",
        "sm": "pe-2.5",
        "md": "pe-3",
        "lg": "pe-3.5",
        "xl": "pe-3.5",
        "2xl": "pe-3.5"
      }
    }
  },
  "default": {
    "size": "sm",
    "color": "white",
    "variant": "outline",
    "loadingIcon": "i-heroicons-arrow-path-20-solid",
    "trailingIcon": "i-heroicons-chevron-down-20-solid"
  }
}

const styleMenu = {
  width: "w-56",
}

const { width } = useGetWidth()
</script>

<template>
  <template v-if="width > 640">
    <USelectMenu
        :ui="style"
        class="filter"
        v-model="selected"
        :options="people"
        size="2xl"
        trailingIcon="icon-pva__arrow_down"
    />
  </template>
  <template v-else>
    <USelectMenu v-model="selected" :options="people" :ui-menu='{width:"w-56" }'>
      <UiBaseButton size="xl" icon="icon-pva__filter" variant="soft" />
    </USelectMenu>
  </template>

</template>

<style lang="scss">
.filter {
  @apply rounded-lg h-[56px];

  .icon-pva__arrow_down {
    font-size: 4px;
    @apply text-black flex items-center justify-center dark:text-white;
  }

  &[data-headlessui-state='open'] {
    @apply bg-sky-50 dark:bg-sky-700;

    .icon-pva__arrow_down {
      @apply -scale-y-100;
    }
  }
}
</style>