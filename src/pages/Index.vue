<template>
	<Layout>
		<main id="site-main" class="site-main">
			<BaseSection name="about-me" title="Some things I’ve built">
				<template #header>
					<p v-reveal-on-scroll="{ animation: 'fade-up', delay: 150 }">
						{{ $t('welcome1') }}
					</p>
					<h1 class="section__title">
						<span
							class="section__title-line-1"
							v-reveal-on-scroll="{ animation: 'fade-up', delay: 300 }"
						>
							{{ $t('welcome2') }}
						</span>
						<span
							class="section__title-line-2"
							v-reveal-on-scroll="{ animation: 'fade-up', delay: 450 }"
						>
							{{ $t('welcome3') }}
						</span>
					</h1>
					<p
						v-reveal-on-scroll="{ animation: 'fade-up', delay: 600 }"
						v-html="$t('welcome4')"
					/>
				</template>
				<div v-reveal-on-scroll="{ animation: 'fade-up', delay: 750 }">
					<a href="https://github.com/rodrigodagostino">
						<img
							svg-inline
							src="~/assets/icons/github.svg"
							alt="Visit my GitHub page"
						/>
					</a>
					<a href="https://codepen.io/rodrigodagostino">
						<img
							svg-inline
							src="~/assets/icons/codepen.svg"
							alt="Visit my Codepen page"
						/>
					</a>
					<a href="https://behance.net/rodrigodagostino">
						<img
							svg-inline
							src="~/assets/icons/behance.svg"
							alt="Visit my Behance page"
						/>
					</a>
					<a href="https://www.linkedin.com/in/rodrigodagostino/">
						<img
							svg-inline
							src="~/assets/icons/linkedin.svg"
							alt="Visit my LinkedIn profile"
						/>
					</a>
					<a href="mailto:rodrigo.dagostino@gmail.com">
						<img svg-inline src="~/assets/icons/envelope.svg" alt="Send me an e-mail" />
					</a>
					<BaseButton :href="$t('welcomeCTAUrl')" variation="solid-primary">
						{{ $t('welcomeCTA') }}
					</BaseButton>
				</div>
			</BaseSection>
			<BaseSection name="skills" :title="$t('skillsTitle')">
				<SkillList />
			</BaseSection>
			<BaseSection name="projects" :title="$t('projectsTitle')">
				<ProjectList :allProjects="$page.allProject.edges" />
			</BaseSection>
			<BaseSection name="contact" :title="$t('contactTitle')">
				<p v-html="$t('contactContent')" />
				<BaseButton href="mailto:rodrigo.dagostino@gmail.com" variation="solid-dark">
					{{ $t('contactCTA') }}
				</BaseButton>
			</BaseSection>
		</main>
	</Layout>
</template>

<page-query>
query {
	allProject(sortBy: "priority", order: ASC, limit: 5) {
		edges {
			node {
				title
				descriptionEN
				descriptionES
				imageUrl
				tags
				sourceUrl
				demoUrl
				content
				path
			}
		}
	}
}
</page-query>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseSection from '@/components/BaseSection.vue'
import ProjectList from '@/components/ProjectList.vue'
import SkillList from '@/components/SkillList.vue'

export default {
	components: {
		BaseButton,
		BaseSection,
		ProjectList,
		SkillList,
	},
	metaInfo: {
		title: 'Rodrigo D’Agostino | Web Developer',
	},
}
</script>

<style lang="scss">
.about-me {
	.section__title {
		font-size: clamp(2rem, 8vw, 4rem);
		line-height: 1.1;
		margin-top: 0.5rem;

		&-line-1,
		&-line-2 {
			display: block;
		}

		&-line-2 {
			color: var(--grey-600);
		}

		& + p {
			margin-top: 0.5rem;
		}
	}

	p {
		font-size: 1.25rem;
		margin-top: 0;
	}

	a {
		padding: 0.125rem;

		& + a:not(.button) {
			margin-left: 0.75rem;
		}

		svg {
			height: 1.5rem;
			display: inline;
			vertical-align: middle;
		}
	}

	.button {
		margin-left: 1.5rem;
	}
}

@media screen and (min-width: 42.5em) {
	.about-me {
		.section__title {
			margin-top: 1rem;

			& + p {
				margin-top: 1rem;
			}
		}
	}
}

/**
 * Animations
 */
[class*='ros-fade'] {
	visibility: hidden;
	opacity: 0;
	transition: opacity 0.5s ease, transform 0.5s ease;

	&.ros-animate {
		visibility: visible;
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

.ros-fade-up {
	transform: translate3d(0, 4rem, 0);
}

.ros-fade-right {
	transform: translate3d(4rem, 0, 0);
}

.ros-fade-down {
	transform: translate3d(0, -4rem, 0);
}

.ros-fade-left {
	transform: translate3d(-4rem, 0, 0);
}

.fade-enter-active {
	animation: fade 0.32s ease;
}

.fade-leave-active {
	animation: fade 0.32s ease reverse;
}

@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

/**
 * Accessibility
 */
.screen-reader-only {
	border: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	word-wrap: normal !important;
}
</style>
