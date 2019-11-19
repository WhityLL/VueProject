import http from './http';

const chart = {
    // 数据统计 、图表相关接口
    /**
     *  数据统计- 充值
     * @param params
     * @param callBack
     */
    getComChargeStatistics(params, callBack, errBack) {
        http.post("comDataStatis/getComChargeStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 消费
     * @param params
     * @param callBack
     */
    getComConsumeStatistics(params, callBack, errBack) {
        http.post("comDataStatis/getComConsumeStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 发放
     * @param params
     * @param callBack
     */
    getPointSendStatistics(params, callBack, errBack) {
        http.post("comDataStatis/getPointSendStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 发放场景
     * @param params
     * @param callBack
     */
    getAllWelfareScene(params, callBack, errBack) {
        http.post("welfareSceneCon/getAllWelfareScene", params, callBack, errBack)
    },

    /**
     *  数据统计- 员工积分消费统计
     * @param params
     * @param callBack
     */
    getEmpPointConsumeStatistics(params, callBack, errBack) {
        http.post("comDataStatis/getEmpPointConsumeStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 在职员工统计
     * @param params
     * @param callBack
     */
    getEmployeeStatistics(params, callBack, errBack) {
        http.post("empDataStatis/getEmployeeStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 员工性别统计
     * @param params
     * @param callBack
     */
    getEmpGenderStatistics(params, callBack, errBack) {
        http.post("empDataStatis/getEmpGenderStatistics", params, callBack, errBack)
    },

    /**
     *  数据统计- 员工生日统计
     * @param params
     * @param callBack
     */
    getEmpBirthdayStatistics(params, callBack, errBack) {
        http.post("empDataStatis/getEmpBirthdayStatistics", params, callBack, errBack)
    },

    // 数据报表
    /**
     * 数据图表-  福利情况
     * @param params
     * @param callBack
     */
    getOverview(params, callBack, errBack) {
        http.post("analysis/overview", params, callBack, errBack)
    },

    /**
     * 数据图表-  支出情况
     * @param params
     * @param callBack
     */
    getPayView(params, callBack, errBack) {
        http.post("analysis/payView", params, callBack, errBack)
    },
    /**
     * 数据图表-  人均支出情况
     * @param params
     * @param callBack
     */
    getPayAvView(params, callBack, errBack) {
        http.post("analysis/payAvView", params, callBack, errBack)
    },
    /**
     * 数据图表-  支出笔数
     * @param params
     * @param callBack
     */
    getPayCountView(params, callBack, errBack) {
        http.post("analysis/payCountView", params, callBack, errBack)
    },

    /**
     * 数据图表-  充值情况
     * @param params
     * @param callBack
     */
    getRechargeChartView(params, callBack, errBack) {
        http.post("analysis/rechargeView", params, callBack, errBack)
    },

    /**
     * 数据图表-  员工活跃情况
     * @param params
     * @param callBack
     */
    getComEmpCount(params, callBack, errBack) {
        http.post("dataStatistics/getComEmpCount", params, callBack, errBack)
    },
    /**
     * 数据图表-  员工消费情况
     * @param params
     * @param callBack
     */
    getComEmpPointCount(params, callBack, errBack) {
        http.post("dataStatistics/getComEmpPointCount", params, callBack, errBack)
    },

    /**
     * 数据图表-  积分发放
     * @param params
     * @param callBack
     */
    getSendPointView(params, callBack, errBack) {
        http.post("analysis/sendPointView", params, callBack, errBack)
    },

    /**
     * 数据图表-  积分发放场景
     * @param params
     * @param callBack
     */
    getSendSceneRateView(params, callBack, errBack) {
        http.post("analysis/sendSceneRateView", params, callBack, errBack)
    },

    /**
     * 数据图表-  在职员工
     * @param params
     * @param callBack
     */
    getEmpDeptView(params, callBack, errBack) {
        http.post("analysis/empDeptView", params, callBack, errBack)
    },

    /**
     * 数据图表-  员工性别
     * @param params
     * @param callBack
     */
    getEmpSexView(params, callBack, errBack) {
        http.post("analysis/empSexView", params, callBack, errBack)
    },

    /**
     * 数据图表-  员工生日
     * @param params
     * @param callBack
     */
    getEmpBirthdayView(params, callBack, errBack) {
        http.post("analysis/empBirthdayView", params, callBack, errBack)
    }
}

export default chart;