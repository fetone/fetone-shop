export default {
	get: function(url, data={}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url,
				data,
				success: (res) => {
					if (res.data.status !== 0) {
						return uni.showToast({
							title: "数据加载失败"
						})
					}
					resolve(res.data)
				},
				fail: (err) => {
					uni.showToast({
						title: "请求接口失败"
					})
					reject(err)
				}
			})
		}) 
	},
	post: function(url, data={}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url,
				data,
				method: 'POST',
				success: (res) => {
					if (res.data.status !== 0) {
						return uni.showToast({
							title: "数据加载失败"
						})
					}
					resolve(res.data)
				},
				fail: (err) => {
					uni.showToast({
						title: "请求接口失败"
					})
					reject(err)
				}
			})
		})
	}
}