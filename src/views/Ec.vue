<template>
	<div class="ec">
		<div class="top">
			<div class="new-item" style="width: 100%;margin-bottom: 3px;">
				<div class="title">
					<div class="title-l">
						<i>
							<em class="f-fu"></em>
						</i><span>贫资源对接</span>
					</div>
					<div class="title-r cur" @click="$router.push({name: '扶贫资源对接'})">
						<i>更多</i>>>
					</div>
				</div>
			</div>
			<div class="flex">
				<div class="ec-item" v-for="(item, index) in arr1" :key="'c' + index">
					<div class="ec-item-name">
						<div class="n ft-bold"><i>名</i><i>称</i></div>
						<span>{{item.name}}</span>
					</div>
					<div class="line"></div>
					<div class="ec-item-site">

						<div class="n ft-bold"><i>所</i><i>在</i><i>市</i><i>州</i></div><span>{{item.type}}</span>
					</div>
					<div class="ec-item-site">

						<div class="n ft-bold">
							<i>类</i><i>别</i></div><span>{{item.time}}</span>
					</div>
					<div class="ec-item-site">

						<div class="n ft-bold">
							<i>质</i><i>量</i><i>等</i><i>级</i></div><span>{{item.atype}}</span>
					</div>
					<div class="ec-item-site">

						<div class="n ft-bold">
							<i>评</i><i>定</i><i>时</i><i>间</i></div><span>{{item.icome}}</span>
					</div>
					<div class="ec-item-item">
						<div class="n ft-bold"><i>联</i><i>系</i><i>地</i><i>址</i></div><span>{{item.ads}}</span>
					</div>
					<div class="ec-item-tel">
						<div class="n ft-bold"><i>联</i><i>系</i><i>人</i></div><span>{{item.man}}</span>
					</div>
					<div class="ec-item-tel">
						<div class="n ft-bold"><i>联</i><i>系</i><i>电</i><i>话</i></div><span>{{item.tel}}</span>
					</div>

				</div>

			</div>
		</div>
		<div class="bottom">
			<div class="new-item" style="width: 100%;margin-bottom: 3px;">
				<div class="title">
					<div class="title-l">
						<i>
							<em class="f-fu"></em>
						</i><span>贫示范企业</span>
					</div>
					<div class="title-r cur" @click="$router.push({name: '扶贫示范企业'})">
						<i>更多</i>>>
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
		<div class="diglog">
			<div>请填写您的资源</div>
			<div class="form">
				<div>
					<label>资源名称</label>
					<input type="text" name="" id="" v-model="diglog.name">
				</div>
				<div>
					<label>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</label>
					<input type="text" name="" id="" v-model="diglog.ads">
				</div>
				<div>
					<label style="position: relative;top: -52px;">需求事项</label>
					<textarea style="resize:none"  name="" id="" cols="50" rows="3" v-model="diglog.detial"></textarea>
				</div>
				<div>
					<label>联系方式</label>
					<input type="text" name="" id="" v-model="diglog.mode">
				</div>
				<p>填写完成后，会提交后台审核，审核后会展示在该栏目。</p>
				<div>
					<label>联系我们</label>
					<input type="tel" readonly="readonly" name="" id="" value="0851-123456789">
				</div>
				<div><input @click="submit" type="submit" value="提交"></div>
			</div>
		</div>
		<div style="height: 40px;"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				diglog:{
					name:'',
					ads:'',
					detial:'',
					mode:''
				},
				arr1: [{
					"name": "林苑酒楼",
					"type": "贵阳市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": 42948,
					"ads": "贵阳市花溪区青岩镇翰",
					"man": "余星林 ",
					"tel": 15180718737
				}, {
					"name": "雅然居",
					"type": "贵阳市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "贵阳市乌当区偏坡布依族乡",
					"man": "罗琴",
					"tel": 13985155086
				}, {
					"name": "姊妹楼",
					"type": "贵阳市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "贵阳市乌当区偏坡布依族乡",
					"man": "王鹏飞",
					"tel": 18585431857
				}, {
					"name": "听涛轩",
					"type": "六盘水市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "六盘水市盘州",
					"man": "骆  蕊",
					"tel": " 0858-3686860、15186263388"
				}, {
					"name": "海坪食常聚农家乐",
					"type": "六盘水市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "六盘水市水城县",
					"man": "石勇",
					"tel": 15519801678
				}, {
					"name": "以朵桃源居生态农庄",
					"type": "六盘水市",
					"time": "农家乐",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "六盘水市水城县",
					"man": "罗艳",
					"tel": 13329683977
				}],
				arr: [{
					"name": "市文旅投公司零星工程",
					"item": "景区带动旅游扶贫工程",
					"time": "2018-09",
					"type": "直接带动",
					"mode": "带动直接就业"
				}, {
					"name": "龙头公司稻田养虾",
					"item": "旅游资源开发扶贫工程",
					"time": "2018-06",
					"type": "间接带动",
					"mode": "将房屋、土地、人力等自有资源折算入股分红"
				}, {
					"name": "贵州帝景旅游开发有限公司",
					"item": "旅游结对帮扶扶贫工程",
					"time": "2018-03",
					"type": "直接带动",
					"mode": "带动直接就业"
				}
				]
			}
		},
		methods:{
			submit(){
				for (const key in this.diglog) {
					this.diglog[key] = ''
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.top {
		width: 1170px;
		margin: 0 auto;
		margin-top: 30px;

		.ec-item {
			height: 100%;
			background-size: 102% 102%;
			margin-bottom: 20px;
		}

		.flex {
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}

	.bottom {
		width: 1170px;
		margin: 0 auto;
		margin-top: 10px;
	}

	.ec-item {
		margin-bottom: 20px;

		&>div {
			margin-bottom: 12px;
		}
	}

	.line {
		height: 2px;
		background: url(../assets/img/index/line.png) no-repeat center center;
	}

	.n {
		width: 80px;
	}

	.ec-item {
		padding: 10px 28px;
	}

	.diglog {
		width: 400px;
		height: 400px;
		position: fixed;
		bottom: 60px;
		right: 20px;
		z-index: 10000;
		background-color: #ffffff;
		-webkit-box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.15);
		box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.15);
		border: solid 1px #dfdede;
		font-size: 14px;
		color: #292929;
		padding: 20px 28px 0;
		text-align: center;
		div{
			margin-bottom: 15px;
			label{
				margin-right: 15px;
			}
			input,textarea{
				width: 79%;
			}
			input[type="submit"]{
				border: none;
				width: 50%;
				height: 40px;
				line-height: 40px;
				background-color: #0569bf;
				color: #fff;
				cursor: pointer;
			}
			input[type="tel"]{
				border: none;
				outline: none;
				font-weight: bold;
				color: #0569bf;
			}
		}
		p{
			width: 350px;
			font-size: 14px;
			letter-spacing: 0px;
			color: #999999;
			margin-bottom: 15px;
		}
	}
</style>