<template>
	<div class="layout">
		<header id="site-header" class="site-header">
			<div class="container">
				<g-link to="/" class="site-nav__home">RD’</g-link>
				<button
					id="menu-toggle"
					@click="toggleNavStatus"
					class="menu-toggle"
					:class="{ 'is-active': isNavActive }"
					aria-controls="site-nav"
					:aria-pressed="isNavActive"
					:aria-expanded="isNavActive"
				>
					<span class="menu-toggle-label screen-reader-only">{{ menuToggleText }}</span>
					<span class="menu-toggle__line" aria-hidden="true"></span>
				</button>
				<nav id="site-nav" class="site-nav" :class="{ 'is-expanded': isNavActive }">
					<a href="#about-me" class="site-nav__link">About me</a>
					<a href="#skills" class="site-nav__link">Skills</a>
					<a href="#projects" class="site-nav__link">Work</a>
					<a href="#contact" class="site-nav__link">Contact</a>
				</nav>
			</div>
		</header>
		<slot />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isNavActive: false,
		}
	},
	computed: {
		menuToggleText() {
			return this.isNavActive ? 'Hide menu' : 'Display menu'
		},
	},
	methods: {
		toggleNavStatus() {
			this.isNavActive = !this.isNavActive
		},
	},
	mounted() {
		const siteHeader = document.getElementById( 'site-header' )
		const siteSections = document.querySelectorAll( '#site-main section' )

		/**
		 * Handle header and nav items classes based on current window position.
		 */
		window.addEventListener( 'scroll', () => {
			// Add “.is-active” to the site header if the current window position is higher than 0.
			// Remove it if not.
			if ( window.pageYOffset > 0 ) {
				siteHeader.classList.add( 'is-active' )
			} else {
				siteHeader.classList.remove( 'is-active' )
			}

			// Add “.is-current” to a site nav link if it matches the ID of the current section.
			// Remove it if not.
			siteSections.forEach( section => {
				const sectionTop = section.offsetTop
				const sectionBottom = section.offsetTop + section.offsetHeight
				const sectionID = section.id
				const currentMenuItem = document.querySelector( `a[href="#${ sectionID }"]` )

				if (
					window.pageYOffset >= sectionTop - 100 &&
					window.pageYOffset <= sectionBottom - 100 &&
					currentMenuItem
				) {
					currentMenuItem.classList.add( 'is-current' )
				} else {
					currentMenuItem.classList.remove( 'is-current' )
				}
			} )
		} )

		/**
		 * Smooth scrolling when clicking on any anchor tag present in the document.
		 */
		function smoothScrollFromAnchor() {
			// eslint-disable-next-line consistent-return
			const anchors = document.querySelectorAll( 'a[href*="#"]:not([href="#"])' )
			anchors.forEach( anchor => {
				anchor.addEventListener( 'click', function ( event ) {
					event.preventDefault()
					const targetId = anchor.getAttribute( 'href' ).slice( 1 )
					const targetElement = document.getElementById( targetId )
					if ( targetElement ) {
						targetElement.scrollIntoView( {
							behavior: 'smooth',
						} )
						// Update the URL without refreshing the browser.
						history.pushState(
							{ additionalInformation: 'Updated the URL with JS' },
							document.title,
							`${ location.origin }/#${ targetId }`
						)
					}
				} )
			} )
		}
		smoothScrollFromAnchor()
	},
}
</script>

<style lang="scss">
/**
 * Variables
 */
