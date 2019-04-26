<template>
	<div class="newDetail">
		<div class="box" v-if="id !== ''">
			<div class="cap">
				<span>{{form.title}}</span><i class="cur">{{returnType(form.type)}}</i>
			</div>
			<div class="info">
				<span>发布时间：{{form.inputTime}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>作者：{{form.author}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>来源：{{form.source}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span>浏览次数：{{form.count}}</span>
			</div>
			<div class="content">
				<div v-for="(item, index) in form.content" :key="'p' + index">
					<p v-if="item.type == 'p'">{{item.val}}</p>
					<img v-if="item.type == 'img'" :src="item.src" />
				</div>
			</div>
			<div class="pg">
				<div class="pre" v-if="form.map.last">
					<div class="cur els" @click="$router.push({name: '新闻详情页', params: {id: form.map.last.id}})">
						<span>上一篇【{{form.map['last'] ? form.map['last']['title'] : ''}}】</span>
					</div>
				</div>
				<div class="nxt" v-if="form.map['next']">
					<div class="cur els" @click="$router.push({name: '新闻详情页', params: {id: form.map.next.id}})">
						<span>下一篇【{{form.map['next'] ? form.map['next']['title'] : ''}}】</span>
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
					content: [],
					map: {
						
					}
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
		methods: {
			getData(){
				this.$http.rq({
					url: this.$commonApi.news + '/' + this.id,
					data: {
						type: 2
					}
				}).then(res => {
					if(res.code === 200){
						this.form = res.data
						this.form['content'] = JSON.parse(res.data['content'])
					}else{
						this.form = {}
					}
				})
			},
			addCount(){
				this.$http.rq({
					url: this.$commonApi.addCount,
					method: 'put',
					data: {
						type: 1,
						id: this.id
					}
				}).then(res => {
					
				})
			},
			// 返回文章类型
			returnType(i){
				return ['', '政治新闻', '旅游资讯', '旅游路线', '景区介绍', '旅游扶贫资讯', '旅游扶贫典型模式'][i]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.box{
		width: 1170px;
		margin: 0 auto;
		background-color: #ffffff;
		border: solid 1px #dfdede;
		margin-bottom: 30px;
		margin-top: 20px;
		.cap{
			margin-left: 22px;
			margin-top: 18px;
			font-size: 16px;
			color: #292929;
			i{
				font-size: 16px;
				color: #0569bf;
				margin-left: 20px;
			}
		}
		.info{
			margin-left: 20px;
			font-size: 14px;
			color: #999999;
			margin-top: 18px;
			
		}
		.content{
			padding: 30px 28px 30px 24px;
			p{
				color: #999999;
				font-size: 14px;
				line-height: 32px;
				text-indent: 28px;
			}
			img{
				margin: 20px 0;
				max-width: 100%;
				max-height: 100%;
			}
		}
		.pg{
			font-size: 14px;
			color: #0569bf;
			overflow: hidden;
			.pre{
				width: 541px;
				height: 57px;
				background-color: #ededed;
				float: left;
				text-align: center;
				line-height: 57px;
				margin: 30px 0 30px 25px;
			}
			.nxt{
				float: right;
				width: 541px;
				height: 57px;
				background-color: #ededed;
				text-align: center;
				line-height: 57px;
				margin: 30px 25px 30px 0;
			}
		}
	}
</style>