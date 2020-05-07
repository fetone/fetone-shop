<template>
	<view class="home">
		<swiper autoplay interval=2000 circular indicator-dots indicator-color="rgba(255,255,255,0.7)" indicator-active-color="#fff">
			<swiper-item v-for="(item) in swipers">
				<image :src="item.img" :key="item.id"></image>
			</swiper-item>
		</swiper>
		<!-- 导航条 -->
		<navBar></navBar>
		<!-- 推荐商品 -->
		<view class="rec-title">
			推荐商品
		</view>
		<goodsList :goods="goods" @goToGoodsDetail="goToGoodsDetail"></goodsList>
	</view>
</template>

<script>
	import navBar from '../../components/navBar/navBar.vue'
	import goodsList from '../../components/goodsList/goodsList.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				swipers: [],
				goods: []
			}
		},
		onLoad() {
			this.getSwiper()
			this.getGoods()
		},
		methods: {
			// 获取轮播图数据
			getSwiper () {
				this.$api.getSwiper()
				.then((res) => {
					this.swipers = res.message
				})
			},
			// 获取商品列表
			getGoods() {
				this.$api.getGoodsList({pageindex: 1})
				.then((res) => {
					this.goods = res.message
				})
			},
			// 跳转详情页
			goToGoodsDetail(id) {
				uni.navigateTo({
					url:'../goodsDetail/goodsDetail?id=' + id
				})
			}
		},
		components: {
			navBar,
			goodsList
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 100%;
			height: 380rpx;
			image{
				width: 100%;
				height: 110%;
			}
		}
		.rec-title{
			width: 100%;
			height: 80rpx;
			border-top: 4rpx solid $uni-border-color;
			line-height: 80rpx;
			text-align: center;
			letter-spacing: 20rpx;
			color: $uni-text-color-main;
			font-size: $uni-font-size-lg;
			font-weight: bold;
			margin-top: 20rpx;
		}
	}
</style>
