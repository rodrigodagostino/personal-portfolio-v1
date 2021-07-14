<template>
	<section :id="name" class="section" :class="name">
		<div class="container">
			<slot name="header">
				<header class="section__header">
					<h2 class="section__title" v-reveal-on-scroll="{ animation: 'fade-up' }">
						{{ title }}
					</h2>
				</header>
			</slot>
			<div class="section__content" v-reveal-on-scroll="{ animation: 'fade-up' }">
				<slot />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		name: String,
		title: String,
	},
}
</script>

<style lang="scss">
.section {
	&__header + &__content {
		margin-top: 2.5rem;
	}

	&__title {
		font-size: clamp(1.625rem, 5vw, 2rem);
		line-height: 1;
	}
}

.section {
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 6rem 0;
	position: relative;
	transition: padding 0.32s ease;

	&:nth-child(even) {
		&::before {
			content: '';
			background-color: var(--grey-150);
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: -1;
			transform: skewY(4deg);
		}
	}

	&__wrapper {
		width: 100%;
	}
}

@media screen and (min-width: 42.5em) {
	.section {
		padding: 8rem 0;

		&__header + &__content {
			margin-top: 4rem;
		}
	}
}
</style>
