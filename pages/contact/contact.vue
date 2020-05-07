<template>
	<view class="contact">
		<image class="about-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1096871996,1433371480&fm=26&gp=0.jpg" mode="widthFix"></image>
		<view class="phone">
			<text>联系电话: 400-868-99999</text>
			<button class="btn" size="mini" type="default" @click="phoneCall">点击拨打</button>
		</view>
		<view class="address">
			地址: 浙江省台州市温岭市
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers" scale="14"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 28.378336,
				longitude: 121.392141,
				markers: [
					{
						latitude: 28.378336,
						longitude: 121.392141,
						iconPath: '../../static/images/marker.jpg',
						width: 40,
						height: 40
					}
				]
			}
		},
		methods: {
			phoneCall () {
				uni.makePhoneCall({
					phoneNumber: '400-868-99999'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	width: 100%;
	.about-img{
		width: 100%;
	}
	.phone{
		padding: 20rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #ccc;
		.btn{
			margin-left: 20rpx;
		}
	}
	.address{
		padding: 30rpx;
	}
	.map{
		width: 100%;
		height: 750rpx;
	}
}
</style>
