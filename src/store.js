import Vue from 'vue'
import Vuex from 'vuex'
import {getStore} from './utils/storageUtil'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        comStatus: 0,//企业状态（0：待认证，1：已认证，2：认证不通过，3：已注销 不能登录，9：未提交认证）
        isLoading: false,
        department: "",

        currentSelectedDepartment: '',  //当前选择中的部门(Object){depName:name,depId:id,depNum:num,departmentList:children}

        walkCreatTempData: {     //健步行创建活动数据临时保存
            dataId: '',
            firstStepData: '',
            secondStepData: '',
            thirdStepData: ''
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        comStatus(state) {
            //更换企业状态
            const comStatus = getStore('comStatus');
            if (state.comStatus != comStatus) {
                state.comStatus = comStatus;
            }
        },
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        },
        setDepartment(state, data) {
            //保存组织架构
            state.department = data;
        },

        // 保存当前选择的部门
        setCurrentSelectedDepartment(state, data){
            state.currentSelectedDepartment = data;
        },
        resetVuex(state){
            state.count=0;
            state.comStatus=0;
            state.isLoading=false;
            state.department='';
            state.currentSelectedDepartment='';
        },

        // 保存当前数据
        setWalkCreatTempData(state, data){
            state.walkCreatTempData = data;
        }
    },
    actions: {}
})
