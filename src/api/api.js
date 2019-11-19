import http from './http';
import comp from './comp';
import chart from './chart';
import addressBook from './addressBook'
import walk from './walk'
import phpWalk from './phpWalk'
import redPacket from './redPacket'

const apiManager = {
    // 登录相关接口
    /**
     * 登录接口 appUser/login
     * @param {*} params
     * @param {*} callBack
     */
    loginApi(params, callBack, errorBack) {
        http.post("appUser/login", params, callBack, errorBack)
    },
    /**
     * 获取验证码
     * {
     *     regPhoneNum :"" 手机号
     *     ruleCode :"" 手机号后四位反转
     * }
     */
    sendMsg(params, callBack, errorBack) {
        http.post("comUser/sendMsg", params, callBack, errorBack)
    },
    /**
     * 手机与验证码验证
     * {
     *     phone :"" 手机号
     *     code :"" 验证码
     * }
     */
    resetPassValidate(params, callBack, errorBack) {
        http.post("appUser/resetPassValidate", params, callBack, errorBack)
    },

    /**
     * 获取登录信息 无参数
     * */
    getUserApi(params, callBack, errorBack) {
        http.post("appUser/getUserInfo", params, callBack, errorBack)
    },
    /**
     * 判断企业是否拥有此菜单的权限
     *@params{
     *     permissionId:""菜单ID
     *}
     * */
    selectPermissionPop(params, callBack, errorBack) {
        http.get(" api/comPermission/selectPermissionPop", params, callBack, errorBack)
    },
    /**
     * 找回密码 appUser/resetPass
     * @params {
     *     username:""手机号
     *     newPassword:""新密码
     * }
     * */
    resetPwdApi(params, callBack, errorBack) {
        http.post("appUser/resetPass", params, callBack, errorBack)
    },
    /** 修改密码 个人  api/com/modifyPwd
     * @params{
     *     loginPwd:""旧密码
     *     newPwd:""新密码
     * }
     * */
    modifyPwdApi(params, callBack, errorBack) {
        http.get("com/modifyPwd", params, callBack, errorBack)
    },

    /**
     *   校验旧密码
     */
    checkPassword(params, callBack, errorBack) {
        http.get("com/checkPassword", params, callBack, errorBack)
    },

    /**
     * 获取登录用户信息
     */
    getUserInfo(params, callBack, errBack) {
        http.post("appUser/getUserInfo", params, callBack, errBack)
    },

    // 通讯录


    /**
     * 部门结构树 comDepartment/getDepartmentTree
     *
     * */
    getDepartmentTree(params, callBack, errorBack) {
        http.post("comDepartment/getDepartmentTree", params, callBack, errorBack)
    },
    /**
     * 部门结构树 无人数
     * @param params
     * @param callBack
     */
    getDepartmentTreeNoEmpNum(params, callBack) {
        http.post("comDepartment/getDepartmentTreeNoEmpNum", params, callBack)
    },

    /**
     * 获取通讯录 子
     * @param params
     * @param callBack
     */
    selectEmployeeByDepartmentId(params, callBack, errorBack) {
        http.post("comDepartment/selectEmployeeByDepartmentId", params, callBack, errorBack)
    },

    /**
     * 退出登录
     * @param params
     * @param callBack
     * @param errBack
     */
    logout(params, callBack, errBack) {
        http.post("com/logout", params, callBack, errBack)
    },

    // 个人中心
    /**
     * 获取资金账户列表
     * @param params
     * @param callBack
     */
    getCapitalAccount(params, callBack) {
        http.post("comDataStatis/getCapitalAccount", params, callBack)
    },

    /**
     * 上传企业logo
     */
    uploadComLogoByUrl(params, callBack, errBack) {
        http.post("comConfig/uploadComLogoByUrl", params, callBack, errBack)
    },
    /**
     * 获取企业圈列表
     * @param {*} randStr 随机串 每次进页面或者pageIndex = 1 时改变
     * @param callBack
     */
    getEnterpriseCircleData(params, callBack) {
        http.post("Company/getCompanyCircleLists", params, callBack)
    }
}

export default {...apiManager, ...comp, ...chart, ...addressBook, ...walk, ...phpWalk, ...redPacket};
