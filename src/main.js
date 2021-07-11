// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function ( Vue, { router, head, isClient } ) {
	head.link.push( {
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com',
	} )
	head.link.push( {
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossorigin: true,
	} )
	head.link.push( {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
	} )
	head.link.push( {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
	} )
	head.link.push( {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
	} )
	// Set default layout as a global component
	Vue.component( 'Layout', DefaultLayout )
}
