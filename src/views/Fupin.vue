<template>
	<div class="index">
		<div class="container">
			<div class="box">
				<div class="rows">
					<div class="title">旅游扶贫简介及指标</div>
					<div>贵州省早在1991年提出“旅游扶贫”概念的省份,旅游扶贫经验极其丰富。早在2005年前就受到国际社会广泛关注,应用西方社区参与理念,开发了“巴拉河乡村旅游示范项目”,同时,基于本土文化与制度而探索的“西江模式”扶贫成效非常显著。
贵州凉爽的气候、秀丽的风景、独特的民族风情,正逐渐为中外游客喜爱。开发乡村旅游,将景区景点、现代农业、民俗文化、餐饮住宿等相关产业有机融合,已成为贵州脱贫攻坚的有效路径。
伴随贵州旅游产业“井喷式”发展,众多鲜为人知的特色村寨开始吸引中外游客的目光,众多贫穷的农家因发展特色乡村旅游走向富裕。目前,贵州省开展乡村旅游的自然村寨突破3000个,其中有517个村被国家列为乡村旅游扶贫重点村。2016年,100个旅游景区累计接待游客2.55亿人次,实现景区内收入1521.45亿元,带动全省29.4万建档立卡贫困人口增收脱贫。

					</div>
				</div>
				<div class="row">
					<div class="map">
						<img id="d" class="cur" src="../assets/img/sifang/map.png" alt="">
						<img class="imgs" @mouseover="t('0')" @mouseout="ts('0')" src="../assets/img/map/1.png" alt="">
						<img class="imgs" @mouseover="t('1')" @mouseout="ts('1')" src="../assets/img/map/2.png" alt="">
						<img class="imgs" @mouseover="t('2')" @mouseout="ts('2')" src="../assets/img/map/3.png" alt="">
						<img class="imgs" @mouseover="t('3')" @mouseout="ts('3')" src="../assets/img/map/4.png" alt="">
						<img class="imgs" @mouseover="t('4')" @mouseout="ts('4')" src="../assets/img/map/5.png" alt="">
						<img class="imgs" @mouseover="t('5')" @mouseout="ts('5')" src="../assets/img/map/6.png" alt="">
						<img class="imgs" @mouseover="t('6')" @mouseout="ts('6')" src="../assets/img/map/7.png" alt="">
						<img class="imgs" @mouseover="t('7')" @mouseout="ts('7')" src="../assets/img/map/8.png" alt="">
						<img class="imgs" @mouseover="t('8')" @mouseout="ts('8')" src="../assets/img/map/9.png" alt="">
					</div>
					<div class="flex">
						<div class="ec-item" style="margin-top: 160px;">
							<div class="ec-item-name">
								<div>{{listData.city}}</div>
							</div>
							<div class="line"></div>

							<div>
								<div class="ec-item-item">
									<p>总人口：{{listData.people}}人</p>
									<p>贫困村数目：{{listData.number}}个</p>
									<p>贫困人口：{{listData.personal}}人</p>
								</div>
								<div class="ec-item-item">
									<p>旅游扶贫项目数：{{listData.project}}个</p>
									<p>带动就业人口：{{listData.Obtain}}人</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="bottom">
				<div class="new-item" style="width: 100%;margin-bottom: 3px;">
					<div class="title">
						<div class="title-l">
							<i :class="{active: active}">
							<em class="f-re"></em>
						</i><span style="margin-right: 20px;" @click="change">旅游扶贫资讯</span>
							<i :class="{active: actives}">
							<em class="f-re"></em>
						</i><span style="margin-right: 20px;" @click="changes">旅游扶贫典型模式</span>
						</div>
					</div>
				</div>
				<div v-if="condition" key="one">
					<div class="ec-item2 cur" v-for="(item, index) in ziXun" @click="$router.push({name: '新闻详情页', params: {id: item.id}})">
						<div class="img">
							<img :src="item.coverUrl" />
						</div>
						<div class="right">
							<div class="top">
								{{item.title}}
							</div>
							<div class="center">

							</div>
							<div class="time">
								发布时间：{{item.inputTime}} 作者：{{item.author}} 来源：{{item.source}} 浏览次数：{{item.count}}
							</div>
						</div>
					</div>

				</div>
				<div v-else key="two">
					<div class="ec-item3 cur" v-for="(ite, i) in dianXing" :key="i" ref="cl" @click="$router.push({name: '新闻详情页', params: {id: ite.id}})">
						<div class="img">
							<img :src="ite.coverUrl" />
						</div>
						<div class="right">
							<div class="top">{{ite.title}}</div>
							<div class="center">{{ite.center}}</div>
							<div class="time">发布时间：{{ite.inputTime}} 作者：{{ite.author}} 来源：{{ite.source}} 浏览次数：{{ite.count}}</div>
						</div>
					</div>
				</div>
			</div>
			<div style="height: 70px;"></div>
		</div>
	</div>
</template>

