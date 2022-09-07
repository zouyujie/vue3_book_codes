import Mock from "mockjs";
import { getUrlQuery } from "@/utils/common";
export default ({ mock }) => {
  if (!mock) return;
  //#region 运营大屏
  function getValByType(type:string):number {
    let res = 1;
    switch (parseInt(type)) {
      case 0:
        res = 1;
        break;
      case 1:
        res = 7;
        break;
      case 2:
        res = 30;
        break;
      default:
        res = 365;
        break;
    }
    return res;
  }
    //线网
    Mock.mock(
      RegExp("/api/emptech-data-screen/operationScreen/lineInfo" + "*"),
      "get",
      () => {
        return {
          code: 200,
          msg: "查询成功",
          data: {
            lineNums: 108, //总线路
            lineLength: 1890, //线路长度
            repeatFactor: 2.2, //重复系数
            specialRoadLength: 110, //专用道长度
            notStraightLineFactor: 1.3, //非直线系数
          },
        };
      }
    );
  //车辆
  Mock.mock(
    RegExp("/api/emptech-data-screen/operationScreen/busInfo" + "*"),
    "get",
    () => {
      return {
        code: 200,
        msg: "查询成功",
        data: {
          carNums: 3200, //车辆 标台数
          pureElectricNums: 350, //纯电数
          hybridNums: 200, //混动数
          gasNums: 450, //燃气数
        },
      };
    }
  );
  //  违规原因分析
  Mock.mock(
    RegExp(
      "/api/emptech-data-screen/operationScreen/violationReasonInfo" + "*"
    ),
    "get",
    (options) => {
     const item:any  = getUrlQuery(options.url);
      const type=item.type||0;
      console.log("接收参数", item);
      return {
        code: 200,
        msg: "查询成功",
        data: [
          { name: "打电话", val: 6500*getValByType(type), max: 8000*getValByType(type) },
          { name: "打哈欠", val: 16000*getValByType(type), max: 20000*getValByType(type) },
          { name: "抽烟", val: 30000*getValByType(type), max: 40000*getValByType(type) },
          { name: "离方向盘", val: 38000*getValByType(type), max: 40000*getValByType(type) },
          { name: "不在驾驶位", val: 52000*getValByType(type), max: 60000*getValByType(type) },
          { name: "分心", val: 25000*getValByType(type), max: 30000*getValByType(type) },
        ],
      };
    }
  );
  // 当月卡类型使用情况
  Mock.mock(
    RegExp("/api/emptech-data-screen/operationScreen/cardUseRatio" + "*"),
    "get",
    (options) => {
     const item:any  = getUrlQuery(options.url);
      const type=item.type||0;
      console.log("接收参数", item);
      return {
        code: 200,
        msg: "查询成功",
        data: {
          seriesData: [
            { value: 1048*getValByType(type), name: "普通卡" },
            { value: 735*getValByType(type), name: "老人卡" },
            { value: 580*getValByType(type), name: "学生卡" },
            { value: 484*getValByType(type), name: "特惠卡" },
            { value: 300*getValByType(type), name: "异地卡" },
          ],
        },
      };
    }
  );
  // 区域客流统计
  Mock.mock(
    RegExp("/api/emptech-data-screen/operationScreen/areaPassenger" + "*"),
    "get",
    (options) => {
     const item:any  = getUrlQuery(options.url);
      const type=item.type||0;
      console.log("接收参数", item);
      return {
        code: 200,
        msg: "查询成功",
        data: [
          {
            name: "芙蓉区",
            value: 328400*getValByType(type),
          },
          {
            name: "天心区",
            value: 193700*getValByType(type),
          },
          {
            name: "岳麓区",
            value: 137300*getValByType(type),
          },
          {
            name: "开福区",
            value: 416500*getValByType(type),
          },
          {
            name: "雨花区",
            value: 120200*getValByType(type),
          },
          {
            name: "望城区",
            value: 15420*getValByType(type),
          },
          {
            name: "长沙县",
            value: 5420*getValByType(type),
          },
          {
            name: "浏阳市",
            value: 254200*getValByType(type),
          },
          {
            name: "宁乡市",
            value: 310000*getValByType(type),
          },
        ],
      };
    }
  );
  // 本月安全里程排名
  Mock.mock(
    RegExp("/api/emptech-data-screen/operationScreen/safeMileageRank" + "*"),
    "get",
    (options) => {
     const item:any  = getUrlQuery(options.url);
      const type=item.type||0;
      console.log("接收参数", item);
      return {
        code: 200,
        msg: "查询成功",
        data: {
          yAxisData: [
            "67路",
            "233路",
            "211路",
            "17路",
            "902路",
            "102路",
            "103路",
            "104路",
          ],
          seriesData: [1000*getValByType(type), 2000*getValByType(type), 3000*getValByType(type), 
            4000*getValByType(type), 5000*getValByType(type), 5400*getValByType(type), 6100*getValByType(type), 6900*getValByType(type)],
        },
      };
    }
  );
  // 当月电子支付趋势
  Mock.mock(
    RegExp("/api/emptech-data-screen/operationScreen/epayTendency" + "*"),
    "get",
    (options) => {
     const item:any = getUrlQuery(options.url);
      const type=item.type||0;
      console.log("item", item);
      const dayItem = {
        xAxisData: [
          "1:00",
          "2:00",
          "3:00",
          "4:00",
          "5:00",
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
        ], //横坐标数据
        seriesData: [
          30, 40, 50, 20, 10, 40, 20, 100, 30, 40, 50, 20, 100, 40, 20, 10,
        ], //纵坐标数据
      };
      const weekItem = {
        xAxisData: ["1", "2", "3", "4", "5", "6", "7"], //横坐标数据
        seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
      };
      const monthItem = {
        xAxisData: ["1", "2", "3", "4", "5", "6", "7"], //横坐标数据
        seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
      };
      const yearItem = {
        xAxisData: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"], //横坐标数据
        seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
      };
      let resItem = dayItem;
      if (type == 1) {
        resItem = weekItem;
      } else if (type == 2) {
        resItem = monthItem;
      } else if (type == 3) {
        resItem = yearItem;
      }
      return {
        code: 200,
        msg: "查询成功",
        data: resItem,
      };
    }
  );
    // 当月电子支付趋势
    Mock.mock(
      RegExp("/api/emptech-data-screen/operationScreen/epayTendency" + "*"),
      "get",
      (options) => {
       const item:any = getUrlQuery(options.url);
        const type=item.type||0;
        console.log("item", item);
        const dayItem = {
          xAxisData: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
          ], //横坐标数据
          seriesData: [
            30, 40, 50, 20, 10, 40, 20, 100, 30, 40, 50, 20, 100, 40, 20, 10,
          ], //纵坐标数据
        };
        const weekItem = {
          xAxisData: ["1", "2", "3", "4", "5", "6", "7"], //横坐标数据
          seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
        };
        const monthItem = {
          xAxisData: ["1", "2", "3", "4", "5", "6", "7"], //横坐标数据
          seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
        };
        const yearItem = {
          xAxisData: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"], //横坐标数据
          seriesData: [30, 40, 50, 20, 10, 40, 60], //纵坐标数据
        };
        let resItem = dayItem;
        if (type == 1) {
          resItem = weekItem;
        } else if (type == 2) {
          resItem = monthItem;
        } else if (type == 3) {
          resItem = yearItem;
        }
        return {
          code: 200,
          msg: "查询成功",
          data: resItem,
        };
      }
    );
  //#endregion
};
