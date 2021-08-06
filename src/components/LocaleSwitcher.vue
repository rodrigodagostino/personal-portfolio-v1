<template>
	<div class="site-nav__locale-switcher">
		<g-link
			v-for="locale in availableLocales"
			:key="locale"
			:to="`/${locale}`"
			class="site-nav__link"
		>
			{{ locale }}
		</g-link>
		<!-- <select v-model="currentLocale" @change="localeChanged">
			<option v-for="locale in availableLocales" :key="locale" :value="locale">
				{{ locale }}
			</option>
		</select> -->
	</div>
</template>

<script>
export default {
	name: 'LocaleSwitcher',
	data: function () {
		return {
			// currentLocale: this.$i18n.locale.toString(),
			availableLocales: this.$i18n.availableLocales,
		}
	},
	// methods: {
	// 	localeChanged() {
	// 		this.$router.push( {
	// 			path: this.$tp( this.$route.path, this.currentLocale, true ),
	// 		} )
	// 	},
	// },
}
</script>

<style scoped>
.site-nav__locale-switcher {
	display: flex;
}
</style>
