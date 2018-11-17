// 入口文件
import Vue from 'vue'

/// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//导入App跟组件
import app from './App.vue'
//按需导入mint-ui组件
import { Header , Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router //1.4挂载路由对象到VM实例上
})