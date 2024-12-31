const colors = require("tailwindcss/colors");
const starlightPlugin = require("@astrojs/starlight-tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}', '../shared/src/**/*.{astro,html,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            opacity: {
                2: '0.02',
                3: '0.03',
                4: '0.04',
            },
            fontSize: {
                h1: '3.5rem',
            },
            colors: {
                tBorder: '#31353e',
                tBg: '#141820',
                tBgDark: 'rgba(0,0,0,0.2)',
                tBgLight: '#1d232f',
                tShadowDark: 'rgba(0, 0, 0, 0.5)',
            },
        },
        colors: {
            gray: {
                50: '#fafafa',
                100: '#f4f4f5',
                200: '#e4e4e7',
                300: '#d4d4d8',
                350: '#cececf',
                400: '#a1a1a4',
                500: '#71717a',
                600: '#52525b',
                700: '#3f3f46',
                750: '#2D2E2F',
                800: '#27272a',
                850: '#1F2025',
                900: '#18181b',
                950: '#131317',
            },
            // coolgray: colors.coolGray,
            black: colors.black,
            white: colors.white,
            red: colors.red,
            blue: colors.sky,
            violet: colors.violet,
            'blue-accent': '#25A2E8',
        },
        screens: {
            '2xs': '400px',
            xs: '480px',
            ...defaultTheme.screens,
        },
    },
    plugins: [starlightPlugin()],
};