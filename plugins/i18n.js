module.exports = {
	use: 'gridsome-plugin-i18n',
	options: {
		locales: [ 'en', 'es' ],
		defaultLocale: 'en',
		messages: {
			en: require( '../src/locales/en.json' ),
			es: require( '../src/locales/es.json' ),
		},
	},
}