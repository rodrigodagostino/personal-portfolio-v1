<template>
	<Layout>
		<main id="site-main" class="site-main">
			<BaseSection name="about-me" title="Some things I’ve built">
				<template #header>
					<p>Hi there! My name is</p>
					<h1 class="section__title">
						<span class="section__title-line-1">Rodrigo D’Agostino,</span>
						<span class="section__title-line-2">
							I build things for the web.
						</span>
					</h1>
					<p>
						I'm a web designer and front-end developer currently based in Córdoba,
						Argentina looking to work along with you to make things that
						<em>make a difference</em>.
					</p>
				</template>
				<a href="https://github.com/rodrigodagostino">
					<img svg-inline src="~/assets/icons/github.svg" alt="Visit my GitHub page" />
				</a>
				<a href="https://www.linkedin.com/in/rodrigodagostino/">
					<img svg-inline src="~/assets/icons/linkedin.svg" alt="Visit my LinkedIn profile" />
				</a>
				<a href="https://behance.net/rodrigodagostino">
					<img svg-inline src="~/assets/icons/behance.svg" alt="Visit my Behance page" />
				</a>
				<a href="mailto:rodrigo.dagostino@gmail.com">
					<img svg-inline src="~/assets/icons/envelope.svg" alt="Send me an e-mail" />
				</a>
				<BaseButton href="~/resume.pdf" variation="solid-primary">Resume</BaseButton>
			</BaseSection>
			<BaseSection name="skills" title="Some technologies I’ve been working with">
				<SkillList />
			</BaseSection>
			<BaseSection name="projects" title="Some things I’ve built">
				<ProjectList :allProjects="$page.allProject.edges" />
			</BaseSection>
		</main>
	</Layout>
</template>

<page-query>
query {
	allProject(sortBy: "priority", order: ASC, limit: 4) {
		edges {
			node {
				title
				description
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

		&-line-2 {
			display: block;
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

.slide-fade-enter-active {
	animation: slide-fade 0.32s ease;
}

.slide-fade-leave-active {
	animation: slide-fade 0.32s ease reverse;
}

@keyframes slide-fade {
	from {
		opacity: 0;
		transform: translate3d(0, 2rem, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
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