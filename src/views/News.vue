<template>
	<div class="news">
		<div class="row">
			<div class="new-item" style="width: 100%;">
				<div class="title">
					<div class="title-l">
						<i>
							<em class="f-lan"></em>
						</i><span>目导航</span>
					</div>
					
				</div>
				<div class="bottom">
					<div class="b-nav">
						<li class="cur" @click="set(item.name)" :class="activeNav == item.name ? 'activeNav' : ''" v-for="(item, index) in navList" :key="index"><div class="line"></div><span>{{item.name}}</span></li>
					</div>
					<div class="b-r">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NewItem from '../components/NewItem'
	import ImgItem from '../components/ImgItem'
	export default {
		data() {
			return {
				navList: [
					{name: '政治新闻'},
					{name: '旅游资讯'},
					{name: '旅游路线'},
					{name: '景区介绍'},
					{name: '图览贵州'},
					{name: '视频贵州'},
				],
				activeNav: '政治新闻',
				currentTabComponent: 'NewItem',
			}
		},
		components: {
			'NewItem': NewItem,
			'ImgItem': ImgItem,
		},
		created(){
			if(this.$route.query.type){
				this.activeNav = this.$route.query.type;
			}
		},
		methods: {
			set(name){
				this.activeNav = name
				let arr1 = ['图览贵州', '视频贵州'];
				if(arr1.indexOf(name) === -1){
					this.$router.push({
						name: '栏目导航新闻',
						query: {
							type: name
						}
					})
				}else{
					this.$router.push({
						name: '栏目导航图片',
						query: {
							type: name
						}
					})
				}
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.row{
		margin: 0 auto;
		width: 1173px;
		margin-top: 42px;
		margin-bottom: 30px;
	}
	.bottom{
		margin-top: 10px;
		overflow: hidden;
		width: 100%;
		.b-nav{
			float: left;
			width: 190px;
			height: 539px;
			background-color: #0569bf;
			li{
				height: 69px;
				text-align: center;
				line-height: 69px;
				font-size: 16px;
				color: #ffffff;
				position: relative;
				.line{
					position: absolute;
					bottom: 0;
					height: 1px;
					background-color: #ffffff;
					opacity: 0.2;
					width: 100%;
				}
				span{
					opacity: .5;
				}
				&:last-child{
					.line{
						display: none;
					}
				}
				
			}
			.activeNav{
				span{
					font-size: 18px;
					opacity: 1;
				}
			}
		}
		.b-r{
			float: right;
			.box{
				margin-top: 0;
			}
			
		}
	}
</style>