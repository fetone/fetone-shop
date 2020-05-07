<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="pics-left">
			<view :class="{'active': activeIndex === index}" v-for="(item, index) in imgCategory" :key="item.id" @click="categoryClickHandle(index, item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="pics-right">
			<view v-for="(item, index) in commImages" :key="index" class="right-item">
				<image :src="item.img_url" mode="widthFix" class="item-img" @click="previewImg(item.img_url)"></image>
				<view class="item-title">{{item.title}}</view>
			</view>
			<text v-if="commImages.length === 0" class="noneData">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgCategory: [],
				activeIndex: 0,
				commImages: []
			}
		},
		onLoad() {
			this.getImgCategory()
		},
		methods: {
			getImgCategory() {
				this.$api.getImgCategory()
				.then((res) => {
					this.imgCategory = res.message
					this.categoryClickHandle(0, this.imgCategory[0].id)
				})
			},
			categoryClickHandle(index, id) {
				this.activeIndex = index
				this.$api.getCommImages(id)
				.then((res) => {
					this.commImages = res.message
				})
			},
			previewImg (current) {
				const urls = this.commImages.map((item) => {
					return item.img_url
				})
				uni.previewImage({
					urls,
					current
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	width: 100%;
	height: 100%;
}
.pics{
	width: 100%;
	height: 100%;
	.pics-left{
		position: absolute;
		left: 0;
		top: 0;
		width: 180rpx;
		height: 100%;
		border-right: 1rpx solid #ccc;
		view{
			width: 100%;
			height: 140rpx;
			line-height: 140rpx;
			text-align: center;
			border-top: 1rpx solid #eee;
			&.active{
				background: $bg-color-main;
				color: #fff;
			}
		}
	}
	.pics-right{
		width: 100%;
		height: 100%;
		padding-left: 190rpx;
		padding-right: 10rpx;
		box-sizing: border-box;
		.right-item{
			margin: 10rpx 0;
			.item-img{
				width: 100%;
				border-radius: 20rpx;
			}
		}
		.item-title{
			color: $uni-text-color;
		}
		.noneData{
			color: $uni-text-color;
			font-size: $uni-font-size-lg;
		}
	}
}
</style>
