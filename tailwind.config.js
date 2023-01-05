const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './node_modules/flowbite-react/**/*.js',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '640px',

            md: '768px',

            lg: '1024px',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
