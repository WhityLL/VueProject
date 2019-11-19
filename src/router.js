import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import {setStore,getStore} from './utils/storageUtil'
// ajax请求
import axios from '../src/api/api'

Vue.prototype.$axios = axios;

import {Toast} from 'vant';

Vue.use(Router)

/**
 *  @router meta 属性
 *  hasFooter 是否展示底部
 *  title 页面title信息
 *  PagePass 页面可在未登录状态下进入
 *  keepAlive 是否启用vue缓存  默认不启用
 *
 * */
const route = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import( '@/pages/Demo/index'),
            meta: {title: "demo"}
        },
        {
            path: '/facade_mode',
            name: 'facade_mode',
            component: () => import( '@/pages/Demo/children/facade_mode'),
            meta: {title: "外观模式"}
        },
        {
            path: '/factory_mode',
            name: 'factory_mode',
            component: () => import( '@/pages/Demo/children/factory_mode'),
            meta: {title: "工厂模式"}
        },

        {
            path: '/status_mode',
            name: 'status_mode',
            component: () => import( '@/pages/Demo/children/status_mode'),
            meta: {title: "status_mode"}
        },
        {
            path: '/celve_mode',
            name: 'celve_mode',
            component: () => import( '@/pages/Demo/children/celve_mode'),
            meta: {title: "celve_mode"}
        },
        {
            path: '/oberseve_mode',
            name: 'oberseve_mode',
            component: () => import( '@/pages/Demo/children/oberseve_mode'),
            meta: {title: "oberseve_mode"}
        },
        {
            path: '/pubsub_mode',
            name: 'pubsub_mode',
            component: () => import( '@/pages/Demo/children/pubsub_mode'),
            meta: {title: "pubsub_mode"}
        },


        {
            path: '/login',
            name: 'login',
            component: () => import( '@/pages/login/login'),
            meta: {title: "登录", keepAlive:true}
        }
    ],

    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop || window.scrollTop || document.documentElement.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition ||0}
        }
    }
})

route.beforeEach((to, from, next) => {
    if(to.meta.PagePass){
        //页面可在未登录下直接进入
        next();
        return;
    }

    next();
    // const token = getStore('token');
    // if (!hasValue(token)){
    //     toLogin(to, next);
    // }else {
    //     next();
    // }
});


route.afterEach((to, from, next) => {
    /**
     * 调用微信的相关配置,初始化微信
     * 路由跳转了，但是location.href获取的还是上个页面的路由，导致微信初始化失败
     * 这里延迟500ms进行初始化微信，来防止这种情况
     */
    if (to.meta.wxEnv) {
        setTimeout(() => {
            weixinEnvInit(location.href, spaUrl);
        }, 500);
    }

    store.commit('increment');
    let documentTitle = "";
    to.matched.forEach((path) => {
        if (path.meta.title) {
            documentTitle = path.meta.title;
        }
    });
    document.title = documentTitle + '- Whity-Demo';
});


function toLogin(to, next) {
    if (to.path == '/login') {
        next()
    } else {
        next('/login');
    }
}

export default route;