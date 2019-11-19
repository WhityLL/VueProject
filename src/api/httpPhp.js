import axios from 'axios';

let http = axios.create({
    baseURL: '', // api的base_url
    timeout: 60 * 1000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function (data) {
        let newData = '';
        for (let k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
            }
        }
        return newData;
    }]
});

// https://gateway.lishe.cn/test.walkstep.walksaas.getwalkList
//http://test.gateway.lishe.cn/test.giftbooklet.Point.jifen?callback=jQuery18306250533937629246_1567655484502&p=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3MCIsImNvbUlkIjoiMTQ2NDMxNzQ2MDAzNyIsImFjY291bnQiOiIxNTYwMjk2MDUxNSIsInVzZXJOYW1lIjoiXHU2NjZmXHU2ZGE2XHU1MTliIn0.jBvBri5S_1ArERV7WjabDu0-aHrAddigJw8mNg1r7Ho&client=3&domain=vip&deviceId=6eb1e75f-2791-4e6d-8005-b27a1a8c51af&curPath=%2FAssets&_lisheJSON=ok&_=1567655484759

let reqNum = 0;
//   let loadingInstance = "";
http.interceptors.request.use(function (config) {
    // 在请求发出之前进行一些操作，每次发出请求就 reqNum++
    let token = window.localStorage.getItem("token");
    if (token) {
        config.params.token=token;
        config.headers.token = token; //将token放到请求头发送给服务器
    }
    config.url = 'https://gateway.lishe.cn/test.walkstep.' + config.url;
    reqNum++;

    // loadingInstance=Loading.service({
    //   lock: true,
    //   text: '正在加载，请稍后...',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0)'
    // });
    return config
});

http.interceptors.response.use(function (response) {
    // 接受请求后 reqNum--，判断请求所有请求是否完成
    reqNum--;
    if (reqNum <= 0) {
        //   if (loadingInstance) loadingInstance.close();
    }
    return response
});

/**
 * 执行网络请求
 * @param {*} method  请求方式 GET POST PUT DELETE
 * @param {*} url     url
 * @param {*} params  请求参数
 * @param {*} callBack 成功回调
 * @param {*} errBack  失败回调
 */
function exeHttpRequest(method, url, params, callBack, errBack) {
    params._t = new Date().getTime()
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        if (res.data && res.data.code == 10001) {
            window.location.hash = '#/login'
        } else {
            if (res.data) {
                callBack(res.data)
            } else {
                callBack(res)
            }
        }
    }).catch(function (err) {
        reqNum--;
        //   if (reqNum <= 0) {
        //     if (loadingInstance) loadingInstance.close();
        //   }
        //   Message.error('服务繁忙，请稍后！');
        if(errBack){
            errBack(err);
        }
    })
}

export default {
    get: function (url, params, callBack, errBack) {
        exeHttpRequest('GET', url, params, callBack, errBack)
    },
    post: function (url, params, callBack, errBack) {
        exeHttpRequest('POST', url, params, callBack, errBack)
    },
    put: function (url, params, callBack, errBack) {
        exeHttpRequest('PUT', url, params, callBack, errBack)
    },
    delete: function (url, params, callBack, errBack) {
        exeHttpRequest('DELETE', url, params, callBack, errBack)
    }
}
