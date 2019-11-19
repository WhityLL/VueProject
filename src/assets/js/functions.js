//export
window.stringContainsSplitComma = stringContainsSplitComma;
window.getNowTimeStamp = getNowTimeStamp;
window.objectEquals = objectEquals;
window.gotoUrl = gotoUrl;
window.hasValue = hasValue;
window.uuid = uuid;
window.gotoUrlNoVersion = gotoUrlNoVersion;
window.getToken = getToken;
window.gotoUrlForce = gotoUrlForce;
window.__changeLocalStorageContent2Url = __changeLocalStorageContent2Url;
window.getCurrentClient = getCurrentClient;
window.vueBack = "noFunction";
window.appBack = appBack;
window.deviceType = 'html';//设备标志： html 普通html  app：app环境  miniprogram：小程序环境
window.appType = "";  //app类型，默认为空，若app回调成功，则修改此值，： ios 、 android
window.deviceEnv = deviceEnv;
window.exeAppFunc = exeAppFunc;
window.lisheClearLoc = lisheClearLoc;
window.isIE_Env = isIE_Env;
window.isWeiXin = isWeiXin;

/**
 * 公共函数区，每个前端同学请务必熟悉此文件的方法
 * @param param
 * @returns {boolean}
 */

function hasValue(param) {
    return param !== undefined && param != null && param !== "" && param !== "null" && param !== "undefined";
}

String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}

String.prototype.endWith=function(str){
    var reg=new RegExp(str+"$");
    return reg.test(this);
}

String.prototype.contains = function(str){
	return this.indexOf(str) != -1;
}

//判断字符串中是否包含另一个字符串，用逗号分隔的
//str  : "Details,"
//distStr: "Details"
function stringContainsSplitComma(str, distStr) {
    var pages = str.split(",");
    for (var i = 0; i < pages.length; i++) {
        if (pages[i] === distStr) {
            return true;
        }
    }
    return false;
}

function getNowTimeStamp() {
    return Math.round(new Date().getTime() / 1000);
}

/**
 * 比较2个对象的全部值是否相等,忽略隐藏属性 即 _开头的属性
 * @param a
 * @param b
 * @returns {boolean}
 */
function objectEquals(a, b) {
    debug("比较2个对象的值是否相等");
    debug(a);
    debug(b);
    if (a === b) {
        return true;
    }
    //取对象a和b的属性名
    var aPropsOrgin = Object.getOwnPropertyNames(a);
    var aProps = [];
    for (var i = 0; i < aPropsOrgin.length; i++) {
        if (aPropsOrgin[i].substr(0, 1) !== "_") {
            aProps.push(aPropsOrgin[i]);
        }
    }
    debug(aProps);
    var bPropsOrigin = Object.getOwnPropertyNames(b);
    var bProps = [];
    for (var i = 0; i < bPropsOrigin.length; i++) {
        if (bPropsOrigin[i].substr(0, 1) !== "_") {
            bProps.push(bPropsOrigin[i]);
        }
    }
    debug(bProps);
    //判断属性名的length是否一致
    if (aProps.length !== bProps.length) {
        return false;
    }
    //循环取出属性名，再判断属性值是否一致
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

function gotoUrl(url) {
    var urlRefer = localStorage.getItem("urlRefer");
    if (hasValue(urlRefer) && urlRefer.length > 10) {
        //至少有10个字符的urlRefer
        localStorage.removeItem("urlRefer");
        __goto(urlRefer);
    } else {
        __goto(url);
    }
}

function __goto(url) {
    if (url.indexOf('?') == -1) {
        url += '?v=VERSION_HOLD'
    } else {
        url += '&v=VERSION_HOLD'
    }
    window.location.href = url;
}

function gotoUrlForce(url) {
    __goto(url);
}

function gotoUrlNoVersion(url) {
    window.location.href = url;
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

//给数组增加contains方法
Array.prototype.contains = function (needle) {
    for (i in this) {
        if (this[i] === needle) return true;
    }
    return false;
};

function getToken(urlAfterLogin, isToken) {
    var token = localStorage.getItem("token");
    if (!token || token.length < 2) {
        if (urlAfterLogin && urlAfterLogin.length > 3) {
            //url编码
            localStorage.setItem("urlAfterLogin", encodeURIComponent(urlAfterLogin));
        }
        if (isToken !== 1) {
            return "";
        }
    }
    return token;
}

function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

function lisheClearLoc() {
    var deviceId = localStorage.deviceId;
	var vs=localStorage.appVS;
    localStorage.clear();
    localStorage.deviceId = deviceId;
	localStorage.appVS = vs;
}

//把localStorage的内容转换成url参数形式
function __changeLocalStorageContent2Url() {
    var paramsString = "";
    var ignoreKey = ["debugText", "redisContent"];//忽略的值
    for (var localStorageItem in localStorage) {
        if (ignoreKey.contains(localStorageItem)) {
            //跳过忽略
            continue;
        }
        if (typeof (localStorage[localStorageItem]) === 'function') {
            //跳过方法
            continue;
        }
        paramsString += localStorageItem + "EQUAL" + localStorage[localStorageItem] + "ANDAND";
    }
    paramsString = "localStroageContent=" + paramsString;
    lisheClearLoc();
    return paramsString;
}


//判断手机端还是电脑端
var currentClient = '0';
function getCurrentClient() {
    if (currentClient !== '0') {
        return currentClient;
    }
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = false;
    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = true;
            currentClient = "2";
            return "2";
        }
    }
    currentClient = "1";
    return "1";
}

