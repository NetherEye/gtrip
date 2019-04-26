<template>
	<div class="index">
		<div class="container">
			<div style="height: 30px;"></div>
			<div class="tabs">
				<div class="tab-left cur" @click="tab = '知方圆'" :class="tab == '知方圆' ? 'a-tab' : ''">
					<span>一机*知方圆</span>
					<span>一个移动设备，就可以获取四方旅游全面的资讯</span>
				</div>
				<div class="tab-right cur" @click="tab = '发四方'" :class="tab == '发四方' ? 'a-tab' : ''">
					<span>一机*发四方</span>
					<span>一个移动设备，就可以发布个人、团体的需求</span>
				</div>
			</div>
			<div style="height: 30px;"></div>
			<div class="content" v-if="tab == '知方圆'" key="content1">
				<div class="c-top">
					<div class="img">
						<img src="../assets/img/sifang/14.png"/>
					</div>
					<div class="txt">
						<div class="pill">概要</div>
						<p style="text-indent: 28px;">该部分改依托“互联网+旅游服务”，通过一部智能手机，全面覆盖游客在贵州旅游的游前、游中、游后的各项需求，满足和提升游客吃住行游娱购的需求和体验，并通过诚信体系、投诉平台的建设，让游客全流程省心、安心、放心。</p> 
						<p style="text-indent: 28px;">在旅游前，游客可通过VR看景区全景、直播等功能提前预览景点情况，提前智能规划好旅游线路。同时，智能客服还围绕精品线路为游客提供一站式咨询服务。览黔景，知四方，上贵客游为以下内容：</p>
					</div>
				</div>
				<div style="height: 30px;"></div>
				<div class="c-midden">
				</div>
				<div style="height: 30px;"></div>
				<!--<div class="c-bottom">
					<div class="bt">知四方（这个标题可以随便的编辑的）</div>
					<div class="art">
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						
					</div>
					<div class="ewm">
						
					</div>
				</div>-->
				<div style="height: 30px;">
					
				</div>
			</div>
			
			<div class="content" v-else key="content2">
				<div class="c2-top">
					
				</div>
				<div style="height: 30px;"></div>
				<div class="c2-midden">
				</div>
				<div style="height: 30px;"></div>
				<!--<div class="c-bottom">
					<div class="bt">知四方（这个标题可以随便的编辑的）</div>
					<div class="art">
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						<p>正文，这里的内容运营、营销可以随便的编辑的， 提供文字过来就可以了</p>
						
					</div>
					<div class="ewm">
						
					</div>
				</div>-->
				<div style="height: 30px;">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: '知方圆'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.container {
		margin: 0 auto;
		width: 1173px;
		overflow: hidden;
		.tabs {
			display: flex;
			justify-content: space-between;
			.tab-left,
			.tab-right {
				width: 582px;
				height: 128px;
				background-color: #ffffff;
				border: solid 1px #f2f0f0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				&>span:nth-child(1) {
					font-size: 18px;
					letter-spacing: 9px;
					color: #292929;
					margin-bottom: 14px;
				}
				&>span:nth-child(2) {
					font-size: 12px;
					letter-spacing: 6px;
					color: #292929;
				}
				
			}
			.a-tab{
				background-color: #0569bf;
				border: none;
				span{
					color: #ffffff!important;
				}
			}
		}
		.content{
			.c-top{
				width: 1169px;
				background-color: #ffffff;
				.img{
					height: 415px;
				}
				.txt{
					position: relative;
					font-size: 14px;
					line-height: 28px;
					color: #999999;
					padding-left: 124px;
					height: 109px;
					padding-top: 16px;
					.pill{
						font-size: 16px;
						color: #ffffff;
						width: 87px;
						height: 161px;
						background-color: #0569bf;
						position: absolute;
						left: 20px;
						bottom: 0;
						text-align: center;
						line-height: 161px;
					}
				}
			}
			.c-midden{
				width: 1165px;
				height: 369px;
				background: url(../assets/img/sifang/13.png) no-repeat center center;
				background-size: 100% 100%;
			}
			.c-bottom{
				width: 1165px;
				height: 471px;
				background: url(../assets/img/sifang/bj.png) no-repeat center center;
				background-size: 100% 100%;
				background-color: #ffffff;
				position: relative;
				.bt{
					font-size: 16px;
					color: #333333;
					position: absolute;
					top: 52px;
					left: 71px;
				}
				.art{
					font-size: 14px;
					line-height: 24px;
					color: #666666;
					position: absolute;
					top: 88px;
					left: 71px;
				}
				.ewm{
					width: 209px;
					height: 184px;
					background: url(../assets/img/sifang/erwema.png) no-repeat center center;
					background-size: 100% 100%;
					position: absolute;
					top: 212px;
					left: 157px;
					position: relative;
				}
				.ewm:after{
					content: '微信扫码进入小程序';
					font-size: 14px;
					color: #666666;
					position: absolute;
					bottom: -36px;
					left: 38px;
				}
			}
			.c2-top{
				width: 1165px;
				height: 372px;
				background-color: #ffffff;
				background: url(../assets/img/sifang/c216.png) no-repeat center center;
				background-size: 100% 100%;
			}
			.c2-midden{
				width: 1165px;
				height: 372px;
				background-color: #ffffff;
				background: url(../assets/img/sifang/c217.png) no-repeat center center;
				background-size: 100% 100%;
			}
		}
	}
	img{
		display: inline-block;
		width: 100%;
		height: 100%;
		
	}
</style>