<template>
  <div class="counter">{{ counterValue }}</div>
</template>

<script setup>
const props = defineProps({
	number: {
		type: Number,
		required: true,
	},
});
const counterValue = ref(0);

onMounted(() => {
	let countNum = counterValue.value;

	const animation = setInterval(() => {
		if (countNum < props.number) {
			countNum += 1;
			counterValue.value = Math.floor(countNum);
		} else {
			clearInterval(animation);
			counterValue.value = props.number;
			// Добавьте здесь логику, которую вы хотите выполнить после завершения анимации
		}
	}, 300);
});
</script>

<style scoped lang="scss">
.counter {
	@apply flex justify-center items-center;
}
</style>
