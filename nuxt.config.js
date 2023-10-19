// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.scss'],
	modules: [
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'@nuxt/ui',
		'@vueuse/nuxt',
		'nuxt-swiper'
	],
	pinia: {
		autoImports: ['defineStore'],
	},

	i18n: {
		lazy: true,
		langDir: 'locales',
		strategy: 'prefix_except_default',
		dynamicRouteParams: true,
		compilation: {
			strictMessage: false,
		},
		locales: [
			{
				flag: '/_nuxt/assets/img/flag/ru.png',
				code: 'ru',
				iso: 'ru_RU',
				name: 'Россия',
				file: 'ru.json',
			},
			{
				flag: '/_nuxt/assets/img/flag/uk.png',
				code: 'en',
				iso: 'en-US',
				name: 'English',
				file: 'en.json',
			},
		],
		defaultLocale: {
			name: 'Россия',
			code: 'ru',
			flag: '/_nuxt/assets/img/flag/ru.png',
		},
	},
	tailwindcss: {
		configPath: './tailwind.config.ts',
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	ui: {
		// global: true,
		// safelistColors: excludeColors(colors)
	},
	extends: 'content-wind',
	experimental: {
		watcher: 'parcel',
	},
});
