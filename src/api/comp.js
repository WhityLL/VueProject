import http from './http';
const comp = {
    //企业相关接口
    /**
     * 企业金额、人数相关信息
     * @param {*} params
     * @param {*} callBack
     */
    compIndexInfo(params, callBack,errorBack) {
        http.get("comp/indexInfo", params, callBack,errorBack)
    },

    /**
     * 企业企业福利概况
     */
    comanalysis(params, callBack,errorBack) {
        http.get("comanalysis/basic", params, callBack,errorBack)
    },

    /**
     * 企业福利支出统计
     */
    comanalysisCost(params, callBack,errorBack) {
        http.get("comanalysis/cost", params, callBack,errorBack)
    },

    /**
     * 获取企业钱包金额
     */
    getDeptPointBalance(params, callBack) {
        http.post("comUserCon/getDeptPointBalance", params, callBack)
    },

    // 企业信息
    /**
     *  获取企业logo
     */
    getLogo(params, callBack, errBack){
        http.get("com/getLogo", params, callBack,errBack)
    },
    /**
     *  获取企业信息
     */
    getComInfo(params, callBack, errBack){
        http.get("comp/getComInfo", params, callBack,errBack)
    },
    /**
     *  获取企业地址
     */
    getCompanyAddress(params, callBack, errBack){
        http.get("com/getCompanyAddress", params, callBack,errBack)
    },
    /**
     *  更新企业简称
     */
    updateCom(params, callBack, errBack){
        http.get("com/updateCom", params, callBack,errBack)
    },
    /**
     *  更新企业地址
     */
    updateCompanyAddress(params, callBack, errBack){
        http.get("com/updateCompanyAddress", params, callBack,errBack)
    },

    /**
     *  地址列表
     */
    getAddressList(params, callBack, errBack){
        http.get("siteArea/getList", params, callBack,errBack)
    },
    /**
     * 定制专属员工商城
     * */
    getSomeComConfig(params, callBack, errBack){
        http.get("companyConfig/getSomeComConfig", params, callBack,errBack)
    },
}
export default comp;
