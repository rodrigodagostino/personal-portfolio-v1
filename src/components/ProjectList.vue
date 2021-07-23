<template>
	<ul class="project-list">
		<li
			v-for="project in allProjects"
			:key="project.id"
			class="project"
			v-reveal-on-scroll="{ animation: 'fade-up' }"
		>
			<div class="project__content">
				<h3 class="project__title">
					<g-link :to="project.node.path">
						{{ project.node.title }}
					</g-link>
				</h3>
				<div v-html="project.node.description" class="project__description" />
				<ul class="project__tags">
					<li v-for="tag in project.node.tags" :key="tag" class="project__tag">
						#{{ tag }}
					</li>
				</ul>
				<div class="project__actions">
					<BaseButton :href="project.node.demoUrl" target="blank" variation="solid-dark">
						{{ $t('projectButton1') }}
					</BaseButton>
					<BaseButton :href="project.node.sourceUrl" target="blank" variation="solid">
						{{ $t('projectButton2') }}
					</BaseButton>
				</div>
			</div>
			<div class="project__media">
				<figure class="project__figure">
					<g-image
						:src="project.node.imageUrl"
						class="project__image"
						width="720"
						alt="Screenshot of the Vue To-Do App project"
					/>
				</figure>
			</div>
		</li>
	</ul>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
	components: {
		BaseButton,
	},
	props: {
		allProjects: Array,
	},
}
</script>

<style lang="scss">
.project {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 0.75rem;
	grid-row-gap: 1rem;
	justify-items: flex-end;
	text-align: center;
	max-width: 30rem;
	margin: 0 auto;

	& + .project {
		margin-top: 6rem;
	}

	&__media {
		grid-column: 1/-1;
		grid-row: 1;
	}

	&__content {
		grid-column: 1/-1;
		grid-row: 1;
		z-index: 1;

		& > * + * {
			margin-top: 1rem;
		}
	}

	&__title {
		font-size: clamp(1.25rem, 5vw, 1.5rem);
	}

	&__description {
		background-color: var(--grey-200);
		padding: 1.25rem;
		margin: 10rem 1rem 0;
		border-radius: 0.25rem;
		box-shadow: var(--box-shadow-2);
	}

	&__tags {
		font-family: var(--font-mono);
		font-size: 1rem;
		font-weight: 500;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		list-style: none;
		padding-left: 0;
	}

	&__tag {
		margin: 0 0.25rem;
	}

	&__actions {
		display: flex;
		justify-content: center;
		text-align: center;

		& > * + * {
			margin-left: 1rem;
		}
	}

	&__figure {
		height: 14rem;
		margin-top: 2.75rem;
		border-radius: 0.25rem;
		box-shadow: var(--box-shadow-1);
		overflow: hidden;
	}

	&__image {
		object-fit: cover;
		object-position: top center;
		height: 100%;
	}
}

@media screen and (min-width: 42.5em) {
	.project {
		align-items: center;
		text-align: right;
		max-width: none;

		&__content {
			grid-column: 8/-1;
			padding: 0;
		}

		&__media {
			grid-column: 1/8;
		}

		&__figure {
			height: 20rem;
			margin: 0;
		}

		&__description {
			margin: 1rem 0 0 -5rem;
		}

		&__tags,
		&__actions {
			justify-content: flex-start;
		}

		&:nth-child(odd) {
			.project__tags,
			.project__actions {
				justify-content: flex-end;
			}
		}

		&:nth-child(even) {
			justify-items: flex-start;
			text-align: left;

			.project__media {
				grid-column: 6/-1;
			}

			.project__content {
				grid-column: 1/6;
			}

			.project__description {
				margin: 1rem -5rem 0 0;
			}
		}
	}
}
</style>
