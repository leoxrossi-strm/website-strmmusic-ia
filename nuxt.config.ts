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

export default defineNuxtConfig<NuxtConfig>({
	modules: ['@nuxt/image-edge', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
	googleFonts: {
		families: {
			Cabin: [400, 700]
		},
		display: 'swap',
		subsets: 'greek',
		text: 'Hello world',
		prefetch: true,
		preconnect: true,
		preload: true,
		useStylesheet: false
	}
})
