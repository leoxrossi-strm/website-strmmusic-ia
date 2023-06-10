// https://nuxt.com/docs/api/configuration/nuxt-config

interface NuxtConfig {
	googleFonts: {
		families: {
			[font: string]: number[]
		}
		display?: string
		text?: string
		prefetch?: boolean
		preconnect?: boolean
		preload?: boolean
		useStylesheet?: boolean
		api?: string
	}
}

export default defineNuxtConfig({
	modules: [
		'@nuxt/devtools',
		'@nuxt/image-edge',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'nuxt-delay-hydration'
	],

	googleFonts: {
		families: {
			Cabin: [400, 700]
		},
		display: 'swap',
		prefetch: true,
		preconnect: true,
		preload: true,
		useStylesheet: true
	},
	devtools: {
		// Enable devtools (default: true)
		enabled: true,
		// VS Code Server options
		vscode: {}
		// ...other options
	}
})
