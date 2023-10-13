import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{

    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                black: '#070707',
                white: '#FFFFFF',
                green: {
                    50: '#EFFDF5',
                    100: '#D9FBE8',
                    200: '#B3F5D1',
                    300: '#75EDAE',
                    400: '#00DC82',
                    500: '#00C16A',
                    600: '#00C308',
                    700: '#007F45',
                    800: '#016538',
                    900: '#0A5331',
                    950: '#052e16'
                },
                sky: {
                    50: '#EEF5FF',
                    100: '#E0EDFF',
                    200: '#CDE2FF',
                    300: '#E2E6F0',
                    400: '#8E9AC7',
                    500: '#3864FF',
                    600: '#1B4DFF',
                    700: '#324072',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                stone: {
                    50: '#fafaf9',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#d6d3d1',
                    400: '#a8a29e',
                    500: '#727272',
                    600: '#57534e',
                    700: '#44403c',
                    800: '#292524',
                    900: '#1c1917',
                    950: '#0c0a09',
                },
                red: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#ef4444',
                    600: '#FF0000',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a',
                },
                yellow: {
                    50: '#fefce8',
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#facc15',
                    500: '#eab308',
                    600: '#FFB800',
                    700: '#a16207',
                    800: '#854d0e',
                    900: '#713f12',
                    950: '#422006',
                },
            },
        }
    }
}