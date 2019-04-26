let url = '/proxy';

export default {
	carouselOrHot: url + '/api/before/newsCarouselandHot', // 获取热门 or 轮播
	news: url + '/api/before/news', // 获取热门 or 轮播
	addCount: url + '/api/before/updateCount', // 增加阅读
	picture: url + '/api/before/picture', // 图片
	video: url + '/api/before/video', // 视频
}