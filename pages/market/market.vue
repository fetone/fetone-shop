<template>
	<view>
		<goodsList :goods="goods" @goToGoodsDetail="goToGoodsDetail"></goodsList>
		<view class="bottom-line" v-if="flag">
			------ 我是有底线的 ------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goodsList/goodsList.vue'
	export default {
		data() {
			return {
				goods: [],
				pageIndex: 1,
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList(this.pageIndex)
		},
		methods: {
			// 请求列表数据
			getGoodsList(pageIndex, fn) {
				if(!this.flag){
					this.$api.getGoodsList({pageindex: pageIndex})
					.then((res) => {
						this.goods = [...this.goods, ...res.message]
						// 判断还有没有数据请求
						if(this.goods.length < this.pageIndex * 10){
							this.flag = true
						}
					})
				}
				fn && fn()
			},
			// 跳转详情页
			goToGoodsDetail(id) {
				uni.navigateTo({
					url:'../goodsDetail/goodsDetail?id=' + id
				})
			}
		},
		onReachBottom() {
			this.pageIndex++
			this.getGoodsList(this.pageIndex)
		},
		onPullDownRefresh() {
			this.goods = []
			this.flag = false
			this.pageIndex = 1
			this.getGoodsList(1, () => {
				uni.stopPullDownRefresh()
			})
		},
		components: {
			goodsList
		}
	}
</script>

<style lang="scss">
.bottom-line{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	background: $uni-bg-color-grey;
	color: $uni-text-color-grey;
}
</style>
