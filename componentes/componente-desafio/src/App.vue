<template>
	<v-app>

		<app-menu />

		<app-title />

		<app-carousel />

		<app-footer />
	</v-app>
</template>

<script>
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Title from './Title.vue'
import Menu from './Menu.vue'

export default {
	components: {
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-title': Title,
		'app-menu': Menu,
	},

}
</script>
