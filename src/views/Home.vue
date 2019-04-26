<template>
	<div class="home">
		<Header />
		<div class="main">
			<router-view></router-view>
		</div>
		<Foot />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	import Foot from '@/components/Foot.vue'

	export default {
		name: 'home',
		data(){
			return{
			}
		},
		components: {
			Header,
			Foot
		}
	}
</script>