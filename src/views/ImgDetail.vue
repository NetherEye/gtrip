<template>
	<div class="imgDetail">
		<div class="box">
			<div class="cap">
				<span>{{form.title}}</span><i>图览贵州</i>
			</div>
			<div class="info">
				<span>发布时间：{{form.inputTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>作者：{{form.author}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>来源：{{form.source}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>浏览次数：{{form.count}}</span>
			</div>
			<div class="content">
				<div class="swiper" v-if="form.pictureDetailsList.length != 0">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(item, index) in form.pictureDetailsList" :key="'swp' + index">
							<div class="swp-item">
								<div class="img">
									<img :src="item.picutreUrl" />
								</div>
								<div class="intro">
									<div class="index"><span>{{index+1}}</span>/{{form.pictureDetailsList.length}}</div>
									<div class="p">{{item.content}}</div>
								</div>
							</div>

						</swiper-slide>
					</swiper>
					<div class="swiper-next"></div>
					<div class="swiper-pre"></div>

				</div>
				<div style="height: 30px"></div>
				<div class="art-list new-item">
					<div class="art-pre">
						<div class="td" v-if="form.map.last">
							<div class="td-item">

								<div class="img-box cur" @click="$router.push({name: '图片详情', params: {id: form.map.last.id}})">
									<img :src="form.map.last.coverUrl" />
								</div>
								<div style="width: 226px;" class="intro els">{{form.map.last.title}}</div>
							</div>
						</div>
					</div>
					<div class="thumb" v-if="form.pictureDetailsList.length != 0">
						<div class="thumb-pre" @click="mSwiperPre"></div>
						<div class="thumb-container">
							<div class="thumb-box">
								<div class="thumb-container-item" :class="mSwiperIndex === index ? 'activeMSwiper' : ''" v-for="(item, index) in form.pictureDetailsList" :key="'t' + index">
									<img :src="item.picutreUrl" />
									<div class="els">{{item.content}}</div>
								</div>
							</div>
							
							
						</div>
						<div class="thumb-next" @click="mSwiperNext"></div>
					</div>
					<div class="art-next">
						<div class="td" v-if="form.map.next">
							<div class="td-item">
								<div class="img-box cur" @click="$router.push({name: '图片详情', params: {id: form.map.next.id}})">
									<img :src="form.map.next.coverUrl" />
								</div>
								<div style="width: 226px;" class="intro els">{{form.map.next.title}}</div>
							</div>
						</div>
					</div>

				</div>
			</div>
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
				id: '',
				mSwiperIndex: 0,
				form: {
					pictureDetailsList: [],
					map: {}
				}
				
			}
		},
		watch: {
		    // call again the method if the route changes
		    '$route'(to, from){
		    	if(to.name == from.name){
		    		if(this.$route.params.id){
						this.id = this.$route.params.id
					}
		    		this.getData()
		    	}
		    	
		    }
		},
		components: {

		},
		created(){
			if(this.$route.params.id){
				this.id = this.$route.params.id
			}
			this.getData()
			this.addCount()
		},
		
		methods: {
			
			getData() {
				this.$http.rq({
					url: this.$commonApi.picture + '/' + this.id
				}).then(res => {
					if(res.code === 200) {
						this.form = res.data
					} else {
						this.form = {
							pictureDetailsList: [],
							map: {}
						}
					}
				})
			},
			// 1=资讯，2=图片，3=视频
			addCount(){
				this.$http.rq({
					url: this.$commonApi.addCount,
					method: 'put',
					data: {
						type: 2,
						id: this.id
					}
				}).then(res => {
					
				})
			},
			mSwiperNext(){
				if(this.mSwiperIndex === this.form.pictureDetailsList.length-1){
					return
				}
				if(this.form.pictureDetailsList.length <= 3){
					return
				}
				
				if((this.mSwiperIndex + 1) % 3 == 0){
					document.querySelector('.thumb-box').style['margin-left'] = -((this.mSwiperIndex + 1) / 3 * 3 * 180) + 'px'
				}
				this.mSwiperIndex++
				
			},
			mSwiperPre(){
				if(this.mSwiperIndex === 0){
					return
				}
				
				if(this.form.pictureDetailsList.length <= 3){
					return
				}
				this.mSwiperIndex--
				if((this.mSwiperIndex + 1) % 3 == 0){
					document.querySelector('.thumb-box').style['margin-left'] = -((this.mSwiperIndex - 2) / 3 * 3 * 180) + 'px'
				}
				
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.box {
		width: 1170px;
		margin: 0 auto;
		background-color: #ffffff;
		border: solid 1px #dfdede;
		margin-bottom: 30px;
		margin-top: 20px;
		.cap {
			margin-left: 22px;
			margin-top: 18px;
			font-size: 16px;
			color: #292929;
			i {
				font-size: 16px;
				color: #0569bf;
				margin-left: 20px;
			}
		}
		.info {
			margin-left: 20px;
			font-size: 14px;
			color: #999999;
			margin-top: 18px;
		}
		.content {
			padding: 30px 28px 30px 24px;
			.img {
				width: 1116px;
				height: 406px;
				background-color: #0569bf;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
		.swiper {
			background-color: #FFFFFF;
			position: relative;
			.swiper-pre {
				position: absolute;
				left: 30px;
				top: 175px;
				z-index: 999;
			}
			.swiper-next {
				position: absolute;
				right: 30px;
				top: 175px;
				z-index: 999;
			}
			.swp-item {
				overflow: hidden;
				.img {
					width: 1116px;
					height: 406px;
					img {
						display: inline-block;
						width: 100%;
						height: 100%;
					}
				}
				.intro {
					display: flex;
					margin-top: 6px;
					.index {
						font-size: 36px;
						color: #999999;
						width: 90px;
						text-align: center;
						span {
							color: #0569bf;
						}
					}
					.p {
						font-size: 14px;
						color: #999999;
						padding-top: 10px;
						line-height: 24px;
						padding-left: 10px;
					}
				}
			}
		}
		.art-list {
			display: flex;
			justify-content: space-between;
			.thumb{
				flex: 1;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin: 0 23px;
				overflow: hidden;
				.thumb-container{
					flex: 1;
					display: flex;
					overflow: hidden;
					.thumb-box{
						display: flex;
					}
					.thumb-container-item{
						width: 170px;
						margin: 0 5px;
						&>img{
							width: 170px;
							height: 122px;
							display: block;
							mask: url(../assets/img/sifang/w170.png);
						}
						&>div{
							font-size: 10px;
							color: #000000;
							margin-top: 4px;
						}
					}
					.activeMSwiper{
						background: url(../assets/img/index/xiaoacitve.png) no-repeat;
						background-size: 170px 122px;
						&>div{
							color: #0569bf;
						}
					}
				}
			}
		}
		.new-item {
			width: 100%;
			.img-box {
				width: 236px;
				height: 179px;
				mask: url(../assets/img/index/xmengcheng.png);
			}
		}
		.td {
			display: flex;
			justify-content: flex-start;
			.td-item {
				.intro{
					color: #0569bf;
				}
			}
			.img-box {
				width: 236px;
				height: 179px;
			}
		}
	}
	.thumb-pre{
		width: 17px;
		height: 31px;
		background: url(../assets/img/sifang/zz1.png) no-repeat center center;
		background-size: 100% 100%;
		cursor: pointer;
		margin-right: 10px;
	}
	.thumb-next{
		width: 17px;
		height: 31px;
		background: url(../assets/img/sifang/yy.png) no-repeat center center;
		background-size: 100% 100%;
		cursor: pointer;
		margin-left: 10px;
	}
	.art-pre, .art-next{
		width: 236px;
		height: 218px;
	}
</style>