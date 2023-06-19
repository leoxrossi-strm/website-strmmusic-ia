export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'pt',
	messages: {
		en: { welcome: 'Welcome' },
		es: { welcome: 'Bienvenido' },
		pt: {
			welcome: 'Bem-vindo'
		}
	},
	strategy: 'prefix_except_default',
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'i18n_redirected',
		onlyOnRoot: true // recommended
	}
}))
