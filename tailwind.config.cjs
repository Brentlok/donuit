/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
	    themes: [
			{
				neon: {
					primary: '#0effff',
					secondary: '#ff4adf',
					accent: '#A056E8',
					neutral: '#2f2148',
					'base-100': '#FFFFFF',
					info: '#df93f6',
					success: '#46f953',
					warning: '#fff01f',
					error: '#F72119'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
