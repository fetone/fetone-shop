<template>
	<view class="news">
		<view class="news-item" v-for="(item, index) in news" :key="item.id" @click="goToDetail(item.id)">
			<img class="item-img" :src="item.img_url"></img>
			<view class="item-info">
				<view class="item-title">{{item.title}}</view>
				<view class="item-desc">
					<text class="item-time">发表时间: {{item.add_time.substring(0, 10)}}</text>
					<text class="item-watch">浏览: {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			getNewsList() {
				this.$api.getNewsList()
				.then((res) => {	
					this.news = res.message
				})
			},
			goToDetail(id) {
				uni.navigateTo({
					url:'../detail/detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
.news{
	width: 100%;	
	.news-item{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
		border-bottom: 1rpx solid #ccc;
		box-sizing: border-box;
		.item-img{
			width: 200rpx;
			height: 150rpx;
			margin-right: 10rpx;
		}
		.item-info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.item-title{
				font-size: $uni-font-size-base;
				color: $uni-text-color;
			}
			.item-desc{
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
				.item-time{
					margin-right: 50rpx;
				}
			}
		}
	}
}
</style>