<script>
	const gap = 10;
	let leftH = 0;
	let rightH = 0;
	export default {
		data() {
			return {
				name:'指标一',
				active:false,
				actives:true,
				condition:true,
				item:[],
				listData:{
					city:'贵阳市',
					people:'186212',
					number:'86',
					personal:'12424',
					project:'55',
					Obtain:'164'
				},
				ziXun: [],
				dianXing: []
			}
		},
		mounted() {

		},
		created() {
			if(this.condition) {
				this.getData1()
			} else {
				this.getData2()
			}
		},
		methods: {
			getData1() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 5,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize,
					}
				}).then(res => {
					if(res.code === 200) {
						this.ziXun = res.data.row
						this.total = res.data.total
					} else {
						this.ziXun = []
						this.total = 0
					}
				})
			},
			getData2() {
				this.$http.rq({
					url: this.$commonApi.news,
					data: {
						type: 6,
						pageNumber: this.pageNumber,
						pageSize: this.pageSize,
					}
				}).then(res => {
					if(res.code === 200) {
						this.dianXing = res.data.row
						this.total = res.data.total
					} else {
						this.dianXing = []
						this.total = 0
					}
				})
			},
			change() {
				this.condition = true
				this.active = false
				this.actives = true
				this.pageNumber = 1
				this.total = 1
				this.getData1()
				
			},
			changes() {
				this.condition = false
				this.active = true
				this.actives = false
				this.pageNumber = 1
				this.total = 1
				this.getData2()
				this.$nextTick(() => {
					console.log(this.$refs.cl);
				})

			},
			t(i){
				document.querySelectorAll('.imgs')[i].className += ' trans';
					const data = [{
						city:'毕节市',
						people:'2579979',
						number:'1135',
						personal:'567008',
						project:'999',
						Obtain:'7983'
					},{
						city:'六盘水市',
						people:'1207004',
						number:'397',
						personal:'229876',
						project:'564',
						Obtain:'11092'
					},{
						city:'黔西南苗族自治州',
						people:'998905',
						number:'395',
						personal:'201103',
						project:'322',
						Obtain:'5621'
					},{
						city:'安顺市',
						people:'1125875',
						number:'454',
						personal:'212100',
						project:'374',
						Obtain:'2092'
					},{
						city:'黔南布衣族苗族自治州',
						people:'1965810',
						number:'692',
						personal:'460394',
						project:'220',
						Obtain:'4219'
					},{
						city:'黔东南苗族侗族自治州',
						people:'2054125',
						number:'1485',
						personal:'637681',
						project:'870',
						Obtain:'6758'
					},{
						city:'贵阳市',
						people:'186212',
						number:'86',
						personal:'12424',
						project:'55',
						Obtain:'164'
					},{
						city:'铜仁市',
						people:'1157217',
						number:'783',
						personal:'211037',
						project:'739',
						Obtain:'2148'
					},{
						city:'遵义市',
						people:'3647090',
						number:'924',
						personal:'567008',
						project:'999',
						Obtain:'7983'
					}]
					this.listData = data[i]
			},
			ts(i){
				document.querySelectorAll('.imgs')[i].className = 'imgs ';
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.container {
		margin: 0 auto;
		width: 1173px;
		overflow: hidden;
		.box {
			padding: 15px;
			margin-top: 30px;
			border: solid 1px #dfdede;
		}
		.row {
			display: flex;
			justify-content: space-between;
			overflow: hidden;
			.map {
				position: relative;
				flex: 1;
				text-align: center;
				width: 533px;
				height: 524px;
				.trans{
					transform: scale(1.1)
				}
				img{
					cursor: pointer;
					position: absolute;
				}
				img:nth-child(1){
					position: inherit;
				}
				img:nth-child(2){
					top: 187px;
					left: 16px;
				}
				img:nth-child(3){
					top: 278px;
					left: 40px;
				}
				img:nth-child(4){
					bottom: 6px;
					left: 60px;
				}
				img:nth-child(5){
					bottom: 80px;
    				left: 132px;
				}
				img:nth-child(6){
					bottom: 55px;
    				right: 146px;
				}
				img:nth-child(7){
					bottom: 93px;
    				right: 30px;
				}
				img:nth-child(8){
					bottom: 174px;
    				left: 214px;
				}
				img:nth-child(9){
					top: 46px;
    				right: 36px;
				}
				img:nth-child(10){
					top: 35px;
    				right: 158px;
				}
			}
			.ec-item {
				margin-bottom: 20px;
				.ec-item-item {
					flex: 1;
					font-family: MicrosoftYaHei;
					font-size: 14px;
					font-weight: normal;
					font-stretch: normal;
					line-height: 29px;
					letter-spacing: 0px;
					color: #999999;
				}
			}
			.flex {
				flex: 1;
				justify-content: space-between;
				flex-wrap: wrap;
				.line {
					height: 2px;
					background: url(../assets/img/index/line.png) no-repeat center center;
				}
			}
		}
		.rows {
			margin-bottom: 20px;
			font-family: MicrosoftYaHei;
			font-size: 14px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 24px;
			letter-spacing: 0px;
			color: #999999;
			.title {
				margin-bottom: 10px;
				font-size: 16px;
				line-height: 19px;
				color: #292929;
			}
		}
		.bottom {
			margin-top: 20px;
			.title {
				margin-bottom: 10px;
			}
			.title-l {
				cursor: pointer;
				.active {
					background: none;
				}
				.f-re {
					background: url(../assets/img/index/lv.png) no-repeat center center;
				}
			}
			.center {
				margin: 10px auto;
				font-family: MicrosoftYaHei;
				font-size: 14px;
				font-weight: normal;
				font-stretch: normal;
				line-height: 24px;
				letter-spacing: 0px;
				color: #666666;
			}
			.time {
				font-family: MicrosoftYaHei;
				font-size: 14px;
				font-weight: normal;
				font-stretch: normal;
				line-height: 24px;
				letter-spacing: 0px;
				color: #999999;
			}
		}
	}
</style>