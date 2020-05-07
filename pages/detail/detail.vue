<template>
	<view class="detail">
		<view class="detail-title">{{detail.title}}</view>
		<view class="detail-desc">
			<text class="time" v-if="detail.add_time">发表时间: {{detail.add_time | dateFormart("yyyy-MM-dd")}}</text>
			<text class="watch">浏览: {{detail.click}}</text>
		</view>
		<view class="detail-content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			}
		},
		onLoad(options) {
			this.getNewsDetail(options.id)
		},
		methods: {
			getNewsDetail(id) {
				this.$api.getNewsDetail(id)
				.then((res) => {
					this.detail = res.message[0]
				})
			}
		}
	}
</script>

<style lang="scss">
.detail{
	width: 100%;
	.detail-title{
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin: 10rpx 0;
		font-size: $uni-font-size-md;
		color: $uni-text-color;
		font-weight: bold;
	}
	.detail-desc{
		display: flex;
		justify-content: space-between;
		padding: 0 60rpx;
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}
	.detail-content{
		padding: 20rpx;
		font-size: $uni-font-size-md;
		color: $uni-text-color;
	}
}
</style>
