<template>
  <div class="__container">
    <h1 class="text-3xl font-bold underline">{{Demo}}</h1>
    <section class="buttons pt-8 pb-8 bg-white rounded-lg">
      <div class="__container">
        <div class="grid grid-cols-1 gap-4 mb-8">
          <ServiceServicesSearchByProduct size="xxl"></ServiceServicesSearchByProduct>
          <ServiceServicesSearchByProduct size="xl"></ServiceServicesSearchByProduct>
          <ServiceServicesSearchByProduct size="md"></ServiceServicesSearchByProduct>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-8 w-2/3">
          <UiBaseButton size="xxl" label="Button"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button"></UiBaseButton>
          <UiBaseButton size="xl" label="Button"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button"></UiBaseButton>
          <UiBaseButton size="lg" label="Button"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button"></UiBaseButton>
          <UiBaseButton size="md" icon="icon-pva__copy" label="Button"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__copy" label="Button"></UiBaseButton>
          <UiBaseButton size="sm" label="Button"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button"></UiBaseButton>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBaseButton size="sm" icon="icon-pva__plus" rounded="rounded-full"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__plus" rounded="rounded-full"></UiBaseButton>
          <UiBaseButton size="lg" icon="icon-pva__update"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__update"></UiBaseButton>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-8 w-2/3">
          <UiBaseButton size="xxl" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton size="xl" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton size="lg" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton size="md" icon="icon-pva__copy" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__copy" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton size="sm" label="Button" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="outline"></UiBaseButton>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBaseButton size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__plus" rounded="rounded-full" variant="outline"></UiBaseButton>
          <UiBaseButton size="lg" icon="icon-pva__update" variant="outline"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__update" variant="outline"></UiBaseButton>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-8 w-2/3">
          <UiBaseButton size="xxl" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton size="xl" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton size="lg" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton size="md" icon="icon-pva__copy" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__copy" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton size="sm" label="Button" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" label="Button" variant="soft"></UiBaseButton>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBaseButton size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__plus" rounded="rounded-full" variant="soft"></UiBaseButton>
          <UiBaseButton size="lg" icon="icon-pva__update" variant="soft"></UiBaseButton>
          <UiBaseButton disabled="disabled" icon="icon-pva__update" variant="soft"></UiBaseButton>
        </div>
      </div>
    </section>
    <section class="accordion py-32">
      <UiTheAccordion></UiTheAccordion>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
	title: 'My App',
	meta: [{ name: 'description', content: 'My amazing site.' }],
});
const localePath = useLocalePath();
const { data } = await useFetch('/api/hello');
</script>

<style scoped></style>
