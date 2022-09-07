export default {
    state: {
        screenDataType: 0//数据类型
    },
    getters: {
        //获取数据类型
        GET_DATATYPE: (state: any) => {
            return state.screenDataType;
        }
    },
    mutations: {
        //修改大屏数据类型
        SET_DATATYPE(state: any, val: string) {
            state.screenDataType = val;
        }
    },
    actions: {
    },
    namespaced: true // 开启命名空间
}