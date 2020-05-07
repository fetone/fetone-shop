<template>
	<view class="goods-detail">
		
		<swiper :indicator-dots="true" class="swiper" indicator-color="rgba(200,0,0,0.7)" indicator-active-color="#fff">
			<swiper-item v-for="(item, index) in carouselImg" :key="index">
				<image :src="item.src" mode="" class="carousel-img"></image>
			</swiper-item>
		</swiper>
		
		<view class="goods-price">
			<text>￥{{goodsInfo.sell_price}}</text>
			<text>￥{{goodsInfo.market_price}}</text>
		</view>
		<view class="goods-title">
			{{goodsInfo.title}}
		</view>
		<view class="goods-id">
			<view class="num-lh">货号: {{goodsInfo.goods_no}}</view>
			<view class="num-lh">库存: {{goodsInfo.stock_quantity}}</view>
		</view>
		<view class="goods-desc">
			详情介绍
		</view>
		<view class="content">
			<rich-text :nodes="content"></rich-text>
		</view>
		<view class="buy-nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				carouselImg:[],
				goodsInfo: {},
				content: '',
				
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
							icon: 'shop',
							text: '店铺',
							info: 0,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
					}, {
							icon: 'cart',
							text: '购物车',
							info: 2
					}
				],
					
				buttonGroup: [
					{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		onLoad(options) {
			this.getDetailImg(options.id)
			this.getGoodsInfo(options.id)
			this.getGoodsContent(options.id)
		},
		methods: {
			getDetailImg(id) {
				this.$api.getDetailImg(id)
				.then((res) => {
					this.carouselImg = res.message
				})
			},
			getGoodsInfo(id) {
				this.$api.getGoodsInfo(id)
				.then((res) => {
					this.goodsInfo = res.message[0]
				})
			},
			getGoodsContent(id) {
				this.$api.getGoodsContent(id)
				.then((res) => {
					this.content = res.message[0].content
				})
			},
			
			onClick (e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		},
		components:{
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
.goods-detail{
	width: 100%;
	.swiper{
		width: 100%;
		height: 700rpx;
		.carousel-img{
			width: 100%;
			height: 100%;
		}
	}
	
	view{
		padding: 20rpx;
		box-sizing: border-box;
	}
		
	.goods-price{
		font-size: $uni-font-size-md;
		color: $uni-text-color-main;
		text:nth-child(2) {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			margin-left: 20rpx;
		}
	}
	.goods-title{
		font-size: $uni-font-size-md;
		color: $uni-text-color;
	}
	.goods-id{
		font-size: $uni-font-size-md;
		color: $uni-text-color;
		border-top: 2rpx solid #ccc;
		border-bottom: 2rpx solid #ccc;
		padding-left: 0;
		.num-lh{
			line-height: 60rpx;
		}
	}
	.goods-desc{
		line-height: 60rpx;
		font-size: $uni-font-size-md;
		color: $uni-text-color;
		border-bottom: 2rpx solid #ccc;
	}
	.content{
		font-size: $uni-font-size-base;
		color: $uni-text-color;
		line-height: 50rpx;
		padding-bottom: 100rpx;
	}
	.buy-nav{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0;
		.uni-goods-nav{
			padding: 0;
		}
	}
}
</style>
