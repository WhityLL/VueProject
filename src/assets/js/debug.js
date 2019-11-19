/*
这个文件主要处理debug相关的公共函数
 */
var debugMode = false;
if (localStorage.getItem("debugMode") === 'true') {
    debugMode = true;
}
var hasConsole = typeof console === 'object';
var requestParameters = null;
if (debugMode) {
    if (hasConsole) {
        console.log("!!!!!!!!当前在debug模式,生产环境请关闭!!!!!!!")
    }
}

function debug() {
    if (debugMode) {
        if (hasConsole) {
            console.log.apply(console,arguments)
        }
        //记录到localStorage里
        createDebugString(JSON.stringify(arguments))
    }
}

function createDebugString(str) {
    str = localStorage.debugText + "<br/>" + str + "<br/><hr/><br/>";
    localStorage.debugText = str.substring(str.length - 5000);
}

function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


/**
 * 打补丁：
 * https://m.lishe.cn/#//#/ngQrcode?&id=201
 * 因为后端bug出现了类似这种域名，切换掉
 */
function debug20190703() {
    var hrefLocal = location.href;
    if (hrefLocal.indexOf("/#//#/") !== -1) {
        location.href = hrefLocal.replace("/#//#/ngQrcode?&id", "/#/ngQrcode?id");
    }
}

debug20190703();


window.debug = debug;
window.createDebugString = createDebugString;
window.isWeiXin = isWeiXin;
