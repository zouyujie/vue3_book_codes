const qs = require('qs');
import * as echarts from "echarts";
/**
 * 唯一标识
 */
 export function guid():string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c: string) {
        const r = (Math.random() * 16) | 0;
        const v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  /**
 * 数字格式千分位加逗号分隔
 * @param num 
 * @returns 
 */
export function numFormat(num: number): string {
  if (num == undefined || num == null) return "--";
  return num.toString().indexOf(".") !== -1
    ? num.toLocaleString()
    : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
/**
 * 解析url参数
 * @param {*} url 
 * @returns 
 */
 export const getUrlQuery:any = (url:string) => {
  // 用JS拿到URL，如果函数接收了URL，那就用函数的参数。如果没传参，就使用当前页面的URL
  const queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  // 如果没有传参，返回一个空对象
  if (!queryString) {
    return {};
  }
  return qs.parse(queryString);
};
/**
 * 深拷贝
 * @param obj
 * @returns
 */
 export function deepCopy(obj:any):any {
  if (obj === null) return null;
  return JSON.parse(JSON.stringify(obj));
}
//构造渐变色
export function getColorByIndex(colorArr:Array<{ start: string; end: string; }>, index:number):echarts.graphic.LinearGradient{
  return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    {
      offset: 0,
      color: colorArr[index].start // 0% 处的颜色
    },
    {
      offset: 1,
      color: colorArr[index].end // 100% 处的颜色1
    }
  ]);
}
/**
 * 获取缩放比例
 * @param val
 * @param minVal 最小缩放值
 * @returns
 */
 export function getRate(val: number, minVal: number = 12): number {
  const rate = document.documentElement.clientWidth / 1920;
  return rate * val < minVal ? minVal : rate * val;
}
//根据数据类型值获取数据类型名称
export function getDataNameByType(type:number):string {
  console.log('type',type)
  return ["今日", "本周", "当月", "今年"][type];
}
//构造排名数据
export function createRankData(data:{yAxisData:[],seriesData:[]}):any{
  const list:any=[];
  const maxVal=Math.max(...data.seriesData);//取最大值
  for(let i=0;i<data.seriesData.length;i++){
     const item={
       name:data.yAxisData[i],
       value:data.seriesData[i],
       percent:data.seriesData[i]/maxVal
     }
     list.unshift(item);//从数组的头部开始插入
  }
  return list;
}
//根据时间类型获取时间单位名称
export function getUnitNameByType(type:number):string {
  if (type == 0) return "时";
  if ([1, 2].includes(type)) return "天";
  return "月";
}
/**
 * 按属性升降序
 * @param property 
 * @param orderType 
 * @returns 
 */
 export function compare(property:any, orderType:string):any {
  return function(a:any, b:any) {
    const value1 = a[property];
    const value2 = b[property];
    return orderType === "up" ? value1 - value2 : value2 - value1;
  };
}