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
			},
			padding: {
				'mobile-padding-x': '12px',
				'tablet-padding-x': '16px'
			}
		},
		fontFamily: {
			'gotham-light': ['Gotham-Light', 'sans-serif'],
			'gotham-book': ['Gotham-Book', 'sans-serif'],
			'gotham-medium': ['Gotham-Medium', 'sans-serif'],
			'gotham-ultra': ['Gotham-Ultra', 'sans-serif'],
			archer: ['Archer-Medium', 'sans-serif'],
			'archer-book': ['Archer-Book', 'sans-serif']
		},
		screens: {
			tablet: '640px',
			notebook: '768px',
			laptop: '1024px',
			desktop: '1280px',
			'lg-desktop': '1536px'
		}
	},
	plugins: []
};
