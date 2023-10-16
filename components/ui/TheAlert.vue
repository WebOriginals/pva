<template>
	<div class="alert" :class="color">{{ label }}</div>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
});
</script>

<style scoped lang="scss">
.alert {
	@apply text-white text-center py-1 px-2 absolute bottom-0 left-0 w-full translate-y-full;
}
</style>
