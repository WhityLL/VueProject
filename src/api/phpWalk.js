import http from './httpPhp';
//健步行相关接口

const walkPhp = {
    /**
     * walksaas/getwalkList
     * 活动列表
     * @params {}
     * */
    php_getwalkList(params, callBack, errorBack) {
        http.get("walksaas.getwalkList", params, callBack, errorBack)
    },

    /**
     * walksaas/activityPersonList
     * 活动人员统计
     * @params {}
     * */
    php_getactivityPersonList(params, callBack, errorBack) {
        http.get("walksaas.activityPersonList", params, callBack, errorBack)
    },

    /**
     * walksaas/activityAndWalk
     * 活动和步数兑换
     * @params {}
     * */
    php_getActivityAndWalk(params, callBack, errorBack) {
        http.get("walksaas.activityAndWalk", params, callBack, errorBack)
    },


    /**
     * walksaas/updateExchangeRule
     * 修改兑换规则
     * @params {}
     * */
    php_updateExchangeRule(params, callBack, errorBack) {
        http.get("walksaas.updateExchangeRule", params, callBack, errorBack)
    },

    /**
     * walksaas/updateExchangeRule
     * 人员参与详情
     * @params {}
     * */
    php_personJoinDetail(params, callBack, errorBack) {
        http.get("walksaas.personJoinDetail", params, callBack, errorBack)
    },

    /**
     * walksaas/addActivity
     * 添加活动
     * @params {}
     * */
    php_addActivity(params, callBack, errorBack) {
        http.get("walksaas.addActivity", params, callBack, errorBack)
    },

    /**
     * walksaas/addActivity
     * 获取活动信息
     * @params {}
     * */
    php_editPreActivity(params, callBack, errorBack) {
        http.get("walksaas.editPreActivity", params, callBack, errorBack)
    },


    /**
     * walksaas/addActivity
     * 编辑活动提交接口
     * @params {}
     * */
    php_updateActivity(params, callBack, errorBack) {
        http.get("walksaas.updateActivity", params, callBack, errorBack)
    },

}
export default walkPhp;
