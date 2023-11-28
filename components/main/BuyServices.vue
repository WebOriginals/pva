<template>
	<section class="getNumber">
		<div class="getNumber__container">
			<h2 v-html="$t('main.getNumber.titleH2')"></h2>
			<div class="getNumber__grid getNumber-grid">
				<div class="getNumber-grid__service getNumber-grid-service">
          <ServiceServicesSearchByProduct
              class="search"
              size="xxl"
              v-model="searchValue"
          ></ServiceServicesSearchByProduct>
					<div class="getNumber-grid-service__wrapper scrollCust">
						<div class="services">
							<p v-if="pending">"идет загрузка"</p>
							<template v-else>
                <ServiceCardWithCountryAndNumber
                    v-for="account in filteredItems"
                    :key="account.id"
                    :account="account"
                />
							</template>
						</div>
					</div>
				</div>
				<div class="getNumber-grid__description">
					<h4>{{ $t('main.getNumber.titleH3') }}</h4>
					<div class="text" v-html="$t('main.getNumber.description')"></div>
					<UiBaseButton
						class="btn"
						size="xxl"
						:label="$t('main.getNumber.btn')"
						@click="redirectServices"
					></UiBaseButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const localeRoute = useLocaleRoute();
const { pending, data: accounts } = await useLazyFetch(
	'/api/mainAccounts/accounts',
	{
		transform: (_accounts) => _accounts.data,
	}
);

const searchValue = ref('');

const filteredItems = computed(() => {
	return [...accounts.value].filter((item) =>
		item.servName.toLowerCase().includes(searchValue.value.toLowerCase())
	);
});

const redirectServices = () => {
	const route = localeRoute({ name: 'service' });
	if (route) {
		return navigateTo(route.fullPath);
	}
};
</script>

<style scoped lang="scss">
@import 'assets/css/mixins.scss';

.getNumber {
	@include adaptiveValue(padding-top, 160, 96);
	@include adaptiveValue(padding-bottom, 80, 48);
	h2 {
		@apply text-center;
	}

	&-grid {
		@include adaptiveValue(padding-top, 64, 32);
		@apply grid lg:grid-cols-2 gap-16 2xl:gap-32;

		&-service {
			@apply bg-white rounded-2xl;

			.search {
				@apply my-3 mx-4 md:my-6 md:mx-8;
			}

			&__wrapper {
				@apply pt-3 pb-6 pl-4 pr-2 mr-2 overflow-y-auto max-h-[340px] border-t border-sky-200 md:pl-8 md:pt-6 md:pb-6 md:pr-4 md:mr-4 md:max-h-[616px];

				.services {
					@apply grid gap-2;
				}
			}
		}

		&__description {
			@apply grid content-center;

			.text {
				@apply pb-8 pt-6 grid gap-4;
			}

			.btn {
				@apply min-w-[240px] w-full lg:w-fit;
			}
		}
	}
}
</style>
