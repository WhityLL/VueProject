var __msgQueues = []; //监听队列
/*
    消息队列中的数组元素为下例：

    msgData0.topic = "platform";  //消息主题
    msgData0.funcs = [callback0,callback2]; //回调数组

    msgData1.topic = "otherTopic"; //消息主题
    msgData1.funcs = [callback1]; //回调数组

 */

/**
 * 订阅消息
 * @param topic  消息主题
 * @param callback 消息回调
 */
var subscribeMsg = function (topic, callback) {
    //添加一个回调到对应的消息实体
    function addFunc2Entity(func, entity) {
        var repeatAdd = false;
        for (var i = 0; i < entity.funcs.length; i++) {
            if (func === (entity.funcs)[0]) {
                repeatAdd = true;
                break;
            }
        }

        if (!repeatAdd) {
            //如果尚不存在这个订阅，则添加订阅到主题
            console.log("如果尚不存在这个订阅，则添加订阅到主题");
            entity.funcs.push(func);
            console.log("entity的订阅数量为" + entity.funcs.length);
            return true;
        }
        console.log("该订阅已经在消息队列中存在");
        return false;
    }

    var hasTopic = false;
    for (var i = 0; i < __msgQueues.length; i++) {
        //遍历消息队列中的每一个实例
        var msgEntity = __msgQueues[i];
        if (msgEntity === undefined) {
            continue;
        }
        if (msgEntity.topic === topic) {
            //订阅主题已经存在，将订阅添加到实体队列中
            console.log("订阅主题已经存在");
            hasTopic = true;
            addFunc2Entity(callback, msgEntity);
        }
    }
    if (!hasTopic) {
        console.log("订阅主题尚不存在,添加到队列");
        var msgEntityNew = {};
        msgEntityNew.topic = topic;
        if (msgEntityNew.funcs === undefined) {
            msgEntityNew.funcs = [];
        }
        msgEntityNew.funcs.push(callback);
        __msgQueues.push(msgEntityNew);
    }
};

/**
 * 发布消息
 * @param topic 主题
 * @param msgData 消息内容
 */
var publishMsg = function (topic, msgData) {
    var finishSend = false;
    for (var i = 0; i < __msgQueues.length; i++) {
        var msgEntity = __msgQueues[i];
        if (topic === msgEntity.topic) {
            finishSend = true;
            var msgCallbackFuncs = msgEntity.funcs;
            for (var j = 0; j < msgCallbackFuncs.length; j++) {
                var callback = msgCallbackFuncs[j];
                if (typeof callback === "function") {
                    console.log("主题订阅者被调用");
                    callback(msgData);
                }
            }
        }
    }
    if (!finishSend) {
        console.log("没有找到主题订阅者，忽略本次消息");
    }
};


window.subscribeMsg = subscribeMsg;
window.publishMsg = publishMsg;