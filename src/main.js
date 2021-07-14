// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import RevealOnScroll from './directives/reveal-on-scroll'

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
		href: 'https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap',
	} )
	head.link.push( {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap',
	} )
	head.link.push( {
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400&display=swap',
	} )
	// Set default layout as a global component
	Vue.component( 'Layout', DefaultLayout )

	// Register custom directives
	Vue.directive( 'reveal-on-scroll', RevealOnScroll )
}
