<template>
	<ul class="project-list">
		<ProjectListItem v-for="project in allProjects" :key="project.id" :project="project" />
	</ul>
</template>

<script>
import ProjectListItem from '@/components/ProjectListItem.vue'

export default {
	props: {
		allProjects: Array,
	},
	components: {
		ProjectListItem,
	},
}
</script>
