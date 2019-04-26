<template>
	<div class="qiye">
		<div class="container">
			<div class="top">
				<div class="new-item" style="width: 100%;margin-bottom: 3px;">
					<div class="title">
						<div class="title-l">
							<i>
							<em class="f-fu"></em>
						</i><span>贫示范企业</span>
						</div>
					</div>
				</div>
				
			<div v-for="(ite, index) in arr" :key="index">
				<div class="ec-item2">
					<div class="img">
						<img src="../assets/img/index/banner.png" />
					</div>
					<div class="right">
						<div class="r-top">
							<div class="v">
								<div class="ft-bold"><i>项</i><i>目</i><i>名</i><i>称</i></div><span>{{ite.name}}</span>
							</div>
							<div class="v">
								<div class="ft-bold"><i>九</i><i>项</i><i>工</i><i>程</i></div><span>{{ite.item}}</span>
							</div>
							<div class="v">
								<div class="ft-bold"><i>开</i><i>始</i><i>工</i><i>作</i><i>时</i><i>间</i></div><span>{{ite.time}}</span>
							</div>
						</div>
						<div class="line"></div>
						<div class="r-top" style="margin-top: 0;">
							<div class="v">
								<div class="ft-bold"><i>带</i><i>动</i><i>类</i><i>型</i></div><span>{{ite.type}}</span>
							</div>
							<div class="v">
								<div class="ft-bold"><i>带</i><i>动</i><i>增</i><i>收</i><i>方</i><i>式</i></div><span>{{ite.mode}}</span>
							</div>
						</div>

					</div>
				</div>

			</div>
				</div>
			<div class="pagein"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					"name": "息烽香山农业开发公司（除草工）",
					"item": "旅游+产业扶贫工程",
					"time": "2018-12",
					"type": "直接带动",
					"mode": "带动直接就业"
				}, {
					"name": "贵州帝景旅游开发有限公司",
					"item": "旅游+产业扶贫工程",
					"time": "2018-02",
					"type": "间接带动",
					"mode": "通过政府、企业低价或无偿提供的停车场、商铺等经营性资产增加收入"
				}, {
					"name": "市文旅投公司零星工程",
					"item": "景区带动旅游扶贫工程",
					"time": "2018-08",
					"type": "直接带动",
					"mode": "带动直接就业"
				}, {
					"name": "贵州帝景旅游开发有限公司",
					"item": "旅游结对帮扶扶贫工程",
					"time": "2018-03",
					"type": "直接带动",
					"mode": "带动直接就业"
				}, {
					"name": "贵州帝景旅游开发有限公司",
					"item": "旅游结对帮扶扶贫工程",
					"time": "2018-03",
					"type": "直接带动",
					"mode": "带动直接就业"
				}, {
					"name": "贵州帝景旅游开发有限公司",
					"item": "旅游+产业扶贫工程",
					"time": "2018-03",
					"type": "间接带动",
					"mode": "通过政府、企业低价或无偿提供的停车场、商铺等经营性资产增加收入"
				}, {
					"name": "容山茶叶有限公司",
					"项目主体": "杜乾维",
					"item": "旅游+产业扶贫工程",
					"time": "2018-03",
					"type": "直接带动",
					"mode": "带动直接就业"
				}]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.container {
		margin: 0 auto;
		width: 1173px;
		.top {
			margin-top: 30px;
		}
	}
</style>