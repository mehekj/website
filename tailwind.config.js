/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-quicksand)'],
                monospace: ['Courier New'],
            },
            colors: {
                white: '#FFFCF7',
                black: '#192025',
                main: '#29A8FD',
                highlight: '#29A8FD44',
            },
        },
    },
    plugins: [],
};
