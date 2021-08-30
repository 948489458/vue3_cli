import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './API/index'//api接口
import './assets/css/reset.css'//样式代码初始化
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App) 
import axios from 'axios'

app.config.globalProperties.$api=api//注入vue原型

async function init() {
    axios.get('../static/serverConfig.json?v='+ new Date().getTime()+'')
    .then(res => {
        store.commit('globalConfig/SET_CONFIG',res.data.url);
        app.use(store).use(router).use(api).use(ElementPlus).mount('#app')
        })
        .catch(e => {
            console.log(e);
        })
}//地址接入
init()