// 微信环境
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

String.prototype.LisheAllReplace = function (f, e) {//吧f替换成e
    var reg = new RegExp(f, "g"); //创建正则RegExp对象
    return this.replace(reg, e);
}
//这个函数是以前写的，以后用LisheAllReplace
String.prototype.myReplace = function (f, e) {//吧f替换成e
    var reg = new RegExp(f, "g"); //创建正则RegExp对象
    return this.replace(reg, e);
}


// var vueBack = "noFunction";
function appBack() {
    debug(typeof vueBack);
    if (typeof vueBack === "function") {
        vueBack();
    } else {
        window.history.go(-1);
    }
}

//判断是否是IE浏览器
function isIE_Env() {
    var ieVersion = IEVersion();
    return ieVersion !== -1;
}

/**
 * @return {number}
 */
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion === 7) {
            return 7;
        } else if (fIEVersion === 8) {
            return 8;
        } else if (fIEVersion === 9) {
            return 9;
        } else if (fIEVersion === 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 13;//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}


// js 与App 交互

/**
 * native原生 调用js
 * @param params
 */
function deviceEnv(params) {
    if (typeof params === "string") {
        params = JSON.parse(params);
    }
    //确保param是json对象
    if (params.deviceType === 'android' || params.deviceType === 'ios') {
        deviceType = "app";
        appType = params.deviceType;
        localStorage.deviceId = params.sn;
        publishMsg('appDeviceId', localStorage.deviceId);
    }
    debug(localStorage.deviceId);
}

/**
 *  js 调用APP方法
 * @param funcName 函数名，String
 * @param param    这是Object形式的
 * @param callback 回调(Object)
 */
function exeAppFunc(funcName, param, callback) {
    if (appType === "ios") {
        var tempParam = JSON.stringify(param);
        window.webkit.messageHandlers[funcName].postMessage(tempParam);
        if (hasValue(iosFunctionMap[funcName])) {
            // 根据映射表 动态生成方法，供app回调
            // result是iOS 调用该方法是传过来的参数(jsonString)
            window[iosFunctionMap[funcName]] = function (result) {
                var obj = JSON.parse(result);
                callback(obj);
            }
        }
    }
    if (appType === "android") {
        if (typeof JSCallNative_Interface[funcName] === "function") {
            // var androidFunction = JSCallNative_Interface[funcName];
            var tempParam = JSON.stringify(param);
            var response = {}
            if (hasValue(tempParam)) {
                response = JSCallNative_Interface[funcName](tempParam);
            } else {
                response = JSCallNative_Interface[funcName]();
            }

            // 需要异步回调
            if (hasValue(androidFunctionMap[funcName])) {
                // 根据映射表 动态生成方法，供app回调
                // result是android 调用该方法是传过来的参数(jsonString)
                window[androidFunctionMap[funcName]] = function (result) {
                    if (typeof result === "string") {
                        result = JSON.parse(result);
                    }
                    callback(result);
                }
                return;
            }

            // 直接返回回调数据
            if (hasValue(response)) {
                if (typeof response === "string") {
                    response = JSON.parse(response);
                }
                if (typeof callback === "function") {
                    callback(response);
                }
            }
        }
    }

}

/**
 * 这里需要配置 调用app方法后对应的回调方法映射表
 * @type {{logoutAppClick: string, aaa: string}}
 */
var iosFunctionMap = {
    "initClick": "initClickCallBack",
    "checkVersionClick": "checkVersionClickCallBack",
    "checkNetworkClick": "checkNetworkClickCallBack",
    "storageGetClick": "storageGetClickCallBack",
    "pasteBoredGetClick": "pasteBoredGetClickCallBack",
    "locationClick": "locationClickCallBack",
    "scanClick": "scanClickCallBack",
    "uploadClick": "uploadClickCallBack",
    "calcuCacheClick": "calcuCacheClickCallBack",
    "loginClick": "loginClickCallBack",
    "payClick": "payClickCallBack",
    "getStepsClick": "getStepsClickCallBack",
    "getAddressBookListClick": "getAddressBookListClickCallBack"
};

/**
 * 这里需要配置 调用android方法后对应的回调方法映射表
 * @type {{logoutAppClick: string, aaa: string}}
 */
var androidFunctionMap = {
    "locationClick": "locationClickCallBack",
    "scanClick": "scanClickCallBack",
    "uploadClick": "uploadClickCallBack",
    "loginClick": "loginClickCallBack",
    "payClick": "payClickCallBack",
    "getStepsClick": "getStepsClickCallBack",
    "getAddressBookListClick": "getAddressBookListClickCallBack"
};



