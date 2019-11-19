import http from './http';
//健步行相关接口

const walk = {
    /**
     * appWalk/examineActivityApproval
     *13-2-1 健步行活动审批
     * @params {activityId:"活动id",pass:"	1-通过 2-拒绝",remark:"审批意见"}
     * */
    examineActivityApproval(params, callBack, errorBack) {
        http.get("appWalk/examineActivityApproval", params, callBack, errorBack)
    },

    /**
     * appWalk/examineStepExchangeApproval
     *13-2-2 步数兑换审批
     * @params {id:"步数兑换审批单id",pass:"	1-通过 2-拒绝",remark:"审批意见"}
     * */
    examineStepExchangeApproval(params, callBack, errorBack) {
        http.get("appWalk/examineStepExchangeApproval", params, callBack, errorBack)
    },
    /**
     * appWalk/selectActivityApproval
     *13-2-3 查询活动奖励审批(分页)
     * @params {page:"",num:""}
     * */
    selectActivityApproval(params, callBack, errorBack) {
        http.get("appWalk/selectActivityApproval", params, callBack, errorBack)
    },

    /**
     * appWalk/selectStepExchangeApproval
     * 13-2-4 查询步数兑换审批(分页)
     * @params {page:"",num:""}
     * */
    selectStepExchangeApproval(params, callBack, errorBack) {
        http.get("appWalk/selectStepExchangeApproval", params, callBack, errorBack)
    },

    /**
     * appWalk/selectActivityApprovalById
     * 13-2-5 查询活动奖励审批
     * @params {activityId:活动id}
     * */
    selectActivityApprovalById(params, callBack, errorBack) {
        http.get("appWalk/selectActivityApprovalById", params, callBack, errorBack)
    },

    /** appWalk/selectStepExchangeApprovalById
     * 13-2-6 查询步数兑换审批
     *@params {id:步数审批单d}
     */
    selectStepExchangeApprovalById(params, callBack, errorBack) {
        http.get("appWalk/selectStepExchangeApprovalById", params, callBack, errorBack)
    },

    /** appWalk/selectStepExchangeApprovalById
     * 13-2-1 查询待审批数量
     */
    selectHaveApproval(params, callBack, errorBack) {
        http.get("appWalk/selectHaveApproval", params, callBack, errorBack)
    },

    /** appGiftCard/preview
     * 13-3-1 积分卡/礼品卡首页信息
     */
    appGiftCard(params, callBack, errorBack) {
        http.get("appGiftCard/preview", params, callBack, errorBack)
    },

    /** appGiftCard/signSendPageQuery
     * 13-3-2 待发放未标记分页查询
     */
    signSendPageQuery(params, callBack, errorBack) {
        http.get("appGiftCard/signSendPageQuery", params, callBack, errorBack)
    },
    /** appGiftCard/signSend
     * 13-3-3 标记发放
     */
    cardSignSend(params, callBack, errorBack) {
        http.get("appGiftCard/signSend", params, callBack, errorBack)
    },
    /** appGiftCard/emptyCardPageQuery
     *13-3-4 空卡分页查询
     */
    emptyCardPageQuery(params, callBack, errorBack) {
        http.get("appGiftCard/emptyCardPageQuery", params, callBack, errorBack)
    },
    /** appGiftCard/recharge
     *13-3-5 空卡充值
     */
    emptyCardRecharge(params, callBack, errorBack) {
        http.get("appGiftCard/recharge", params, callBack, errorBack)
    },
    /** appGiftCard/rechargeRecordQuery
     *13-3-6 充值记录查询
     */
    rechargeRecordQuery(params, callBack, errorBack) {
        http.get("appGiftCard/rechargeRecordQuery", params, callBack, errorBack)
    },
    /** appGiftCard/rechargeRecordDetailQuery
     *13-3-7 充值记录详情查询
     */
    rechargeRecordDetailQuery(params, callBack, errorBack) {
        http.get("appGiftCard/rechargeRecordDetailQuery", params, callBack, errorBack)
    },
    /** appGiftCard/sendRecordPageQuery
     * 13-3-8 发放记录分页查询
     */
    sendRecordPageQuery(params, callBack, errorBack) {
        http.get("appGiftCard/sendRecordPageQuery", params, callBack, errorBack)
    },
    /** appGiftCard/sendRecordDetailQuery
     * 13-3-9 发放记录详情查询
     */
    sendRecordDetailQuery(params, callBack, errorBack) {
        http.get("appGiftCard/sendRecordDetailQuery", params, callBack, errorBack)
    },
    /** appGiftCard/consumeStatist
     * 13-3-10 消费统计
     */
    consumeStatistics(params, callBack, errorBack) {
        http.get("appGiftCard/consumeStatistics", params, callBack, errorBack)
    },
    /** appGiftCard/cardPageQuery
     * 13-3-11 卡册列表
     */
    cardPageQuery(params, callBack, errorBack) {
        http.get("appGiftCard/cardPageQuery", params, callBack, errorBack)
    },
    /** appGiftCard/cardDetail
     * 13-3-11 卡册列表
     */
    getCardDetail(params, callBack, errorBack) {
        http.get("appGiftCard/cardDetail", params, callBack, errorBack)
    },


}
export default walk;
