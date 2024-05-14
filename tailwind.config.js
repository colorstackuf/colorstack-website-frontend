/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'body-background-white': '#f6f2ed',
				'body-background-blue': '#0b0f24',
				'text-emphasis': '#fd9739',
				'colorstackuf-blue': '#0699ab',
				'colorstackuf-orange': '#fd9739',
				'font-color-dark-blue': '#0b0f24',
				'body-background-light-blue': '#c6d1ef'
			}
		},
		fontFamily: {
			'gotham-medium': ['Gotham-Medium', 'sans-serif'],
			'gotham-ultra': ['Gotham-Ultra', 'sans-serif'],
			archer: ['Archer-Medium', 'sans-serif']
		}
	},
	plugins: []
};