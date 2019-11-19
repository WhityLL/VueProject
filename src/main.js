import Vue from 'vue'
// // ajax请求
// import axios from '../src/api/api'
// Vue.prototype.$axios=axios;

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'

//引入矢量图标
import './assets/font/iconfont.css'

//全局混入  mixin
import Mixins from './mixin/mixin'
Vue.mixin(Mixins);

/* 引入Vant库 */
import Vant from 'vant';
// import 'vant/lib/index.css';
import 'vant/lib/index.less';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