:root {
	--font-primary: 'Lora', Avenir, Helvetica, Arial, sans-serif;
	--font-secondary: 'Rubik', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, sans-serif;
	--font-mono: 'JetBrains Mono', 'Courier New', Courier, monospace;

	--color-primary: var(--nebula-500);
	--color-secondary: var(--grey-800);
	--color-secondary--dark: var(--grey-900);

	--white: #fff;
	--black: #000;

	--grey-900: #23263b;
	--grey-800: #36395a;
	--grey-700: #484c7a;
	--grey-600: #5a5e9a;
	--grey-500: #777aaf;
	--grey-400: #9698c3;
	--grey-300: #b6b7d5;
	--grey-200: #d5d5e6;
	--grey-150: #e5e5f1;
	--grey-100: #f5f5fa;
	--grey-050: #fcfcfd;
	--grey-000: #fff;
	--pink-900: #59063d;
	--pink-800: #88085c;
	--pink-700: #b80979;
	--pink-600: #e90a96;
	--pink-500: #f82caa;
	--pink-400: #fb5abc;
	--pink-300: #fd89ce;
	--pink-200: #feb9e2;
	--pink-100: #ffeaf6;
	--nebula-900: #141d61;
	--nebula-800: #1e2b8f;
	--nebula-700: #2b3cbb;
	--nebula-600: #3c4fe0;
	--nebula-500: #5468ff;
	--nebula-400: #7c8aff;
	--nebula-300: #a3acff;
	--nebula-200: #cacfff;
	--nebula-100: #f2f3ff;
	--cyan-900: #00526c;
	--cyan-800: #00769b;
	--cyan-700: #009bcb;
	--cyan-600: #0db7eb;
	--cyan-500: #2cc8f7;
	--cyan-400: #5adaff;
	--cyan-300: #89e5ff;
	--cyan-200: #b9efff;
	--cyan-100: #e8faff;
	--green-900: #005e36;
	--green-800: #028950;
	--green-700: #06b66c;
	--green-600: #0de589;
	--green-500: #5feb9e;
	--green-400: #88f0b3;
	--green-300: #aaf4c8;
	--green-200: #c9f8de;
	--green-100: #e6fcf3;
	--orange-900: #963209;
	--orange-800: #bf470a;
	--orange-700: #e8600a;
	--orange-600: #f78125;
	--orange-500: #faa04b;
	--orange-400: #fcbc73;
	--orange-300: #fed59a;
	--orange-200: #ffe9c3;
	--orange-100: #fff9ec;
	--red-900: #83111e;
	--red-800: #ab1325;
	--red-700: #d4142a;
	--red-600: #ee243c;
	--red-500: #f4495d;
	--red-400: #f86e7e;
	--red-300: #fc95a1;
	--red-200: #febdc5;
	--red-100: #ffe6e9;

	--box-shadow-1: 0 1px 1px rgba(54, 57, 90, 0.1), 0 2px 2px rgba(54, 57, 90, 0.1),
		0 4px 4px rgba(54, 57, 90, 0.1), 0 6px 8px rgba(54, 57, 90, 0.1),
		0 8px 16px rgba(54, 57, 90, 0.1);
	--box-shadow-2: 0 1px 1px rgba(54, 57, 90, 0.1), 0 2px 2px rgba(54, 57, 90, 0.1),
		0 4px 4px rgba(54, 57, 90, 0.1), 0 8px 8px rgba(54, 57, 90, 0.1),
		0 16px 16px rgba(54, 57, 90, 0.1);
	--box-shadow-3: 0 2px 1px rgba(54, 57, 90, 0.1), 0 4px 2px rgba(54, 57, 90, 0.1),
		0 8px 4px rgba(54, 57, 90, 0.1), 0 12px 8px rgba(54, 57, 90, 0.1),
		0 24px 16px rgba(54, 57, 90, 0.1);
	--box-shadow-4: 0 2px 1px rgba(54, 57, 90, 0.1), 0 4px 2px rgba(54, 57, 90, 0.1),
		0 8px 4px rgba(54, 57, 90, 0.1), 0 16px 8px rgba(54, 57, 90, 0.1),
		0 32px 16px rgba(54, 57, 90, 0.1);
}

/**
 * Reset styles.
 */
html {
	box-sizing: border-box;
	height: 100%;
}

*,
*::before,
*::after {
	/* Inherit box-sizing to make it easier to change the property for components that leverage other behavior; see http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	box-sizing: inherit;
}

/* Reset margins and paddings on most elements */
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
	margin: 0;
	padding: 0;
}

/* Reset forms and buttons */
input,
textarea,
select,
button {
	color: inherit;
	font: inherit;
	letter-spacing: inherit;
}

input,
textarea,
button {
	border: 1px solid gray;
}

button {
	border-radius: 0;
	padding: 0.75em 1em;
	background-color: transparent;
}

button * {
	pointer-events: none;
}

/* Easy responsive for media elements */
embed,
iframe,
img,
object,
video {
	display: block;
	max-width: 100%;
}

/* Useful table styles */
table {
	table-layout: fixed;
	width: 100%;
}

/**
 * Base styles.
 */
body {
	font-family: var(--font-secondary);
	font-size: 1rem;
	color: var(--grey-800);
	background-color: var(--grey-050);
	margin: 0;
	padding: 0;
	line-height: 1.5;
	text-rendering: optimizeLegibility;
}

