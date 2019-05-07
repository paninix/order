import axios from 'axios'
import store from '../../store'
import Vue from 'vue'

let httpURL = "http://www.xuguobin.club/api/order/" //这是我服务器的api接口
let localURL = 'http://localhost/api/order/';     //这是本地koa2的api接口

axios.defaults.baseURL = localURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// axios拦截请求
axios.interceptors.request.use(request=>{
	if(request.meta) {
		let data = request.data || false;
		let phone = store.getters.getUserPhone;
		if(data) {
			request.data = {data, phone}
		} else {
			request.data = {phone};
		}
	}
	return request;
},err=>{
//   return Promise.reject(err)
})
// axios拦截响应
axios.interceptors.response.use(response=>{
//   console.log(response);
  return response
},err=>{
//   return Promise.reject(err)
})

// 判断状态码
function resultJudge(code) {
	return Vue.$axios.code.CODE_OK.indexOf(code) !== -1;
}
// 处理错误公共方法
function handleErrorCase(err) {
	if (typeof err == 'Number') {
		console.log(err)
	} else {
		alert(err)
	}
}
// 发送请求
export default function sendRequest(settingKey, key, data) {
	let send = Vue.$axios.config[settingKey][key];
	let baseURL = send.url;
	send.method == 'get'
		? data && (send.url += data)
		: send.data = data;
	return new Promise((resolve,reject) => {
		axios(send)
		.then((res)=>{
			send.url = baseURL;
			resultJudge(res.data.status) ? resolve(res.data.data) : reject(res.data.data);
		}).catch((err)=>{
			handleErrorCase(err)
		});
	});
}