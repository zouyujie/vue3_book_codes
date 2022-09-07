//http://momentjs.cn/docs/
import moment from 'moment';
//设定moment区域为中国
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
moment.suppressDeprecationWarnings = true; //禁用弃用警告

const weeks=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
function getWeekByDate(myDate:Date):string {
  const week = myDate.getDay();
  return weeks[week];
 }
  /**
   * 获取当期日期时间信息
   * @returns 
   */
   export function getCurDatetime():string{
    return moment().format('YYYY-MM-DD')+" "+getWeekByDate(new Date()) +' '+ moment().format('HH:mm:ss');
  }