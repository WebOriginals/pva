<template>
  <div>
    <h1 v-html="$t('Title2')"></h1>
    <NuxtLink :to="localePath('/')">{{ $t('Title1') }}</NuxtLink>
  </div>
</template>

<script setup>
const { t } = useI18n();
useHead({
	title: t('Title2'),
	meta: [{ name: 'description', content: 'My amazing site2.' }],
});

const localePath = useLocalePath();
</script>

<style scoped></style>
