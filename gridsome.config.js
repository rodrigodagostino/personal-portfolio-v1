// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Rodrigo D’Agostino',
	titleTemplate: '%s',
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Project',
				path: './projects/**/*.md',
				remark: {
					// Remark option
				},
			},
		},
	],
	templates: {
		Project: '/projects/:slug',
	},
	transformers: {
		remark: {
			// Global remark options
		},
	},
	chainWebpack: config => {
		config.module
			.rule( 'vue' )
			.use( 'vue-svg-inline-loader' )
			.loader( 'vue-svg-inline-loader' )
			.options( { /* ... */ } )
	},
}
