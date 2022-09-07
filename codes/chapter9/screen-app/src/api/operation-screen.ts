import request from '../axios';
interface IParams{
  type:string
}
 //线网
 export const lineInfo =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/lineInfo',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //车辆
 export const busInfo =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/busInfo',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //违规原因分析
 export const violationReasonInfo =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/violationReasonInfo',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //当月卡类型使用情况
 export const cardUseRatio =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/cardUseRatio',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //本月线路运客数排名
 export const safeMileageRank =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/safeMileageRank',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //当月电子支付趋势
 export const epayTendency =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/epayTendency',
        method: 'get',
        params: {
            ...params,
        }
    })
}
 //区域客流统计
 export const areaPassenger =  (params:IParams) => {
    return request({
        url: '/emptech-data-screen/operationScreen/areaPassenger',
        method: 'get',
        params: {
            ...params,
        }
    })
}