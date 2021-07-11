<template>
	<Layout>
		<article>
			<h1>{{ $page.project.title }}</h1>
			<div v-html="$page.project.content" />
		</article>
	</Layout>
</template>

<page-query>
query ($id: ID!) {
	project(id: $id) {
		title
		content
	}
}
</page-query>
