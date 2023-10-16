//Documentation for Accordion https://ui.nuxt.com/elements/accordion
<template>
	<UAccordion :items="props.questionItems" :ui="accordionStyle">
		<template #default="{ item, index, open }">
			<UButton
				class="accordion-title flex justify-between group hover:bg-transparent p-0 hover:outline-none dark:hover:bg-transparent"
				variant="ghost"
				:ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
			>
				<span class="text-black text-left group-hover:text-primary-500 font-semibold text-xl">{{ $rt(item.label) }}</span>
				<template #trailing>
					<div class="w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-800 flex shrink-0 items-center justify-center -my-1 group-hover:bg-primary-500">
						<UIcon
							class="w-4 h-4 text-primary-500 transform transition-transform duration-200 origin-center group-hover:text-white dark:text-white"
							:name="$rt(item.icon)"
							:class="[open &amp;&amp; 'origin-center rotate-45 ']"
						></UIcon>
					</div>
				</template>
			</UButton>
		</template>
		<template #item="{ item }">
			<div class="accordion-content">
				<p class="text-stone-500 dark:text-stone-500 pt-8 text-base">
					{{ $rt(item.content) }}
				</p>
			</div>
		</template>
	</UAccordion>
</template>

<script setup>
const props = defineProps({
	questionItems: {
		type: Array,
		required: true,
	},
});

const accordionStyle = {
	wrapper: 'w-full grid grid-cols-1 gap-4',
	wrapperItem: 'blocWr',
};
</script>

<style lang="scss">
.blocWr {
	padding: 32px 48px 32px 48px;
	background: #fff;
	border-radius: 16px;
}

.accordion-title {
	width: 100%;

	&:focus,
	&:focus-visible {
		--tw-ring-opacity: 0;
		outline: none !important;
	}

	&:hover {
		outline: none !important;
	}
}
</style>
