<template>
	<div class="header">
		<div class="banner">
			<div class="logo">
				<h1 style="display: none;">贵客游</h1>
			</div>
		</div>
		<div class="nav">
			<div class="opc"></div>
			<div class="container">
				<div class="login flex jc-center al-center cur" @click="goToYun">扶贫云登陆</div>
				<li @click="go(item.name)" class="cur flex jc-center al-center" v-for="item in navList" :class="$store.state.activePathName == item.name ? 'activeNav' : ''" :key="item.name"><span>{{item.name}}</span></li>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						name: '首页'
					},
					{
						name: '旅游扶贫'
					},
					{
						name: '一机知四方'
					},
					{
						name: '一机游贵州'
					},
					{
						name: '扶贫电商'
					}
				]
			}
		},
		created() {},
		methods: {
			go(name) {
				this.$router.push({
					name: name
				})
			},
			goToYun(){
				window.location.href = 'https://gzitrip.cn/#/'
			}
		},
		computed: {
			activeNav(){
				return this.nav
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.header {
		overflow: hidden;
		position: relative;
	}
	
	.banner {
		height: 600px;
		background: url(../assets/img/index/banner.jpg) no-repeat center center;
		background-size: 1170px 600px;
		background-color: #FFFFFF;
		position: relative;
		min-width: 1170px;
		/*.logo {
			width: 237px;
			height: 99px;
			position: absolute;
			left: 100px;
			top: 23px;
			background: url(../assets/img/index/logo.png) no-repeat center center;
			background-size: 100% 100%;
			&>h1 {
				display: none;
			}
		}*/
	}
	
	.opc {
		position: absolute;
		height: 140px;
		background-color: #000000;
		opacity: 0.7;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.nav {
		position: absolute;
		height: 140px;
		bottom: 0;
		left: 0;
		right: 0;
		.container {
			margin: 0 auto;
			width: 1173px;
			height: 100%;
			position: relative;
			li {
				float: left;
				width: 128px;
				height: 100%;
				position: relative;
				margin-right: 28px;
				span {
					font-size: 18px;
					color: #ffffff;
					display: block;
					writing-mode: vertical-rl;
				}
			}
			li:last-child {
				&:after {
					opacity: 0;
				}
			}
			li:after {
				content: "";
				display: inline-block;
				width: 1px;
				height: 152px;
				background-color: #ffffff;
				position: absolute;
				right: 0;
				top: 28px;
			}
			.activeNav {
				background-color: #0569bf;
				overflow: hidden;
				&:after {
					opacity: 0;
				}
				&>span {
					display: inline-block;
					background: url(../assets/img/index/zs.png) no-repeat center center;
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			.login {
				width: 221px;
				height: 63px;
				background-color: #0569bf;
				font-size: 18px;
				letter-spacing: 9px;
				color: #ffffff;
				position: absolute;
				top: -63px;
				right: 3px;
			}
		}
	}
</style>