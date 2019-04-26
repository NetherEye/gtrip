<template>
	<div class="cont">
		<div class="box">
			<li class="cur" @click="$router.push({name: '新闻详情页', params: {id: item.id}})" v-for="(item, index) in arr" :key="'re' + index">
				<i></i>
				<span class="els">{{item.title}}</span>
				<div class="line"></div>
			</li>
			
		</div>
		<div class="pageing flex jc-center al-center">
			<Page :total="total" :pageSize="pageSize" :current.sync="pageNumber" @on-change="changePage" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				total: 0,
				pageNumber: 1,
				pageSize: 10,
				arr: []
			}
		},
		created() {
			if(this.$route.query.type){
				this.getData(this.$route.query.type)
			}
		},
		methods: {
			getData(m){
				
				let type = ['', '政治新闻', '旅游资讯', '旅游路线', '景区介绍'].indexOf(m);
				
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: type,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize
					}
				}).then(res => {
					if(res.code === 200) {
						this.arr = res.data.row
						this.total = res.data.total
					} else {
						this.arr = []
						this.total = 0
					}
				})
			},
			changePage(){
				this.getData(this.$route.query.type)
			}
		},
		computed: {
			type(){
				return this.$route.query.type
			}
		},
		watch: {
			type(m){
				this.total = 0
				this.pageNumber = 1
				this.getData(m)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.cont {
		width: 962px;
		.box{
			width: 962px;
			height: 456px;
		}
		.pageing{
			width: 962px;
			height: 64px;
			background-color: #f6f6f6;
			border: solid 1px #dfdede;
			margin-top: 20px;
		}
	}
</style>