// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import colors from 'tailwindcss/colors'
import { excludeColors } from './assets/colorsSettings/colors'
import en from './locales/en.json' 
import ru from './locales/ru.json' 
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@nuxt/ui",
        "nuxt-swiper",
        '@vueuse/nuxt',
        '@nuxtjs/svg-sprite',        
    ],

    pinia: {
        autoImports: ["defineStore"],
    },

    i18n: {
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        dynamicRouteParams: true,
        compilation: {
            strictMessage: false,
        },
        messages: {
            en,
            ru,

        },
        locales: [
            {
                flag: "/_nuxt/assets/img/flag/ru.png",
                code: "ru",
                iso: "ru_RU",
                name: "Россия",
                file: "ru.json"
            },
            {
                flag: "/_nuxt/assets/img/flag/uk.png",
                code: "en",
                iso: "en-US",
                name: "English",
                file: "en.json"
            }
        ],
        defaultLocale: {name: "Россия", code: "ru", flag:"/_nuxt/assets/img/flag/ru.png"},
    },

    tailwindcss: {
        configPath: './tailwind.config.ts',
    },

    ui: {
        global: true,
        safelistColors: excludeColors(colors)
    },
})
