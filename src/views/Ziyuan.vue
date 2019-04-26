<template>
	<div class="qiye">
		<div class="container">
			<div class="top">
				<div class="new-item" style="width: 100%;margin-bottom: 3px;">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-fu"></em>
							</i><span>贫资源对接</span>
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
			<div class="pagein"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr1: [{
					"name": "普定县秀水旅游资源开发有限公司",
					"type": "安顺市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "安顺市普定县穿洞街道办秀水村",
					"man": "王鉴秋",
					"tel": 18908536363
				}, {
					"name": "普定县思源现代农业发展有限公司",
					"type": "安顺市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "安顺市普定县白岩镇沙戈村",
					"man": "马丽君",
					"tel": 13595300410
				}, {
					"name": "罗甸县黔腊坊生态农庄",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "罗甸县逢亭镇上隆村",
					"man": "黄中文",
					"tel": 18586854250
				}, {
					"name": "龙里县林芬农家乐食府",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "龙里县龙山镇龙山社区历家庄",
					"man": "王德林",
					"tel": 13765755032
				}, {
					"name": "平塘县夏黑子坛子鱼",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "平塘县满仙新区坛子鱼餐馆",
					"man": "夏化勇",
					"tel": 13765798791
				}, {
					"name": "三都县重阳孟获休闲山庄",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "普安镇重阳村",
					"man": "吴永银",
					"tel": 13885408068
				}, {
					"name": "雷山县西江侯家庄",
					"type": "黔东南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年8月",
					"ads": "雷山县西江镇博物馆后面",
					"man": "侯艳江",
					"tel": 13985273652
				}, {
					"name": "修文县四季农庄",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "修文县",
					"man": "蓝序朝",
					"tel": 13765808699
				}, {
					"name": "绥阳县凤凰度假村",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "绥阳县郑场镇凤凰村",
					"man": "张钰",
					"tel": 18108521916
				}, {
					"name": "绥阳县公馆别院",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "绥阳县温泉镇公平村",
					"man": "田春燕",
					"tel": 18786839786
				}, {
					"name": "绥阳县暮阳驿站",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "绥阳县温泉镇公平村",
					"man": "田春燕",
					"tel": 18786839786
				}, {
					"name": "绥阳县家和农庄",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "绥阳县洋川镇雅泉村",
					"man": "卢天权",
					"tel": 13595239527
				}, {
					"name": "播州区顺然农场",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "遵义市播州区枫香镇苟坝村",
					"man": "许池军",
					"tel": 18311523900
				}, {
					"name": "汇川区娄山古镇度假村",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "汇川区板桥镇",
					"man": "杨恩怀",
					"tel": 13312323600
				}, {
					"name": "务川县龙潭荷花山庄",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "务川自治县大坪街道龙潭村",
					"man": "申林",
					"tel": 13508522314
				}, {
					"name": "务川县龙潭仡寨山庄",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "务川自治县大坪街道龙潭村",
					"man": "申海洋",
					"tel": 18385270000
				}, {
					"name": "务川县栗园度假村",
					"type": "遵义市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "务川自治县泥高镇栗园村",
					"man": "谢辽",
					"tel": 15286048684
				}, {
					"name": "六枝迴龙人家",
					"type": "六盘水市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "六枝特区岩脚镇太和广场",
					"man": "钱国荣",
					"tel": 13708585799
				}, {
					"name": "六枝迎祥食府",
					"type": "六盘水市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "六枝特区郎岱镇迎祥广场",
					"man": "曹勇",
					"tel": 15185398666
				}, {
					"name": "七星关区周驿度假休闲山庄",
					"type": "毕节市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "毕节市杨家湾镇周驿茶场内",
					"man": "杨铄章",
					"tel": 13508578185
				}, {
					"name": "黄平县旧州镇五洋生态园农庄",
					"type": "黔东南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "旧州镇川心村",
					"man": "韦清荣",
					"tel": 13329654228
				}, {
					"name": "黄平县新州镇好家苑",
					"type": "黔东南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "新州镇学坝村",
					"man": "张关怀",
					"tel": 13508557512
				}, {
					"name": "镇远县舞阳镇老桂花村",
					"type": "黔东南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "镇远县四里桥桂花村",
					"man": "蒋世彪",
					"tel": 13638092383
				}, {
					"name": "丹寨县龙泉镇侗嘎佬餐馆",
					"type": "黔东南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "丹寨县龙泉镇万达小镇",
					"man": "李云记",
					"tel": 13765526586
				}, {
					"name": "龙里县聚龙堂肉饼鸡",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "龙里县龙山镇龙山社区坝上组",
					"man": "王忠",
					"tel": 18985079651
				}, {
					"name": "三都县桃溪谷田园游乐场",
					"type": "黔南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "普安镇普屯村",
					"man": "余忠虔",
					"tel": 15761195959
				}, {
					"name": "兴义市山翁青生态美食城",
					"type": "黔西南州",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "桔山街道办山翁青生态美食城（桔园村小龙井）",
					"man": "吴英",
					"tel": 18188234883
				}, {
					"name": "仁怀市杨家大院",
					"type": "仁怀市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "仁怀市长岗镇蔺田村 ",
					"man": "杨远帮",
					"tel": 13595099205
				}, {
					"name": "仁怀市凤凰山庄食府",
					"type": "仁怀市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "仁怀市盐津街道三百梯村",
					"man": "吴思星",
					"tel": 13035531888
				}, {
					"name": "仁怀市天水人家",
					"type": "仁怀市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": "仁怀市高大坪镇银水村",
					"man": "陈庆",
					"tel": 18183470329
				}, {
					"name": "仁怀市隆堡山庄",
					"type": "仁怀市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "五星级",
					"icome": "2017年12月",
					"ads": " 仁怀市鲁班街道隆堡社区",
					"man": "陈亮",
					"tel": 15085528228
				}, {
					"name": "七星关区仨合园",
					"type": "毕节市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年8月",
					"ads": "七星关区鸭池镇营脚村",
					"man": "邓昭生",
					"tel": 13308577333
				}, {
					"name": "黔西县杜鹃办事处乌骡山庄",
					"type": "毕节市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年8月",
					"ads": "黔西县杜鹃街道乌骡坝社区",
					"man": "潘安雄",
					"tel": 15186138272
				}, {
					"name": "织金县布依族土锅土鸡农家乐",
					"type": "毕节市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年8月",
					"ads": "马场镇马家屯村",
					"man": "马尧",
					"tel": 13518571230
				}, {
					"name": "织金县玉玺民族山庄",
					"type": "毕节市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年8月",
					"ads": "织金县双堰街道鱼山路",
					"man": "符丽",
					"tel": 13984783943
				}, {
					"name": "修文县贵阳银桥农家乐",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "修文县",
					"man": "李银桥",
					"tel": 13668508693
				}, {
					"name": "花溪区九龙茶苑",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "黔陶乡",
					"man": "安  刚",
					"tel": 13765046396
				}, {
					"name": "花溪区贵阳花溪黔陶云贵山庄",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "黔陶乡",
					"man": "胡云贵",
					"tel": 13985110555
				}, {
					"name": "花溪区水云间",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "青岩镇",
					"man": " 李康成",
					"tel": 13511973062
				}, {
					"name": "花溪区布衣人家",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "青岩镇",
					"man": "龙启秀",
					"tel": 13618576891
				}, {
					"name": "花溪区龙梦娜农家乐",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "青岩镇",
					"man": "龙德班",
					"tel": 13985002400
				}, {
					"name": "花溪区城南旧事",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "青岩镇",
					"man": "佘红平",
					"tel": 18085188297
				}, {
					"name": "花溪区贵阳花溪龙潭陈记冷水鱼餐饮店",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "马铃乡",
					"man": "陈林",
					"tel": 13985190351
				}, {
					"name": "花溪区贵阳花溪天星食府",
					"type": "贵阳市",
					"time": "乡村旅游经营户（农家乐）",
					"atype": "四星级",
					"icome": "2017年9月底",
					"ads": "花溪区",
					"man": "魏超",
					"tel": 13765818796
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

		.new-item {
			width: 100%;
		}

		.flex {
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.ec-item {
			height: 100%;
			background-size: 102% 102%;
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

	}
</style>