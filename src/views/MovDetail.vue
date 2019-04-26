<template>
	<div class="imgDetail">
		<div class="box">
			<div class="cap">
				<span>{{form.title}}</span><i>视频贵州</i>
			</div>
			<div class="info">
				<span>发布时间：{{form.inputTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>作者：{{form.author}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>来源：{{form.source}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>浏览次数：{{form.count}}</span>
			</div>
			<div class="content">
				<div class="vi">
					<video width="824" height="722" :src="form.videoUrl" controls="controls">
						
					</video>
				</div>
				<div class="about">
					<div class="new-item">
						<div class="title" style="margin-bottom: 10px;">
							<div class="title-l">
								<i>
								<em class="f-xiang"></em>
							</i><span>关视频</span>
							</div>
						</div>
						<div class="td">
							<div class="td-item" v-for="(item, index) in form.list" :key="index">
								<div class="img-box mov cur" @click="$router.push({name: '视频详情', params: {id: item.id}})">
									<img :src="item.coverUrl" />
								</div>
								<div class="intro els" style="width: 100%;">{{item.title}}</div>
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
				id: '',
				form: {
					list: []
				}
			}
		},
		created(){
			if(this.$route.params.id){
				this.id = this.$route.params.id
			}
			this.getData()
			this.addCount()
		},
		components: {

		},
		methods: {
			getData() {
				this.$http.rq({
					url: this.$commonApi.video + '/' + this.id
				}).then(res => {
					if(res.code === 200) {
						this.form = res.data
					} else {
						this.form = {
							list: []
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
						type: 3,
						id: this.id
					}
				}).then(res => {
					
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.mov {
			position: relative;
		}
	.mov:after {
		content: url(../assets/img/index/bf.png);
		position: absolute;
		left: 100px;
		top: 66px;
	}
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
			display: flex;
			justify-content: space-between;
			.about {
				width: 236px;
				.new-item{
					width: 100%;
					.img-box{
						width: 236px;
						height: 179px;
						mask: url(../assets/img/index/xmengcheng.png);
					}
				}
			}
			.td{
				flex-direction: column;
				.td-item{
					margin-bottom: 10px;
				}
				.img-box{
					width: 236px;
					height: 179px;
				}
			}
		}
	}
</style>