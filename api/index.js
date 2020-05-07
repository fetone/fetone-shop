import network from './network.js'
const base_url = 'http://127.0.0.1:8082'

export default {
	// 获取首页轮播图
	getSwiper: () => network.get(base_url + '/api/getlunbo'),
	// 获取商品列表
	getGoodsList: (data) => network.get(base_url + '/api/getgoods', data),
	// 获取商品列表
	getImgCategory: () => network.get(base_url + '/api/getimgcategory'),
	// 获取社区图片的数据
	getCommImages: (cateid) => network.get(base_url + '/api/getimages/' +cateid),
	// 获取资讯列表
	getNewsList: () => network.get(base_url + '/api/getnewslist'),
	// 获取资讯详情
	getNewsDetail: (newsid) => network.get(base_url + '/api/getnew/' + newsid),
	// 获取商品详情介绍
	getGoodsDetail: (newsid) => network.get(base_url + '/api/goods/getdesc/' + newsid),
	// 获取详情轮播图
	getDetailImg: (imgid) => network.get(base_url + '/api/getthumimages/' + imgid),
	// 获取商品详情参数
	getGoodsInfo: (id) => network.get(base_url + '/api/goods/getinfo/' + id),
	// 获取商品详情内容
	getGoodsContent: (id) => network.get(base_url + '/api/goods/getdesc/' + id)
}