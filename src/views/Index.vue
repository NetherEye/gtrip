<template>
	<div class="index">
		<div class="container">
			<div class="row flex" style="margin-top: 30px;">
				<div class="swiper" @mouseover="hideBtn('show')" @mouseout="hideBtn('hide')">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(item, index) in imgs" :key="'swp' + index">
							<div class="swp-item">
								<img style="width: 100%;height: 100%;display: inline-block;" :src="item.coverUrl" />
								<div class="opc-title els">{{item.title}}</div>
								<div class="opc-title-cos"></div>
							</div>

						</swiper-slide>
					</swiper>
					<div class="swiper-next"></div>
					<div class="swiper-pre"></div>
				</div>
				<div class="new-item wd">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-re"></em>
							</i><span>点聚焦</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航新闻', query: {type: '政治新闻'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="box">
						<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in hotArticle" :key="'re' + index">
							<i></i>
							<span class="els">{{item.title}}</span>
							<div class="line"></div>
						</li>

					</div>
				</div>
			</div>

			<div class="row" style="margin-top: 20px;">
				<div class="new-item">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-zheng"></em>
							</i><span>治新闻</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航新闻', query: {type: '政治新闻'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="box ht">
						<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in zhengZhi" :key="'re' + index">
							<i></i>
							<span class="els">{{item.title}}</span>
							<div class="line"></div>
						</li>
					</div>
				</div>
				<div class="new-item">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-lv"></em>
							</i><span>游资讯</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航新闻', query: {type: '旅游资讯'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="box ht">
						<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in lvYou" :key="'re' + index">
							<i></i>
							<span class="els">{{item.title}}</span>
							<div class="line"></div>
						</li>
					</div>
				</div>

			</div>

			<div class="row" style="margin-top: 20px;">
				<div class="new-item">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-lv"></em>
							</i><span>游路线</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航新闻', query: {type: '旅游路线'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="box ht">
						<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in luXian" :key="'re' + index">
							<i></i>
							<span class="els">{{item.title}}</span>
							<div class="line"></div>
						</li>
					</div>
				</div>
				<div class="new-item">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-jing"></em>
							</i><span>区介绍</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航新闻', query: {type: '景区介绍'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="box ht">
						<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in jingQu" :key="'re' + index">
							<i></i>
							<span class="els">{{item.title}}</span>
							<div class="line"></div>
						</li>
					</div>
				</div>

			</div>

			<div class="row" style="margin-top: 30px;">
				<div class="new-item wd1170">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-tu"></em>
							</i><span>览贵州</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航图片', query: {type: '图览贵州'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="td" style="margin-bottom: 32px;">
						<div class="td-item" @click="$router.push({name: '图片详情', params: {id: item.id}})" :class="item.stc ? '' : 'cur'" v-for="(item, index) in c_picture" :key="'p1' + index">
							<div class="img-box">
								<img :src="item.coverUrl" v-if="!item.stc" />
							</div>
							<div class="intro">{{item.title}}</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="new-item wd1170">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-shi"></em>
							</i><span>频贵州</span>
						</div>
						<div class="title-r cur" @click="$router.push({name: '栏目导航图片', query: {type: '视频贵州'}})">
							<i>更多</i>>>
						</div>
					</div>
					<div class="td">
						<div class="td-item" @click="$router.push({name: '视频详情', params: {id: item.id}})" :class="item.stc ? '' : 'mov cur'" v-for="(item, index) in c_video" :key="'v1' + index">
							<div class="img-box">
								<img :src="item.coverUrl" v-if="!item.stc" />
							</div>
							<div class="intro">{{item.title}}</div>
						</div>

					</div>
				</div>
			</div>
			<div style="height: 70px;"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					navigation: {
						nextEl: '.swiper-next',
						prevEl: '.swiper-pre'
					}
				},
				imgs: [],
				hotArticle: [],
				zhengZhi: [],
				lvYou: [],
				jingQu: [],
				luXian: [],
				picture: [

				],
				video: [

				],
			}
		},
		created() {
			this.getCarousel()
			this.getReDian()
			this.getZhengZhi()
			this.getLvYou()
			this.getLuXian()
			this.getJingQu()
			this.getPicture()
			this.getVideo()
		},
		methods: {
			getCarousel() {
				this.$http.rq({
					url: this.$commonApi.carouselOrHot,
					data: {
						type: 1
					}
				}).then(res => {
					if(res.code === 200) {
						this.imgs = res.data
					} else {
						this.imgs = []
					}
				})
			},
			getReDian() {
				this.$http.rq({
					url: this.$commonApi.carouselOrHot,
					data: {
						type: 2
					}
				}).then(res => {
					if(res.code === 200) {
						this.hotArticle = res.data
					} else {
						this.hotArticle = []
					}
				})
			},
			getZhengZhi() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 1,
						pageNumber: 1,
						pageSize: 10
					}
				}).then(res => {
					if(res.code === 200) {
						this.zhengZhi = res.data.row
					} else {
						this.zhengZhi = []
					}
				})
			},
			getLvYou() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 2,
						pageNumber: 1,
						pageSize: 10
					}
				}).then(res => {
					if(res.code === 200) {
						this.lvYou = res.data.row
					} else {
						this.lvYou = []
					}
				})
			},
			getLuXian() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 3,
						pageNumber: 1,
						pageSize: 10
					}
				}).then(res => {
					if(res.code === 200) {
						this.luXian = res.data.row
					} else {
						this.luXian = []
					}
				})
			},
			getJingQu() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 4,
						pageNumber: 1,
						pageSize: 10
					}
				}).then(res => {
					if(res.code === 200) {
						this.jingQu = res.data.row
					} else {
						this.jingQu = []
					}
				})
			},
			getPicture() {
				this.$http.rq({
					url: this.$commonApi.picture,
					data: {
						type: 0,
						pageNumber: 1,
						pageSize: 8
					}
				}).then(res => {
					if(res.code === 200) {
						this.picture = res.data.row
					} else {
						this.picture = []
					}
				})
			},
			getVideo() {
				this.$http.rq({
					url: this.$commonApi.video,
					data: {
						type: 0,
						pageNumber: 1,
						pageSize: 8
					}
				}).then(res => {
					if(res.code === 200) {
						this.video = res.data.row
					} else {
						this.video = []
					}
				})
			},
			hideBtn(t) {
				if(this.imgs.length == 0){
					return
				}
				if(t == 'hide') {
					document.querySelector('.swiper-next').className = 'swiper-next hide';
					document.querySelector('.swiper-pre').className = 'swiper-pre hide';
				} else {
					document.querySelector('.swiper-next').className = 'swiper-next show';
					document.querySelector('.swiper-pre').className = 'swiper-pre show';
				}
			}
		},
		computed: {
			c_picture() {
				if(this.picture.length === 0) {
					return []
				} else {
					
					if(this.picture.length % 4 === 0){
						return this.picture
					}
					
					let count = Math.abs(this.picture.length % 4 - 4);
					console.log(this.picture.length)
					let arr = new Array(count).fill({
						stc: true
					})
					return this.picture.concat(arr)
				}
			},
			c_video() {
				if(this.video.length === 0) {
					return []
				} else {
					if(this.video.length % 4 === 0){
						return this.video
					}
					let count = Math.abs(this.video.length % 4 - 4);
					let arr = new Array(count).fill({
						stc: true
					})
					return this.video.concat(arr)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.container {
		margin: 0 auto;
		width: 1173px;
		overflow: hidden;
		.td {
			flex-wrap: wrap;
		}
		.row {
			display: flex;
			justify-content: space-between;
			overflow: hidden;
		}
		.swiper {
			width: 726px;
			height: 406px;
			background-color: #FFFFFF;
			position: relative;
			.swiper-pre {
				position: absolute;
				left: 30px;
				top: 175px;
				z-index: 999;
				display: none;
			}
			.swiper-next {
				position: absolute;
				right: 30px;
				top: 175px;
				z-index: 999;
				display: none;
			}
		}
		.wd {
			width: 433px;
		}
		.wd1170 {
			width: 1170px;
		}
		.mov {
			position: relative;
		}
		.mov:after {
			content: url(../assets/img/index/bf.png);
			position: absolute;
			left: 100px;
			top: 66px;
		}
		.swp-item {
			position: relative;
			width: 726px;
			height: 406px;
			.opc-title {
				position: absolute;
				bottom: 0;
				width: 726px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				font-size: 16px;
				color: #ffffff;
				z-index: 99;
			}
			.opc-title-cos {
				content: '';
				position: absolute;
				width: 726px;
				height: 50px;
				background-color: #000000;
				opacity: 0.5;
				bottom: 0;
				left: 0;
				z-index: 1;
			}
		}
	}
</style>