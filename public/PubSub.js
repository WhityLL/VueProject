/**
 *  发布订阅模式
 *  订阅者  ———>
 *                 调度中心     <———— 发布者（不直接调度订阅者）
 *  订阅者  ———>
 *
 *  主要为了处理一对多的场景,应用于不同情况下的不同函数的调用
 *  优点：耦合性低，便于代码的维护
 *  缺点：创建订阅者本身要消耗一定的时间和内存，可能订阅的消息未发生，但这个订阅者会始终存在于内存中
 */

/**
 * 发布订阅调度中心
 * PubSubCenter
 */
function PubSubCenter() {

    /**
     *  消息订阅队列
     *  {
     *      topicA: [callBack1, callback2],
     *      topicB: [callBack1, callback2],
     *  }
     */
    this.topicSubsDic = {};

    /**
     * 发布消息（emit）
     * @param topic string 消息主题
     * @param msgData any  消息内容
     * @returns {PubSubCenter}   返回自己方便链式调用
     */
    this.publishMsg = function (topic, msgData) {
        // 1、没有消息订阅者，则忽略该消息
        if (!this.topicSubsDic[topic]) {
            console.log("没有找到主题为（" + topic+ "）的订阅者，忽略本次消息");
            return false;
        }

        // 2、查询该topic(消息主题)对应的订阅者回调函数队列 或初始化
        let subscriberMsgCallbackFuncs = this.topicSubsDic[topic] || [];

        // 3、遍历消息订阅者的回调函数队列，并执行回调（发消息）
        subscriberMsgCallbackFuncs.forEach((callBack) => {
            if (typeof callBack === "function") {
                console.log("订阅主题为（" + topic + "）的订阅者被调用，发布消息成功");
                callBack(msgData);
            }
        })
        return this; // 方便链式调用
    }

    /**
     * 订阅消息（addEventListener）
     * @param topic string 订阅的主题
     * @param callBackFunc function 回调函数
     * @returns {PubSubCenter}   返回自己方便链式调用
     */
    this.subscribeMsg = function (topic, callBackFunc) {
        // 1、如果订阅消息的主题不存在，就新增一个主题
        if (!(topic in this.topicSubsDic)) {
            this.topicSubsDic[topic] = [];
        }
        // 2、将订阅消息的回调函数 加入到主题对应的回调队列中
        this.topicSubsDic[topic].push(callBackFunc);
        console.log("订阅主题为（" + topic + "）的消息成功");

        return this;
    }

    // /**
    //  * 取消订阅（deleteEventListener）
    //  * @param topic 消息主题
    //  * @param allBackFunc 需要删除的回调函数
    //  * @returns {PubSubCenter}   返回自己方便链式调用
    //  */
    // this.unsubscribeMsg = function (topic, callBackFunc) {
    //     // 1、取出消息主题 对应的订阅事件队列
    //     var listeners = this.topicSubsDic[topic];
    //     if (!listeners || !listeners.length) return;
    //     // 2、删除对应的callBackEvent
    //     // filter (过滤函数:循环便利数组的每一个元素，执行一个函数如果不匹配，则删除该元素)
    //     this.topicSubsDic[topic] = listeners.filter(v => v !== callBackFunc);
    //     debugger
    //     return this;
    // }
}

// 暴露一个 发布订阅调度中心实例（instance）
var PubSubCenterInstance = new PubSubCenter()
export default PubSubCenterInstance;