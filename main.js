import Vue from 'vue'
import App from './App'
import api from './api/index.js'

Vue.prototype.$api = api

Vue.filter("dateFormart", function (value, fmStr) {
	// console.log(fmStr);
	let date = new Date(value);
	let year = date.getFullYear();
	let month = date.getMonth() + 1 + "";
	let day = date.getDate() + "";
	let hour = date.getHours() + "";
	let minute = date.getMinutes() + "";
	let second = date.getSeconds() + "";
	if(fmStr && fmStr === "yyyy-MM-dd"){
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	}
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
});

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
