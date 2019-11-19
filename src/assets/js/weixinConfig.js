window.weixinEnvInit = weixinEnvInit;
window.__onBridgeReady = __onBridgeReady;


/**
 * 初始化微信环境
 */
var currentLocationUrl = "";
var currentSpaUrl = "";
var wexinPostInitCallback = null;


/**
 *  初始化微信的一些配置
 * @param locationUrl string 当前真实url，包含全部，一般是location.href即可
 * @param spaUrl string 兼容ios的单页面应用url，一般是入口页面url，若不给，则自动使用locationUrl
 * @param callback function 初始化完毕后的回调，可选
 */
function weixinEnvInit(locationUrl, spaUrl ,callback) {
    if (isWeiXin()) {
        if (typeof spaUrl !== "string") {
            spaUrl = locationUrl;
        }
        if(typeof callback === "function"){
            wexinPostInitCallback = callback;
        }
        currentLocationUrl = locationUrl;
        currentSpaUrl = spaUrl;
        if (typeof WeixinJSBridge == "undefined") {
            document.addEventListener('WeixinJSBridgeReady', __onBridgeReady, false);
        } else {
            __onBridgeReady();
        }
    }
}


function __onBridgeReady() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
        wx.miniProgram.getEnv( function (res) {
            if (res.miniprogram) {
                deviceType = 'miniprogram';
            } else {
                deviceType = 'html';
            }
        });
        if(typeof wexinPostInitCallback === "function"){
            setTimeout(function () {
                wexinPostInitCallback();
            },0);
        }
        // 微信鉴权
        getWxConfig();
    } else {
        debug('不在微信里');
    }
}

function getWxConfig() {
    if(!hasValue(window.API_URL_V2)){
        debug("API_URL_V2 未定义");
        return;
    }
    // ios 不支持SPA应用 所以做以下处理
    var url_head = currentLocationUrl;
    var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    if (!isAndroid) {
        //非安卓，即ios 使用spaUrl
        url_head = currentSpaUrl;
    }
    if(isAndroid && deviceType === "miniprogram"){
        //安卓下，小程序使用 spaUrl
        url_head = currentSpaUrl;
    }
    var url_code = url_head.replace(/\./g, "chenchaoe").replace(/\//g, "chenchaob").replace(/\#/g, "chenchaoc").replace(/\:/g, "chenchaoa").replace(/\?/g, "chenchaod").replace(/\=/g, "chenchaof").replace(/\&/g, "chenchaoh");
    lisheJSON(window.API_URL_V2 + "/Wx/wxScan?callback=?", {
        url: url_code,
    }, function (result) {
        debug(result);
        if (result.errcode === 0) {
            wx.config({
                debug: false, // 调试模式开关
                appId: result.data.info.appId, // 公众号的唯一标识
                timestamp: result.data.info.timestamp, // 生成签名的时间戳
                nonceStr: result.data.info.nonceStr, // 生成签名的随机串
                signature: result.data.info.signature, // 签名
                jsApiList: [
                    'hideMenuItems',
                    'hideOptionMenu',
                    'translateVoice',
                    'checkJsApi',
                    'chooseImage',
                    'uploadImage',
                    'previewImage',
                    'downloadImage',
                    'scanQRCode',
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'onMenuShareAppMessage',
                    'onMenuShareTimeline',
                    'onMenuShareQQ',
                    'onMenuShareQZone'
                ] // JS接口列表
            });
            wx.error(function (res) {
                debug("出错了：" + res.errMsg);
                //alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
            });
        }
    }, function () {
        //alert("服务繁忙，请稍后再试E103");
    });
}