<template>
	<section class="question">
		<div class="question__container">
			<h2>{{ $t('main.question.title') }}</h2>
			<UiTheAccordion
				:question-items="$tm('main.question.questionItems')"
			></UiTheAccordion>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.question {
	@include adaptiveValue(padding-top, 60, 30);
	@include adaptiveValue(padding-bottom, 60, 30);

	h2 {
		@include adaptiveValue(padding-bottom, 64, 32);
		text-align: center;
	}
}
</style>
