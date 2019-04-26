<template>
	<div class="foot flex">
		<p>Powered by XXXXXX Copyright © 2019-2020  www.guikeyun.com, All Rights Reserved</p>
		<p>ICP备案号：1212323234343434</p>
		<p>主办：贵州紫光科技信息技术有限公司</p>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.foot{
		height: 160px;
		background-color: #2e2e2e;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
		justify-content: space-between;
		&>p{
			text-align: center;
			color: #ffffff;
			font-size: 16px;
		}
	}
</style>