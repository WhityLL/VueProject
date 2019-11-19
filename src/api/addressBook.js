//通讯录相关
import http from "./http";

const addressBook = {
    /**
     * 搜索人员
     * {
     *     condition:"" 搜索条件  需要编码
     * }
     */
    empSearchList(params, callBack, errorBack) {
        http.post("employee/empSearch", params, callBack, errorBack)
    },

    /**
     * 员工信息
     * {
     *     userId:""
     * }
     */
    getEmpInfoByUserId(params, callBack, errorBack) {
        http.post("employee/getEmpInfoByUserId", params, callBack, errorBack)
    },

    /**
     *  搜索职位
     * @param params
     * @param callBack
     * @param errorBack
     */
    getPositionList(params, callBack, errorBack) {
        http.post("position/positionSearch", params, callBack, errorBack)
    },

    /**
     *  更新员工信息
     * @param params
     * @param callBack
     * @param errorBack
     */
    updateComEmp(params, callBack, errorBack) {
        var temp = params.empName;
        http.post("employee/updateComEmp", params, callBack, errorBack)
    },

    /**
     *  添加员工
     * @param params
     * @param callBack
     * @param errorBack
     */
    addComEmp(params, callBack, errorBack) {
        http.post("employee/addComEmp", params, callBack, errorBack)
    },

    /**
     *  离职员工
     * @param params
     * @param callBack
     * @param errorBack
     */
    dimissionEmp(params, callBack, errorBack) {
        http.post("employee/dimissionEmp", params, callBack, errorBack)
    },


    /**
     * 获取部门信息
     * {
     *     departmentId:""
     * }
     */
    getDepartmentInfoById(params, callBack, errorBack) {
        http.post("comDepartment/selectById", params, callBack, errorBack)
    },

    /**
     *  添加部门
     * @param params
     * @param callBack
     * @param errorBack
     */
    addDepartment(params, callBack, errorBack) {
        http.post("comDepartment/addDepartment", params, callBack, errorBack)
    },

    /**
     *  修改部门
     * @param params
     * @param callBack
     * @param errorBack
     */
    updateDepartment(params, callBack, errorBack) {
        http.post("comDepartment/updateDepartment", params, callBack, errorBack)
    },

    /**
     *  删除部门
     * @param params
     * @param callBack
     * @param errorBack
     */
    deleteDepartment(params, callBack, errorBack) {
        http.post("comDepartment/deleteDepartment", params, callBack, errorBack)
    },

    /**
     * 员工福利收入统计
     * {
     *     userId:""
     * }
     */
    getWelfareIncomeStatistics(params, callBack, errorBack) {
        http.post("empDataStatis/getWelfareIncomeStatistics", params, callBack, errorBack)
    },
    /**
     * 员工福利收入明细
     * {
     *     userId:"",
     *     page_flag:"",
     *     page_num:""
     * }
     */
    getWelfareDetail(params, callBack, errorBack) {
        http.post("empDataStatis/getWelfareDetail", params, callBack, errorBack)
    },

    /**
     * 员工消费统计
     * {
     *     userId:""
     * }
     */
    getConsumptionRateStatistics(params, callBack, errorBack) {
        http.post("empDataStatis/getConsumptionRateStatistics", params, callBack, errorBack)
    },
    /**
     * 员工消费明细
     * {
     *     userId:"",
     *     page_flag:"",
     *     page_num:""
     * }
     */
    getPointConsumeList(params, callBack, errorBack) {
        http.post("empDataStatis/getPointConsumeList", params, callBack, errorBack)
    },
}
export default addressBook;
