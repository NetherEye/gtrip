<template>
	<div class="imgDetail">
		<div class="box">
			<div class="cap">{{form.name}}旅游资讯</div>
			<div class="content">
				<div class="swiper" @mouseover="hideBtn('show')" @mouseout="hideBtn('hide')" v-if="form.imgs.length != 0">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(item, index) in form.imgs" :key="'swp' + index">
							<div class="swp-item">
								<img style="width: 100%;height: 100%;display: inline-block;" :src="item.src" />
							</div>

						</swiper-slide>
					</swiper>
					<div class="swiper-next" v-if="form.imgs.length != 0"></div>
					<div class="swiper-pre" v-if="form.imgs.length != 0"></div>
				</div>
			</div>
			<div class="new-item" style="width: 100%;margin-bottom: 10px;">
				<div class="title">
					<div class="title-l">
						<i>
							<em class="f-re"></em>
						</i><span>景区全貌介绍</span>
					</div>
				</div>
			</div>
			<div class="cent">
				{{form.info}}
			</div>
			<!--<div class="cent">
				<div class="new-item" style="width: 100%;margin-bottom: 10px;">
					<div class="title">
						<div class="title-l">
							<i>
								<em class="f-re"></em>
							</i><span>景区地图介绍</span>
						</div>
					</div>
				</div>
				<div class="flex">
					<div>
						<p><span>路线一：</span>新城票务中心——石牌坊——白陡路——湿地公园——陡坡塘瀑布——大瀑布—— 商品街——新城公交车乘车点。该路线全程步行时间约为5小时。此步行线路不到达天星桥景 区，由于到达天星桥景区无人行道，故需购买观光车票，方可到达。
						</p>
						<p><span>路线二：</span>新城票务中心——石牌坊——白陡路——湿地公园——陡坡塘瀑布——大瀑布—— 商品街——新城公交车乘车点。该路线全程步行时间约为5小时。此步行线路不到达天星桥景 区，由于到达天星桥景区无人行道，故需购买观光车票，方可到达。
						</p>
					</div>
					<div>
						<img src="../../assets/img/index/tj.png" alt="">
					</div>
				</div>
			</div>-->
			<div class="new-item" style="width: 100%;margin-bottom: 10px;" v-if="form.music && form.music.length != 0">
				<div class="title">
					<div class="title-l">
						<i>
							<em class="f-re"></em>
						</i><span>景区景点讲解</span>
					</div>
				</div>
				
			</div>
			<div class="pg" v-if="form.music && form.music.length != 0">
				<div class="ec-item2">
					<div class="img">
						<img :src="form.imgs[0].src" />
					</div>
					<div class="right">
						<div class="top">{{form.name}}景区</div>
						<!--<div class="center">
							天星桥景区是黄果树风景区中已全部开发的景区，景区规划面积7平方公里，开发游览面积4.5平方公里，分 为三个相连的 片区即：天星盆景区、天星洞景区和水上石林区。
						</div>-->
					</div>
				</div>
				<div class="line"></div>
				<ul>
					<li v-for="(item, index) in form.music" :key="index" class="flex jc-between">
						<div>
							<img class="icon cur" src="../../assets/img/index/bf02.png" alt="" @click="playAudio(index)">
							<audio :src='item.src' :ref="'audio' + index" style="display:none"></audio>
							<span>{{item.name}}</span>
						</div>
						<div style="text-align: center;">
							<img class="icon" src="../../assets/img/index/ej.png" alt="">
							<span>1</span>
						</div>
						<div>
							<img class="icon" src="../../assets/img/index/dz.png" alt="">
							<span>1</span>
						</div>
					</li>
				</ul>
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
				type: '',
				form: {
					imgs: [],
					music: []
				},
				mp3: ''
			}
		},
		created() {
			this.type = this.$route.params.id || ''
		},
		components: {

		},
		methods: {
			hideBtn(t) {
				if(t == 'hide') {
					document.querySelector('.swiper-next').className = 'swiper-next hide';
					document.querySelector('.swiper-pre').className = 'swiper-pre hide';
				} else {
					document.querySelector('.swiper-next').className = 'swiper-next show';
					document.querySelector('.swiper-pre').className = 'swiper-pre show';
				}
			},
			playAudio(index){
				this.$refs['audio' + index][0].play()
			}
		},
		watch: {
			type(n) {
				if(n == '黄果树大瀑布') {
					this.form = {
						imgs: [
							{
								src: require('../../assets/img/mack/reds/huangguoshu/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/huangguoshu/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/huangguoshu/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/huangguoshu/4.jpg')
							},
						],
						name: '黄果树大瀑布',
						leave: 'AAAAA',
						adress: '贵州省安顺市镇宁布依族苗族自治县',
						openTime: '8：00-18：00',
						info: '黄果树大瀑布高77.8米、宽101.0米，是中国最大的瀑布，也是世界著名大瀑布之一。 在三百多年前，中国著名的地理学家、旅行家徐霞客描述其“水由溪上石，如烟雾腾空，势其雄厉，所谓珠帘钩不卷，匹练挂遥峰，具不足拟其状也”。奔腾的河水自70多米高的悬崖绝壁上飞流直泻犀牛潭， 发出震天巨响。黄果树瀑布还有大水、中水、小水之分，常年流量中水为每秒20立方米，时间在九至十个月。流量不同，景观也不一样。大水时，流量达每秒1500立方米。瀑布激起的水珠，洒落在上面的黄果树街市，即使晴天，也要撑伞而行，故有"银雨洒金街"的称誉。中水时瀑布分成四支，各有形态和个性，从左至右，第一支水势最小，又撒得开；第二支水势最大，上下一般粗；第三支水势居二，上大下小；第四支水势居三，上窄下宽。小水时，瀑布分成的四支，铺展在整个岩壁上。黄果树瀑布独有奇特之处就是隐在大瀑布半腰上的水帘洞。水帘洞位于大瀑布四十米至四十七米的高度上，全长一百三十四米，有六个洞窗、五个洞厅、三股洞泉和六水帘洞个通道。在水帘洞，从各个洞窗中观赏到犀牛潭上的彩虹，这里的彩虹不仅是七彩俱全的双道而且是动态的，只要天晴，从上午九时至下午五时，都能看到，并随人的走动而变化和移动。前人说："天空之虹以苍天作衬，犀牛潭之虹以雪白之瀑布衬之"，故题"雪映川霞"。',
						music: [
							{
								src: require('../../assets/audio/黄果树大瀑布.mp3'),
								name: '黄果树大瀑布讲解'
							}
						]
						
					}
				}else if(n == '娄山关') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/loushanguan/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/loushanguan/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/loushanguan/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/loushanguan/4.jpg')
							}
						],
						name: '娄山关',
						leave: 'AAAA',
						adress: '贵州遵义市汇川区娄山关镇',
						openTime: '9:00-17:00',
						info: '娄山关亦称太平关，原名娄关，后称太平关。位于汇川区与桐梓县交界处，是川黔交通要道上的重要关口。关名的来历，源于古代对娄山山脉的称谓。它是大娄山脉的主峰，海拨1576米，南距遵义市50公里，在汇川区与桐梓县的交界处，北拒巴蜀，南扼黔桂，为黔北咽喉，兵家必争之地。古称天险。关上千峰万仞，重峦叠峰，峭壁绝立，若斧似戟，直刺苍穹，川黔公路盘旋而过。据《明史纪事本末》载，万历年间，总兵刘与播州土司杨应龙曾激战于此。人称黔北第一险要，素有“一夫当关，万夫莫开”之说。清咸丰、同治年间的黔北农民起义，都以全力占领此关。1935年（乙亥年）2月25日至26日，中国工农红军第一方面军与黔军大战娄山关前，经过反复争夺，歼灭黔军两个团。揭开了遵义战役的序幕。两次娄山关战役保证了遵义会议的顺利召开，是我国重要的“红色”基地。往南40公里是著名的遵义董酒厂。作为黔北第一要塞，娄山关景色秀丽，峭壁绝立，是众多游客的常去之地。毛泽东填有《忆秦娥·娄山关》词一首，描写红军指战员英勇鏖战的壮烈情景。现以行草手书体放大镌于高14米，宽25米的大理石碑上，益增雄关声色。',
						music: [{
							src: require('../../assets/audio/娄山关.mp3'),
							name: '娄山关讲解'
						}],
						
					}
				}else if(n == '四渡赤水纪念馆') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/siducishui/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/siducishui/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/siducishui/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/siducishui/4.jpg')
							},
						],
						name: '四渡赤水纪念馆',
						leave: 'AAAA',
						adress: '贵州省赤水习水县土城镇',
						openTime: '9:00-17:00',
						info: '四渡赤水纪念馆包括四渡赤水纪念馆主馆、中国女红军纪念馆、红军医院纪念馆、红九军团陈列馆、赤水河航运历史展览馆、赤水河盐文化陈列馆、土城古镇博物馆等馆群，以及毛泽东、周恩来住居，朱德住居，红军总司令部驻地，红军总参谋部驻地，红三军团司令部驻地，土城老街红军驻地，青杠坡战斗遗址，女红军街，土城渡口纪念碑和二郎滩、淋滩渡口等十多处全国重点文物保护单位。'
						,music: [{
							src: require('../../assets/audio/四渡赤水纪念馆.mp3'),
							name: '四渡赤水纪念馆讲解'
						}],
					}
				}else if(n == '遵义会址') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/zunyi/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/zunyi/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/zunyi/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/zunyi/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/zunyi/5.jpg')
							},
						],
						name: '遵义会址',
						leave: 'AAAA',
						adress: '贵州遵义市红花岗区遵义老城子尹路96号',
						openTime: '8：30-17：00',
						info: '民囯二十四年（1935年）1月初，中国工农红军长征到达遵义后，中华苏维埃共和国中央革命军事委员会总司部与一局（负责作点）即驻在这幢楼房里。1月15日至17日，遵义会议（即中共中央政治局扩大会议），就在主楼楼上原房主的小客厅举行。这次会议确立了以毛泽东为代表的新的中央领导集体。1961年，遵义会议会址被国务院列为第一批全国重点文物保护单位。2005年，被评为国家AAAA级旅游景区。2018年11月24日，入选“第三批中国20世纪建筑遗产项目”。',
						music: [{
							src: require('../../assets/audio/遵义会议.mp3'),
							name: '遵义会址讲解'
						}],
						
					}
				}else if(n == '息烽集中营') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/xifeng/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xifeng/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xifeng/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xifeng/4.jpg')
							},
						],
						name: '息烽集中营',
						leave: 'AAAA',
						adress: '贵州省贵阳市息烽县阳朗坝',
						openTime: '8:30–16:30，周一闭馆休息',
						info: '息烽集中营地形四面崇山峻岭，古树参天。山里有湖，有洞，地形隐蔽险要。息烽集中营本部控制面积约2平方千米，设监狱八栋四十三间。监房按“忠孝仁爱，信义和平”八字命名。称为“忠斋”、“孝斋”、“仁斋”等等。“义斋”为女监狱。称重庆望龙门看守所为“小学”、称重庆白公馆监狱为“中学”、息烽集中营所关押的则是从全国各地押来的“要犯”，称之为“大学”，而留学则是处死的黑话。',
						music: [{
							src: require('../../assets/audio/息烽集中营.mp3'),
							name: '息烽集中营讲解'
						}],
					}
				}else if(n == '安顺天龙屯堡') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/tianlong/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/tianlong/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/tianlong/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/tianlong/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/tianlong/5.jpg')
							},
						],
						name: '安顺天龙屯堡',
						leave: '',
						adress: '贵州省安顺市平坝区天龙镇',
						openTime: '08:00–18:30',
						info: '在天龙屯堡景区，随处可见身穿大襟宽袖，蓝色长袍的人，他们是地地道道的汉族人！在当地，他们被称作“屯堡人”，屯堡人是明朝洪武年间的屯军后裔，其历史可以追溯到明朝，明太祖朱元璋为加强其在西南的统治，在这里垒墙筑堡，驻军屯垦。现今的屯堡人都是数百年前从内地迁来的军士的后代。六百余年来，他们仍保留继承着明代的生活习俗、文化习俗。屯堡人的屯堡二字，实是二个概念——“屯”是指军屯，是军队传递书信，接待来往官员和部队家属居住的地方，“堡”是指商人和普通老百姓居住的地方。在那里可以见到构筑坚固的屯堡的屯堡群和高耸的碉堡。在碉堡的不同方向留三角形的观察窗眼。现在依旧保存完好，岿然屹立。至今，在古城堡上仍依稀可见一见旧时战乱留下的痕迹。屯堡村庄，大多沿袭了具有江南水乡风韵的石头村落建筑形式。数百年来，更朝迭代，世事变换，而屯堡人却在这黔境一隅顽强地坚守着他们祖先的传统保持着大明朝文化。他们的服饰被称为明代服饰的活标本。农历正月，村民坐冷板凳欢天喜地地耍灯、舞龙、划旱船，老年人照旧要去庙里上香拜佛——都是__的汉族文化。',
						music: [{
							src: require('../../assets/audio/安顺天龙屯堡.mp3'),
							name: '安顺天龙屯堡讲解'
						}],
					}
				}else if(n == '开阳十里画廊') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/shilihualang/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/shilihualang/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/shilihualang/3.jpg')
							},
						],
						name: '开阳十里画廊',
						leave: '',
						adress: '贵州省开阳县',
						openTime: '',
						info: '开阳十里画廊的主要观光景点是“十里画廊”八景，其中包括“旧林故渊”——凤凰寨、“古风河韵”——河湾平寨、“廊桥遗梦”——万寿古桥、“玉水金盆”——底窝八寨田园风光、 “土司古寨”——马头寨、“云山茶海”——百花富硒有机茶园、“水调歌头”——水头布依寨、“书香门第”——王车书法村等，民风纯朴、依山傍水。凤凰寨凤凰寨坐落于凤凰山之凤头，全寨以外婆桥与外界相连。凤凰寨背山临水，林木葱郁，位于“十里画廊”北端。“羁鸟恋旧林，池鱼思故渊”， 隐现于林荫之间布依民居寄托了无数人回归自我的田园梦想，凤凰寨“旧林故渊”因此得名。如今的凤凰寨旅游基础设施逐步完善，各农家乐点每到节假日异常受宠。南江平寨相传，三国诸葛亮南征时曾于此作战，当地现今仍有诸葛寨等地名，当地居民在修建房屋时也挖出过兵器等物。如今，金戈铁马的铁血萧瑟已换做了河畔农家的舒适安逸。一条连接两边柳绿河岸的索桥，静静地倒影在一湾清澈河水中。在浓密的古树树荫里，在当地古朴原始的阳戏歌声中,看着奔淌千年的河水，不由让人生出追忆古风铿锵,横舟河韵悠悠的思古情怀。每到夏季，荷花盛开，平寨更是热闹非凡，到此避暑游玩的不仅有贵阳市民，更有来自重庆、成都等外省的游客。'
						,music: [{
							src: require('../../assets/audio/开阳十里画廊.mp3'),
							name: '开阳十里画廊讲解'
						}],
					}
				}else if(n == '西江千户苗寨') {
					this.form = {
						showIndex: 0,
						imgs: [
							
							{
								src: require('../../assets/img/mack/reds/qianhu/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/qianhu/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/qianhu/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/qianhu/5.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/qianhu/6.jpg')
							},
								
						],
						name: '西江千户苗寨',
						leave: 'AAAAA',
						adress: '贵州省雷山县东北部',
						openTime: '08:00~16:00',
						info: '西江千户苗寨是一个保存苗族“原始生态”文化完整的地方，由10余个依山而建的自然村寨相连成片，是目前中国乃至全世界最大的苗族聚居村寨。它是领略和认识中国苗族漫长历史与发展之地。西江每年的苗年节、吃新节、十三年一次的牯藏节等均名扬四海，西江千户苗寨是一座露天博物馆，展览着一部苗族发展史诗，成为观赏和研究苗族传统文化的大看台。西江有远近闻名的银匠村，苗族银饰全为手工制作，其工艺具有极高水平。清乾隆年间，清政府为了管理苗疆，对苗族人民实行编户定籍，强行取消苗族子连父名的传统，用苗名的谐音来定汉姓，西江境内苗族的蒋、唐、侯、杨、董、宋、顾、龙、陆、李、梁、毛、陈、金、吴等姓就是由此而来。从秦汉到元、明、清初，雷公山大山区朝廷的设置虽有涉及，但郡县制、羁縻州对这一地区的统治极弱，甚至没有直接治理，在历史上多被称为“蛮荒之地”、“生苗”、“生界”等。雍正七年（1729年），贵州巡抚张广泗开辟苗疆，设“新疆六厅”，置丹江厅，下辖丹江卫和凯里卫，西江属丹江卫。乾隆三年（1738年），丹江卫设置了分土司，包括黄茅岭司、鸡讲司、乌叠司，鸡讲司就位于现西江西南附近的营上村，从此西江被列入中原政权的治理范围。'
						,music: [{
							src: require('../../assets/audio/西江苗寨.mp3'),
							name: '西江千户苗寨讲解'
						}],
					}
				}else if(n == '小七孔') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/5.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/6.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/7.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/8.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/xiaoqikong/9.jpg')
							}
						],
						name: '小七孔',
						leave: 'AAAAA',
						adress: '贵州荔波县西南部',
						openTime: '',
						info: '小七孔古桥小七孔古石桥桥长25米，桥面宽4米，拱高4米，建于清道光十五（1836）年，当时为沟通荔波至广西道路的重要桥梁。桥由麻石条砌成，桥身爬满藤蔓和蕨类；古色古香的桥下是绿得令人心醉的涵碧潭。两岸古木参天，巨大的虬枝沿着桥伸臂，宛如巨伞撑在桥上。这座漂亮的古石桥有四个美丽的神话故事。其中一个故事说，远古时候有一个名叫阿吉的瑶族的小伙子，他的右手只有一个指头，但是这个独指却有神奇的威力，能把坚硬如钢的岩石戳成烂泥一般绵软，更奇的是，过上一夜岩石又能恢复其坚硬本性。阿吉的寨子有七位天仙一般美丽的姑娘。阿吉和七位姑娘看见乡亲们为涵碧潭所阻，不能到对岸去赶场和耕种，便决心在涵碧潭上合力修建一座石桥。他们来到板崤山下，阿吉用独指戳石头，姑娘们便用变软的石头捏砌成桥，一个姑娘负责砌一孔。他们戳呀堆呀捏呀，一口气干了七七四十九天，终于堆捏成了一座七孔石桥。因五里之外另有一座大七孔石桥，本桥遂名小七孔桥。又因这座桥是由七位姑娘捏砌成的，所以它还有一个别称叫“七姑桥”。此桥看似单簿，但几百年来它经过多次洪水冲击却泰然屹立，迄今完好无损，可见其建筑工艺的精妙。',
						music: [{
							src: require('../../assets/audio/小七孔.mp3'),
							name: '小七孔讲解'
						}],
					}
				}else if(n == '夜郎洞') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/yelang/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/5.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/6.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/7.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/yelang/8.jpg')
							}
						],
						name: '夜郎洞',
						leave: '',
						adress: '贵州安顺市镇宁县黄果树风景区上游扁担山夜郎洞景区',
						openTime: '8:30-17:30',
						info: '夜郎洞风景名胜区是贵州省新近开发的风景名胜区，传说夜郎王曾居住于此而得名。景区位于贵州省镇宁县境内，与黄果树风景名胜区、石头寨景区紧紧相连，是世界上喀斯特地貌最集中的溶洞群景区，也是一个水旱相结合的溶洞。景区是由神奇壮观的夜郎洞、石花洞、蜂子岩洞等大大小小溶洞组成的溶洞群，以及天坑、燕峰斜崖等独特的喀斯特地貌共同筑成，总面积为48.6平方公里。',
						music: [{
							src: require('../../assets/audio/夜郎洞.mp3'),
							name: '夜郎洞讲解'
						}],
					}
				}else if(n == '贵州民族博物馆') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/minzubowuguan/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minzubowuguan/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minzubowuguan/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minzubowuguan/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minzubowuguan/5.jpg')
							},
						],
						name: '贵州民族博物馆',
						leave: '',
						adress: '',
						openTime: '',
						info: '贵州省民族博物馆是在于2007年建成的贵州民族文化宫大楼的基础上，于2012年正式挂牌成立的全国第五个省级民族博物馆，是全民所有的公益性事业单位，以保护、传承和弘扬贵州各民族优秀传统文化为己任，致力于各民族文物、文献的收藏整理、研究保护、展示交流和宣传教育。2013年被国家文物局评定为国家二级博物馆。贵州省民族博物馆座落于贵阳市迎宾大道——遵义路筑城广场的南广场，东依贵阳市的母亲河——南明河，西邻贵阳火车站，北与筑城广场北广场上的芦笙铜雕相呼应，环境特佳，交通便利，总占地面积13175㎡，大楼建筑与附属建筑容为一体，其中附属建筑占地面积约7000㎡，建筑面积5900㎡，大楼与附属总建筑面积37000㎡，地上24层，地下1层，主楼高99.9米，汲取了贵州侗寨鼓楼轮廓曲线的神韵，为三叉弧形堵式建筑，前弧形面有机衬托毛主席塑像，大楼六个面的每一面形状都构成“山”字形，建筑造型着力强调贵州、民族、文化三个内涵，颇具贵州地域及民族色彩。博物馆藏品主要以中国西南各少数民族，特别是贵州17个世居少数民族（苗族、布依族、侗族、土家族、彝族、仡佬族、水族等）的生产生活实物资料为主，以反映各民族历史和文化的传统服饰、银饰、面具、生产、生活用品、民族文献古籍等以及反映历史上各民族政治、经济、文化民俗的影（音）像资料。目前共有藏品14000余件套。贵州省民族博物馆目前常设两个基本陈列展，1、《贵州民族风情展》于2009年推出，位于博物馆大楼二楼前厅及三楼A、B、C三个厅，面积约2500㎡，展览分为序厅、我们从哪里来、我们的家园、我们的生活、我们到哪里去五个部分，生动介绍了贵州18个世居民族的生产生活和民族风情。2、《贵州少数民族文物精品展藏》2013年9月建成，设在大楼二十四层，面积350㎡，展出187件套最具贵州特色和亮点且兼具一定历史价值的珍贵少数民族服装及饰品。',
						music: [{
							src: require('../../assets/audio/贵州民族博物馆.mp3'),
							name: '贵州民族博物馆讲解'
						}],
					}
				}else if(n == '贵州民俗博物馆') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/minsubowuguan/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minsubowuguan/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minsubowuguan/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/minsubowuguan/4.jpg')
							},
						],
						name: '贵州民俗博物馆',
						leave: '',
						adress: '',
						openTime: '',
						info: '贵州民族民俗博物馆坐落于贵州省贵阳市白云区白云公园绿漪湖畔，为一座白色的雅致仿古院落。三层高的主楼石墙木窗；左侧是一排厢房，悬挂有资料图片，房前青松绿树；右侧是一条长廊，悬挂着馆长曾丽父亲曾宪阳收集藏品时所拍的照片，还放着纺车、酒缸、鱼篓等一干农具物事，颇有些名士居所的古韵。该馆紧邻中国风筝艺术馆、陈白秋原木艺术长廊和国际名茶楼等休闲旅游景点，是目前贵州省唯一的一座展示全省丰富多彩、历史悠久的民族民俗文化的场馆。主楼内共有7个展厅。一楼以少数民族服饰为主，有苗族、布依族、侗族等，每件服饰的背后都有优美的故事。一件件精美的民族服装在投射灯的照耀下，泛着浓浓的民族气息，在黑白背景的映衬下，更显精美别致。其中如贵州施洞型“破线绣”和月亮山型蜡染“牯脏衣”等苗绣极品更是多次在联合国教科文组织和中国国家博物馆的相关活动上展出过，获得了国内外专家的一致好评。2007年，这些服饰还登上了中国国际时装发布周的T台，进行了专场展演。二楼主要收藏贵州黔东南苗族的苗银饰品，也有其他少数民族的生活、劳作、打猎的工具，透露出浓厚的生活气息。这里有造型优美、精雕细琢的项圈；有无论体积和重量都有点“吓人”的耳环；有“雨用套装”马尾和棕编成的蓑衣，竹条编织的斗笠；有打猎用的铁砂枪，用大象皮制成的战斗用的盔甲；有竹条编成用于盛放食物的“饭盒”。每一件物品都是极尽巧工之能事，凝聚了民族同胞的智慧和热情。三楼是馆内刻意设置的互动区。在一个形似舞台的玻璃台上放置着织布机、风簸、纺车等器物，游客既可以在这里观看民族歌舞表演，也能自己亲手织布纺线，感受民族同胞的生活氛围。博物馆虽小，却因这满室的艺术粹宝以及它们身后无数的故事传说而显得格外充实满溢。踟蹰在一件件艺术精品间，大饱眼福与心福的同时，一种淡然的感伤也泛上心头，如此丰富的艺术想象力，如此高超的工艺奇技，今日却只能在博物馆中被展示、被怀念。',
						music: [{
							src: require('../../assets/audio/贵州民俗博物馆.mp3'),
							name: '贵州民俗博物馆讲解'
						}],
					}
				}
				else if(n == '贵州博物馆') {
					this.form = {
						showIndex: 0,
						imgs: [
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/1.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/2.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/3.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/4.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/5.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/6.jpg')
							},
							{
								src: require('../../assets/img/mack/reds/guizhoubowuguan/7.jpg')
							},
						],
						name: '贵州博物馆',
						leave: '',
						adress: '',
						openTime: '',
						info: '“菱石虽小，内蕴贵州文化千山千岛”“织锦龙纹，解码夜郎人群遗传基因”多元一体的菱石理念：理念一：响应山地环境能量远古贵州曾属浩瀚的“特提斯洋”，是世界古生物最早的家园。10亿年前从“武陵回旋”开始的18次升降运动和3次褶皱运动，最终形成了贵州今天山地占97%的地理环境。不平凡的环境自然蕴含了不平凡的能量。菱形巨石—载体切削—吸纳自然能源—坚固永恒的精神象征理念二：功能革新博物馆功能的革新使新馆从单一的收藏展览功能转变为社会活动中心。为此将其构架和形态相应转变，新馆复杂的活动功能压缩、重组为七大功能板块，其中收藏、展示、停车和管理四大组团为固定板块，而城市客厅及礼仪大厅、教育与培训、消费与公众服务三大组团为活动板块，这些组团通过室内的街道和室外的“非遗栈道”相连，形成一个吸纳环境能量的有机共生的未来博物馆。理念三：信息载体由于采用了鱼腮式外墙构造，因此新馆表皮可行使生态呼吸功能，由于在外墙中嵌入LED光电二极管灯，因此外皮可实现灯光效果的变幻和控制；由于外墙石材采用图案化电脑辅助切割，因此贵州自然历史文化图像信息可以保存在外墙中供人发掘。理念四：由传统“人类学”→主体人类学增设的民俗表演人员常住四层部分神圣之器物只向内部长者和特殊贵宾开放聘请民间民俗人士成为馆员常设民俗活动，部分向观众开放富于环境能量的山地贵州，早在宋朝就有王阳明的“龙场悟道”；抗战时中华民族曾来此“山地”寻求复兴的柱石；毛主席也曾在贵州发出“苍山如海、残阳如血”的感悟。这些是功能革新的源泉，也是设计理念的源泉。',
						music: [{
							src: require('../../assets/audio/贵州博物馆.mp3'),
							name: '贵州博物馆讲解'
						}],
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.box {
		width: 1170px;
		margin: 20px auto 30px;
		background-color: #ffffff;
		.cap {
			font-family: MicrosoftYaHei-Bold;
			font-size: 16px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 22px;
			letter-spacing: 0px;
			color: #292929;
		}
		.content {
			padding: 20px 0;
			.img {
				height: 406px;
				background-color: #0569bf;
				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.swiper {
				width: 1169px;
				height: 415px;
				background-color: #FFFFFF;
				position: relative;
				.swp-item {
					width: 1169px;
					height: 415px;
				}
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
		}
		.new-item .title .title-l .f-re {
			background: url(../../assets/img/index/jin.png) no-repeat center center;
		}
		.cent,
		.pg {
			font-family: MicrosoftYaHei;
			font-size: 14px;
			font-weight: normal;
			font-stretch: normal;
			line-height: 24px;
			letter-spacing: 0px;
			color: #999999;
			margin-bottom: 20px;
			.flex {
				// color:#0569bf;
				&>div {
					flex: 1;
					&>p {
						margin-bottom: 10px;
						&>span {
							color: #0569bf;
						}
					}
				}
				&>div:last-child {
					text-align: right;
				}
			}
		}
		.pg {
			padding: 20px;
			border: solid 1px #dfdede;
			.top {
				margin-bottom: 10px;
				font-family: MicrosoftYaHei;
				font-size: 16px;
				font-weight: normal;
				font-stretch: normal;
				line-height: 24px;
				letter-spacing: 0px;
				color: #000000;
			}
			.center {
				font-family: MicrosoftYaHei;
				font-size: 16px;
				font-weight: normal;
				font-stretch: normal;
				line-height: 31px;
				letter-spacing: 0px;
				color: #666666;
			}
			.ec-item2 {
				width: 100%;
				height: 120px;
				background-color: #ffffff;
				box-shadow: none;
				border: none;
				font-size: 14px;
				color: #292929;
				padding: 0;
				background: none;
				margin-bottom: 0;
			}
			.icon {
				width: 5%;
				margin-right: 5px;
				position: relative;
				top: 3px;
			}
			li {
				margin-bottom: 10px;
			}
			.line {
				width: 100%;
				height: 2px;
				background: url(../../assets/img/index/line.png) no-repeat center center;
				background-size: 100% 100%;
				margin: 10px 0;
			}
		}
	}
</style>