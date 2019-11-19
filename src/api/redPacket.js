//红包积分相关接口
import http from './http';

const redPacket = {
    /**
     * wxRedbag/getSendRedbag
     *13-4-1 查询发放的红包
     * @params {receiveStatus:"领取状态:" 0-未领取 1-已领取}
     * */
    getSendRedbag(params, callBack, errorBack) {
        http.get("wxRedbag/getSendRedbag", params, callBack, errorBack)
    },


    /**
     * wxRedbag/getReceiveRedba
     *13-4-2 查询领取到的红包
     * @params {receivePhoneNo:"领取手机号"}
     * */
    getReceiveRedba(params, callBack, errorBack) {
        http.get("wxRedbag/getReceiveRedba", params, callBack, errorBack)
    },

    /**
     * wxRedbag/send
     *13-4-3 发放微信红包
     * @params {sendAmount:"红包金额 单位：积分"}
     * */
    send(params, callBack, errorBack) {
        http.get("wxRedbag/send", params, callBack, errorBack)
    },

    /**
     * wxRedbag/receive
     *13-4-4 领取微信红包
     * @params {sendAmount:"红包金额 单位：积分"}
     * */
    receive(params, callBack, errorBack) {
        http.get("wxRedbag/receive", params, callBack, errorBack)
    },

    /**
     * wxRedbag/getByPwd
     *13-4-5 根据密码查询红包信息
     * @params {pwd:"红包密码"}
     * */
    getByPwd(params, callBack, errorBack) {
        http.get("wxRedbag/getByPwd", params, callBack, errorBack)
    },

    /**
     * wxRedbag/getByPwd
     *13-4-5 根据密码查询红包信息
     * @params {pwd:"红包密码"}
     * */
    revocation(params, callBack, errorBack) {
        http.get("wxRedbag/revocation", params, callBack, errorBack)
    },
}
export default redPacket;
