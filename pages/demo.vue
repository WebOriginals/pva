<template>
  <div class="__container">
    <h1 class="text-3xl font-bold underline">{{Demo}}</h1>
    <section class="buttons pt-8 pb-8 bg-white rounded-lg">
      <div class="__container">
        <div class="grid grid-cols-1 gap-4 mb-8">
          <UiSearchService size="xxl"></UiSearchService>
          <UiSearchService size="xl"></UiSearchService>
          <UiSearchService size="md"></UiSearchService>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-8 w-2/3">
          <UiBtnBlue size="xxl" label="Button"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button"></UiBtnBlue>
          <UiBtnBlue size="xl" label="Button"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button"></UiBtnBlue>
          <UiBtnBlue size="lg" label="Button"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button"></UiBtnBlue>
          <UiBtnBlue size="md" icon="icon-pva__copy" label="Button"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__copy" label="Button"></UiBtnBlue>
          <UiBtnBlue size="sm" label="Button"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button"></UiBtnBlue>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBtnBlue size="sm" icon="icon-pva__plus" rounded="rounded-full"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__plus" rounded="rounded-full"></UiBtnBlue>
          <UiBtnBlue size="lg" icon="icon-pva__update"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__update"></UiBtnBlue>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-8 w-2/3">
          <UiBtnBlue size="xxl" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue size="xl" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue size="lg" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue size="md" icon="icon-pva__copy" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__copy" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue size="sm" label="Button" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="outline"></UiBtnBlue>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBtnBlue size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__plus" rounded="rounded-full" variant="outline"></UiBtnBlue>
          <UiBtnBlue size="lg" icon="icon-pva__update" variant="outline"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__update" variant="outline"></UiBtnBlue>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-8 w-2/3">
          <UiBtnBlue size="xxl" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue size="xl" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue size="lg" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue size="md" icon="icon-pva__copy" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__copy" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue size="sm" label="Button" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" label="Button" variant="soft"></UiBtnBlue>
        </div>
        <div class="grid grid-cols-4 gap-4 mb-8 w-52">
          <UiBtnBlue size="sm" icon="icon-pva__plus" rounded="rounded-full" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__plus" rounded="rounded-full" variant="soft"></UiBtnBlue>
          <UiBtnBlue size="lg" icon="icon-pva__update" variant="soft"></UiBtnBlue>
          <UiBtnBlue disabled="disabled" icon="icon-pva__update" variant="soft"></UiBtnBlue>
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
