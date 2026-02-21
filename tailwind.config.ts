import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                gold: {
                    DEFAULT: '#C9A96E',
                    light: '#E8D5A3',
                    dark: '#A07840',
                },
                dark: {
                    DEFAULT: '#0D0D0D',
                    2: '#141414',
                    3: '#1C1C1C',
                    4: '#242424',
                },
            },
        },
    },
    plugins: [],
};

export default config;
