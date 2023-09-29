<template>
  <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700"
               :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }">
        <template #leading>
          <div class="w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1">
            <UIcon :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900"/>
          </div>
        </template>
        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
        <template #trailing>
          <UIcon name="i-heroicons-chevron-right-20-solid"
                 class="w-5 h-5 ms-auto transform transition-transform duration-200" :class="[open && 'rotate-90']"/>
        </template>
      </UButton>
    </template>
  </UAccordion>
</template>

<script>
export default {
  name: "gh"
}
</script>

<style scoped>

</style>