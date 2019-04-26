<template>
	<div class="box2">
		<div class="new-item" key="pic" v-if="type == '图览贵州'">
			<div class="td">
				<div class="td-item" v-for="(item, index) in c_picture">
					<div class="img-box cur" @click="$router.push({name: '图片详情', params: {id: item.id}})">
						<img :src="item.coverUrl" />
					</div>
					<div class="intro">{{item.title}}</div>
				</div>
			</div>
		</div>
		<div class="new-item" key="mov" v-if="type == '视频贵州'">
			<div class="td">
				<div class="td-item" v-for="(item, index) in c_video">
					<div class="img-box cur mov"  @click="$router.push({name: '视频详情', params: {id: item.id}})">
						<img :src="item.coverUrl" />
					</div>
					<div class="intro">百里杜鹃-普底数花峰</div>
				</div>
			</div>
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
				pageSize: 6,
				picture: [],
				video: []
			}
		},
		created() {
			if(this.$route.query.type){
				if(this.$route.query.type == '图览贵州'){
					this.pic(this.$route.query.type)
				}else{
					this.mov(this.$route.query.type)
				}
			}
		},
		methods: {
			go(name) {
				this.$emit('setNav', name)
				this.$router.push({
					name: name
				})
			},
			pic(n){
				this.$http.rq({
					url: this.$commonApi.picture,
					data: {
						type: 0,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize
					}
				}).then(res => {
					if(res.code === 200) {
						this.picture = res.data.row
						this.total = res.data.total
					} else {
						this.picture = []
						this.total = 0
					}
				})
			},
			mov(){
				this.$http.rq({
					url: this.$commonApi.video,
					data: {
						type: 0,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize
					}
				}).then(res => {
					if(res.code === 200) {
						this.video = res.data.row
						this.total = res.data.total
						
					} else {
						this.video = []
						this.total = 0
					}
				})
			},
			changePage(){
				if(this.$route.query.type == '图览贵州'){
					this.pic(this.$route.query.type)
				}else{
					this.mov(this.$route.query.type)
				}
			}
		},
		computed: {
			type() {
				return this.$route.query.type
			},
			c_picture() {
				if(this.picture.length === 0) {
					return []
				} else {
					if(this.picture.length % 3 === 0){
						return this.picture
					}
					
					let count = Math.abs(this.picture.length % 3 - 3);
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
					if(this.video.length % 3 === 0){
						return this.video
					}
					
					let count = Math.abs(this.video.length % 3 - 3);
					let arr = new Array(count).fill({
						stc: true
					})
					return this.video.concat(arr)
				}
			},
		},
		watch: {
			type(n) {
				this.total = 0
				this.pageNumber = 1
				if(n == '图览贵州'){
					this.pic(n)
				}else{
					this.mov(n)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.box2 {
		width: 900px;
		.new-item{
			width: 100%;
			.td{
				flex-wrap: wrap;
			}
		}
		.pageing{
			width: 962px;
			height: 64px;
			background-color: #f6f6f6;
			border: solid 1px #dfdede;
			margin-top: 20px;
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
	}
</style>