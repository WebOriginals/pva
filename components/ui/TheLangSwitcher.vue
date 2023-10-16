//Documentation for SelectMenu https://ui.nuxt.com/forms/select-menu
<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
const currLoc = computed({
	get() {
		return locales.value.find((el) => el.code == locale.value);
	},
	set(v) {
		setLocale(v.code);
	},
});
</script>
<template>
	<USelectMenu
		v-model="currLoc"
		:options="locales"
		variant="none"
		:trailing="true"
		trailingIcon="icon-pva__arrow_down"
		:selectedIcon="null"
	>
		<template #label>
			<img :src="currLoc.flag" :alt="currLoc.name" />
			<span>{{ currLoc.name }}</span>
		</template>
		<template #option="{ option: lacale }">
			<img :src="lacale.flag" :alt="lacale.name" />
			<span>{{ typeof lacale === 'object' ? lacale.name : lacale }}</span>
		</template>
	</USelectMenu>
</template>

<style lang="scss">
.langSelect {
	@apply rounded-lg;

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
