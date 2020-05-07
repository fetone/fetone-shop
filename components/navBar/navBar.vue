<template>
	<view class="nav-bar">
		<view class="nav-item" @click="goTo('/pages/market/market')">
			<view class="iconfont icon-ziyuan nav-icon"></view>
			<text class="nav-text">肥冬超市</text>
		</view>
		<view class="nav-item" @click="goTo('/pages/contact/contact')">
			<view class="iconfont icon-guanyuwomen nav-icon"></view>
			<text class="nav-text">联系我们</text>
		</view>
		<view class="nav-item" @click="goTo('/pages/pics/pics')">
			<view class="iconfont icon-tupian nav-icon"></view>
			<text class="nav-text">社区图片</text>
		</view>
		<view class="nav-item">
			<view class="iconfont icon-shipin nav-icon"></view>
			<text class="nav-text">学习视频</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goTo(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav-bar{
		display: flex;
		justify-content: space-around;
		margin-top: 20rpx;
		.nav-item{
			text-align: center;
			.nav-icon{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				background: $bg-color-main;
				text-align: center;
				line-height: 120rpx;
				font-size: 48rpx;
				color: #fff;
				margin-bottom: 10rpx;
			}
			.nav-text{
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}
		}
	}
</style>
