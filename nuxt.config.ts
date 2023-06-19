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
	devtools: {
		enabled: boolean
		vscode: {}
	}
	i18n?: {
		locales?: {
			code: string
			iso: string
			file?: string
			name?: string
			domain?: string
			host?: string
			langDir?: string
			strategy?: string
			[url: string]: any
		}[]
		defaultLocale?: string
		langDir?: string
		strategy?: string
		rootRedirect?: string
		seo?: boolean
		vueI18n?: {
			fallbackLocale?: string
			messages?: {
				[locale: string]: any
			}
		}
	}
}

export default defineNuxtConfig({
	modules: [
		'@nuxt/devtools',
		'@nuxt/image-edge',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'nuxt-delay-hydration',
		'@nuxtjs/i18n'
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
	},
	i18n: {
		vueI18n: './i18n.config.ts', // if you are using custom path, default
		locales: ['en', 'es', 'pt'], // added 'pt-BR' to the list of locales
		defaultLocale: 'pt' // set 'pt-BR' as the default locale
	}
})
