import { rajdhani } from 'next/font/google'

/** @type {import('tailwindcss').Config} */
export const content = [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
    extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

            'hero-grad': 'linear-gradient(-45deg, #a8e48a, #1eb6d9, #f2d3f7)',
        },

        fontFamily: {
            rajdhanid: ['rajdhani'],
        },
    },
}
export const plugins = []
