// 定义一个接口,约束state的数据类型
export interface ITodo {
  id: number, //主键，唯一标识
  title: string, //任务标题
  isCompleted: boolean //是否已完成
}