html {
	scrollbar-width: thin;
}

::-webkit-scrollbar {
	width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
	background-color: var(--grey-200);
}

/* Handle */
::-webkit-scrollbar-thumb {
	background-color: var(--grey-400);
	border-radius: 0.25rem;

	&:hover {
		background-color: var(--grey-500);
	}
	
	&:active {
		background-color: var(--grey-600);
	}
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: var(--font-primary);
	line-height: 1.2;
	letter-spacing: -0.015em;
}

* + p,
p + * {
	margin-top: 1.25rem;
}

a {
	color: var(--grey-600);
	transition: color 0.32s ease, background-color 0.32s, outline 0.24s ease,
		outline-offset 0.24s ease;
	text-decoration: none;
}

a:focus {
	outline: 2px dashed var(--nebula-300);
	outline-offset: 0.125rem;
}

a:hover {
	color: var(--nebula-500);
}

.container {
	width: 100%;
	max-width: 58rem; /* 928px */
	margin: 0 auto;
	padding: 0 1.5rem;
	transition: padding 0.32s ease;
}

.site-header {
	background-color: var(--grey-050);
	padding: 1.5rem 0;
	position: fixed;
	left: 0;
	right: 0;
	transition: padding 0.24s ease, box-shadow 0.24s ease;
	z-index: 20;

	&.is-active {
		padding: 1rem 0;
		box-shadow: var(--box-shadow-3);
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.site-nav {
	&__link {
		position: relative;
		padding: 0.5rem 0.75rem;
		text-transform: uppercase;

		&.is-current {
			color: var(--nebula-500);
			border-radius: 0.25rem;
			background-color: var(--nebula-100);
		}
	}

	&__home {
		font-family: var(--font-primary);
		font-size: 2rem;
		font-weight: 700;
		line-height: 1;
	}
}

.menu-toggle {
	background-color: transparent;
	width: 2.5rem;
	height: 2.5rem;
	padding: 0;
	border: none;
	border-radius: 0.25rem;
	outline: none;
	position: relative;
	transition: color 0.32s ease, background-color 0.32s, outline 0.24s ease,
		outline-offset 0.24s ease;
	cursor: pointer;
	z-index: 10;

	.menu-toggle__line {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1.5rem;
		height: 3px;
		background-color: var(--grey-800);
		transition: background-color 0.2s ease;

		&::before,
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: var(--grey-800);
			transition: top 150ms ease 0.2s, bottom 150ms ease 0.2s, transform 150ms ease;
		}

		&::before {
			top: -0.5rem;
		}

		&::after {
			bottom: -0.5rem;
		}
	}

	&:focus,
	&:hover {
		background-color: var(--grey-150);

		.menu-toggle__line {
			&::before,
			&::after {
				background-color: var(--grey-800);
			}
		}
	}

	&:focus {
		outline: 2px dashed var(--nebula-300);
		outline-offset: 0.125rem;
	}

	&:active,
	&.is-active {
		z-index: 120;

		.menu-toggle__line {
			background-color: transparent;

			&::before,
			&::after {
				background-color: var(--nebula-500);
				transition: top 150ms ease, bottom 150ms ease, transform 150ms ease 0.2s;
			}

			&::before {
				top: 0;
				transform: rotate(45deg);
			}

			&::after {
				bottom: 0;
				transform: rotate(-45deg);
			}
		}
	}
}

@media screen and (max-width: 42.4375em) {
	.site-nav {
		display: none;
		flex-direction: column;
		text-align: right;
		position: absolute;
		top: 100%;
		right: 0;
		padding: 2rem;
		background-color: var(--grey-150);

		&.is-expanded {
			display: flex;
		}

		&__link {
			font-size: 2rem;

			& + .site-nav__link {
				margin-top: 1rem;
			}
		}

		&__home {
			font-family: var(--font-primary);
			font-size: 2rem;
			font-weight: 700;
			line-height: 1;
		}
	}
}

@media screen and (min-width: 42.5em) {
	body {
		font-size: 1.125rem;
	}

	.site-header {
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	.site-nav {
		display: flex;
		flex-direction: row;
		position: relative;

		&__link {
			font-size: 1rem;

			& + .site-nav__link {
				margin-left: 1rem;
			}
		}
	}

	.menu-toggle {
		display: none;
	}
}
</style>
