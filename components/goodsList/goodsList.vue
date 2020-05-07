<template>
	<view class="goods">
		<view class="rec-list">
			<view class="rec-item" v-for="(item, index) in goods" :key="item.id" @click="goToDetail(item.id)">
				<image class="item-img" :src="index === 8 ? defaultImg : item.img_url" mode="widthFix"></image>
				<view class="item-price">
					<text class="new-price">￥{{item.sell_price}}</text>
					<text class="old-price">￥{{item.market_price}}</text>
				</view>
				<view class="item-desc">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				defaultImg: '../../static/images/fd-loading.png'
			}
		},
		props:['goods'],
		methods: {
			goToDetail(id) {
				this.$emit('goToGoodsDetail', id)
			}
		}
	}
</script>
<style scoped lang="scss">
	.goods{
		width: 100%;
		.rec-list{
			width: 100%;
			background: $uni-bg-color-grey;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 0 16rpx;
			box-sizing: border-box;
			.rec-item{
				width: 350rpx;
				height: 500rpx;
				background: #fff;
				margin: 8rpx 0;
				padding: 28rpx;
				box-sizing: border-box;
				overflow: hidden;
				.item-img{
					width: 100%;
				}
				.item-price{
					margin: 15rpx 0;
					.new-price{
						font-size: $uni-font-size-md;
						color: $uni-text-color-main;
						margin-right: 16rpx;
					}
					.old-price{
						font-size: $uni-font-size-sm;
						text-decoration: line-through;
						color: $uni-text-color-grey;
					}
				}
				.item-desc{
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					overflow:hidden;
					text-overflow:ellipsis;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
				}
			}
		}
	}
</style>
