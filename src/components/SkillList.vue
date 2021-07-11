<template>
	<div class="row">
		<div class="column">
			<h3 class="skill-list__heading">Programming Languages</h3>
			<ul class="skill-list">
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/html.svg"
							alt="HTML5 logo"
						/>
					</div>
					<p class="skill__title">HTML</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/css.svg"
							alt="CSS3 logo"
						/>
					</div>
					<p class="skill__title">CSS</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/sass.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Sass</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/javascript.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">JavaScript</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/php.svg"
							alt="React.js logo"
						/>
					</div>
					<p class="skill__title">PHP</p>
				</li>
			</ul>
		</div>
		<div class="column">
			<h3 class="skill-list__heading">Libraries & Frameworks</h3>
			<ul class="skill-list">
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/vuejs.svg"
							alt="Vue.js logo"
						/>
					</div>
					<p class="skill__title">Vue.js</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/reactjs.svg"
							alt="React.js logo"
						/>
					</div>
					<p class="skill__title">React.js</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/gridsome.svg"
							alt="Gridsome logo"
						/>
					</div>
					<p class="skill__title">Gridsome</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/bootstrap.svg"
							alt="Bootstrap logo"
						/>
					</div>
					<p class="skill__title">Bootstrap</p>
				</li>
			</ul>
		</div>
		<div class="column">
			<h3 class="skill-list__heading">Tools & Platforms</h3>
			<ul class="skill-list">
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/git.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Git</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/github.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">GitHub</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/webpack.svg"
							alt="Bootstrap logo"
						/>
					</div>
					<p class="skill__title">Webpack</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/wordpress.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">WordPress</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/netlify.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Netlify</p>
				</li>
			</ul>
		</div>
		<div class="column">
			<h3 class="skill-list__heading">Design</h3>
			<ul class="skill-list">
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/figma.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Figma</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/adobe.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Adobe Suite</p>
				</li>
				<li class="skill">
					<div class="skill__image-wrapper">
						<img
							class="skill__image"
							svg-inline
							src="~/assets/logos/affinity.svg"
							alt="JavaScript logo"
						/>
					</div>
					<p class="skill__title">Affinity Suite</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.row {
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 6rem;
	grid-row-gap: 4rem;
}

.skill-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	list-style: none;
	margin-top: 1.5rem;
	grid-gap: 1rem;

	&__heading {
		font-size: clamp(1.25rem, 5vw, 1.5rem);
	}
}

.skill {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__image-wrapper {
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__image {
		max-width: 100%;
		max-height: 100%;
		height: auto;
	}

	&__title {
		font-size: 1rem;
		line-height: 1.2;
		text-align: center;
		margin-top: 0.5rem;
	}
}

@media screen and (min-width: 42.5em) {
	.row {
		grid-template-columns: 1fr 1fr;
	}

	.skill-list {
		grid-template-columns: repeat(5, 1fr);
	}
}
</style>
