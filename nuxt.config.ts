// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import colors from 'tailwindcss/colors'
import { excludeColors } from './assets/colorsSettings/colors'
export default defineNuxtConfig({
    devtools: {enabled: true},

    css: ["~/assets/css/main.scss"],

    modules: [
        "@pinia/nuxt",
        "@nuxtjs/i18n",
        "@nuxt/ui"
    ],

    pinia: {
        autoImports: ["defineStore"],
    },

    i18n: {
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
            {
                flag: "/_nuxt/assets/img/flag/ru.png",
                code: "ru",
                iso: "ru",
                name: "Россия",
                file: "ru.json"
            },
            {
                flag: "/_nuxt/assets/img/flag/uk.png",
                code: "en",
                iso: "en",
                name: "English",
                file: "en.json"
            }
        ],
        defaultLocale: {name: "Россия", code: "ru", flag:"/_nuxt/assets/img/flag/ru.png"},
    },

    app: {
        head: {
            title: "Nuxt title",
            meta: [
                {
                    name: "description",
                    content: "Nuxt description"
                }
            ]
        }
    },

    tailwindcss: {
        configPath: './tailwind.config.ts',
    },

    ui: {
        global: true,
        safelistColors: excludeColors(colors)
    },
})
