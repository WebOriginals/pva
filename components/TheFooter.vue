<template>
	<footer class="footer">
		<div class="footer__container" v-if="!store.getIsLoggedIn">
      <div class="footer__callToAction">
        <p>
          Регистрируйтесь в соцсетях, на торговых площадках, биржах и
          онлайн-сервисах без спама и разглашения личных данных.
        </p>
        <UiBaseButton size="xxl" label="Получить номер" variant="soft"></UiBaseButton>
      </div>
		</div>
		<div class="footer__top">
			<div class="footer__container top">
				<div class="footer-top-mobile">
					<NuxtLink class="footer-logo" :to="localePath('/')">
						<IconTheLogoLight></IconTheLogoLight>
					</NuxtLink>
					<ul
						class="footer-top-mobile__socialMedia footer-top-mobile-socialMedia"
					>
						<NuxtLink
							class="footer-top-mobile-socialMedia__link"
							:to="localePath('/')"
						>
							<IconTheVK></IconTheVK>
						</NuxtLink>
						<NuxtLink
							class="footer-top-mobile-socialMedia__link"
							:to="localePath('/')"
						>
							<IconTheInstagram></IconTheInstagram>
						</NuxtLink>
						<NuxtLink
							class="footer-top-mobile-socialMedia__link"
							:to="localePath('/')"
						>
							<IconTheFB></IconTheFB>
						</NuxtLink>
						<NuxtLink
							class="footer-top-mobile-socialMedia__link"
							:to="localePath('/')"
						>
							<IconTheTW></IconTheTW>
						</NuxtLink>
					</ul>
				</div>
				<nav class="footer__nav footer-nav">
					<NuxtLink
						class="footer-nav__link"
						:to="localePath('/services')"
						v-if="store.getIsLoggedIn"
						>{{ $t('nav.service') }}</NuxtLink
					>
					<NuxtLink class="footer-nav__link" :to="localePath('/freeNumbers')">{{
						$t('nav.freeNumbers')
					}}</NuxtLink>
					<NuxtLink class="footer-nav__link" :to="localePath('/news')">{{
						$t('nav.news')
					}}</NuxtLink>
					<NuxtLink class="footer-nav__link" :to="localePath('/api')">{{
						$t('nav.api')
					}}</NuxtLink>
					<NuxtLink class="footer-nav__link" :to="localePath('/about')">{{
						$t('nav.about')
					}}</NuxtLink>
				</nav>
				<ul class="footer__socialMedia footer-socialMedia">
					<NuxtLink class="footer-socialMedia__link" :to="localePath('/')">
						<IconTheVK></IconTheVK>
					</NuxtLink>
					<NuxtLink class="footer-socialMedia__link" :to="localePath('/')">
						<IconTheInstagram></IconTheInstagram>
					</NuxtLink>
					<NuxtLink class="footer-socialMedia__link" :to="localePath('/')">
						<IconTheFB></IconTheFB>
					</NuxtLink>
					<NuxtLink class="footer-socialMedia__link" :to="localePath('/')">
						<IconTheTW></IconTheTW>
					</NuxtLink>
				</ul>
			</div>
		</div>
		<div class="footer__bottom">
			<div class="footer__container bottom">
				<div class="footer__info">
					© {{ new Date().getFullYear() }}. PVABOOM
				</div>
				<ul class="footer__socialMedia footer-doc">
					<NuxtLink class="footer-doc__link" :to="localePath('/')">{{
						$t('nav.publicOffer')
					}}</NuxtLink>
					<NuxtLink class="footer-doc__link" :to="localePath('/')">{{
						$t('nav.personalInformation')
					}}</NuxtLink>
					<NuxtLink class="footer-doc__link" :to="localePath('/')">{{
						$t('nav.returnsPolicy')
					}}</NuxtLink>
				</ul>
				<div class="footer-bottom-mobile">
					<div class="footer-bottom-mobile__info">
						© {{ new Date().getFullYear() }}. PVABOOM
					</div>
					<div class="footer__paymentSystems">
						<IconTheVisa></IconTheVisa>
						<IconTheMastercard></IconTheMastercard>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useUserStore } from '~/store/user.js';

const localePath = useLocalePath();
const store = useUserStore();
</script>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.footer {
	@apply text-white  bg-gradient-to-r from-sky-950 to-sky-900;

	&-logo {
		@apply flex justify-center;
	}

	&__container {
		&.top {
			@apply py-16 grid justify-center sm:flex items-center sm:justify-between;
		}

		&.bottom {
			@apply py-6  grid justify-items-center sm:flex items-center sm:justify-between;
		}
	}

	&-top-mobile {
		@apply grid gap-6;

		&-socialMedia {
			@apply flex gap-2 items-center justify-center lg:hidden;
		}
	}

	&-bottom-mobile {
		@apply flex justify-between gap-6 pt-6 w-full sm:w-auto sm:grid;

		&__paymentSystems {
			@apply flex gap-2 lg:hidden;
		}

		&__info {
			@apply flex lg:hidden text-sky-400 text-xs;
		}
	}

	&__bottom {
		@apply border-t border-sky-700;
	}

	&-nav {
		@apply grid justify-items-center gap-3 flex-wrap pt-12 sm:flex  sm:gap-6 sm:pt-0;

		&__link {
			@apply block text-base py-2 px-2.5;

			@media (any-hover: hover) {
				&:hover {
					@apply text-sky-400;
				}
			}
		}
	}

	&-doc {
		@apply grid justify-items-center sm:flex gap-3;

		&__link {
			@apply text-xs  py-2 px-2.5;

			@media (any-hover: hover) {
				&:hover {
					@apply text-sky-400;
				}
			}
		}
	}

	&-socialMedia {
		@apply hidden lg:flex gap-2 items-center;
	}

	&__info {
		@apply hidden lg:flex text-sky-400 text-xs;
	}

	&__paymentSystems {
		@apply flex gap-2 justify-center;
	}

  &__callToAction {
    @include adaptiveValue(padding-top, 92, 64);
    @include adaptiveValue(padding-bottom, 92, 64);
    @include adaptiveValue(padding-left, 64, 24);
    @include adaptiveValue(padding-right, 64, 24);
    @apply grid md:grid-cols-[1fr_240px] gap-8 bg-sky-500 rounded-[32px] -mt-36;

    p {
      @apply text-white;
    }
  }
}

</style>
