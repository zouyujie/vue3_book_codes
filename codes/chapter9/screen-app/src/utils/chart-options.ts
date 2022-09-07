import * as echarts from "echarts";
import { EChartsOption } from 'echarts'
import { getRate } from "@/utils/common";
//tooltip样式
export const tooltipObj: EChartsOption = {
    backgroundColor: "rgba(0,0,0,0.8)", //设置背景图片 rgba格式
    borderWidth: "0", //边框宽度设置1
    // borderColor: "gray", //设置边框颜色
    textStyle: {
        color: "white", //设置文字颜色
    },
};
//构造虚拟点
function dotArr() {
    const dataArr: Array<EChartsOption> = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 1,
                itemStyle: {
                    color: "#005dff",//图形的颜色
                    borderWidth: 1, //边框宽度
                    borderColor: "#314076",//边框颜色
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 2,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)",
                },
            });
        }
    }
    return dataArr;
}
//小环
export const miniCircleOption: any = {
    //直角坐标系内绘图网格
    grid: {
        top: 0, //grid 组件离容器上侧的距离，默认60
    },
    //标题
    title: {
        text: "",//文字内容
        //文字样式
        textStyle: {
            fontWeight: "normal",//主标题文字字体的粗细。
            color: "white",//主标题文字的颜色。
            fontSize: getRate(18)//主标题文字的字体大小。
        },
        left: "center",//title 组件离容器左侧的距离。
        top: "32%",//title 组件离容器上侧的距离。
    },
    //提示框组件。
    tooltip: {
        trigger: "item",//触发类型。'item'：数据项图形触发
        //提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
        formatter: function (params) {
            return params.name + "：" + params.value + "%";
        },
        ...tooltipObj,
    },
    // 极坐标系的角度轴。
    angleAxis: {
        max: 100, // 满分
        clockwise: true, // 逆时针
        // 隐藏刻度线
        axisLine: {
            show: false,
        },
        //坐标轴刻度相关设置
        axisTick: {
            show: false,//是否显示坐标轴刻度。
        },
        axisLabel: {
            show: false,//是否显示刻度标签。
        },
        splitLine: {
            show: false,//是否显示分隔线。
        },
    },
    // 极坐标系的径向轴。
    radiusAxis: {
        type: "category",
        // 隐藏刻度线
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    // 极坐标系，可以用于散点图和折线图。
    polar: {
        center: ["50%", "40%"],//极坐标系的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        radius: "100%", //极坐标系的半径。
    },
    series: [
        {
            type: "bar",//柱状图
            data: [
                {
                    name: "",//系列名称
                    // value: 75,
                    showBackground: true,//是否显示柱条的背景色。
                    //每一个柱条的背景样式。
                    backgroundStyle: {
                        color: "#07184A",
                        borderColor: "#000",
                    },
                    //图形样式。
                    itemStyle: {
                        //渐变颜色
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: "#01B4FF", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#0336FF", // 100% 处的颜色1
                            },
                        ]),
                    },
                },
            ],
            coordinateSystem: "polar",//该系列使用的坐标系,polar表示使用极坐标系
            roundCap: true,//是否在环形柱条两侧使用圆弧效果
            barWidth: "10%",//柱条的宽度，不设时自适应
            barGap: "-100%", // 不同系列的柱间距离，为百分比,-100%表示两环重叠
            z: 2,//柱状图组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。
        },
        {
            // 灰色环
            type: "bar",
            name: "其它",
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: "#07184A",
                        shadowColor: "rgba(0, 0, 0, 0.2)",
                        shadowBlur: 5,
                        shadowOffsetY: 2,
                    },
                },
            ],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: "10%",
            barGap: "-100%", // 两环重叠
            z: 1,
        },
        {
            type: "pie",
            bottom: "20%",
            zlevel: 3,//所有图形的 zlevel 值
            silent: true,//图形是否不响应和触发鼠标事件
            radius: ["45%", "45%"],
            label: {
                show: false,
            },
            labelLine: {
                show: false,//是否显示视觉引导线
            },
            data: dotArr(),
        },
    ],
};
//雷达图
export const radarOption: any = {
    color: ["#4A99FF"],
    tooltip: {
        trigger: "axis",
        ...tooltipObj
    },
    radar: {
        center: ["50%", "50%"],
        radius: "65%",
        // shape: 'circle',
        indicator: [
            { name: "打电话", max: 6500 },
            { name: "打哈欠", max: 16000 },
            { name: "抽烟", max: 30000 },
            { name: "离方向盘", max: 38000 },
            { name: "不在驾驶位", max: 52000 }
        ],
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: "white",
                width: 1
            }
        },
        //换线样式
        splitLine: {
            lineStyle: {
                width: 1,
                color: "rgba(38,124,170,1)",
                shadowBlur: 20,
                shadowColor: "rgba(255,255,255,1)"
            }
        }
    },
    series: [
        {
            type: "radar",
            label: {
                fontSize: getRate(13)
            },
            lineStyle: {
                color: "rgba(0, 255, 252, 1)"
            },
            tooltip: {
                trigger: "item"
            },
            data: [
                {
                    value: [],
                    name: "违规原因",
                    areaStyle: {
                        // 单项区域填充样式
                        color: {
                            type: "linear",
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(198, 234, 255, 0.8)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 138, 255, 0.4)"
                                }
                            ],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            ]
        }
    ]
};
//基础环形图
export const baseInfoCircleNormalOption: any = {
    // 标题组件
    title: {
        text: "总营收", //主标题文本
        x: "31%",///标题在x轴位置
        y: "38%",//标题在y轴位置
        textAlign: "center",//整体（包括 text 和 subtext）的水平对齐
        textStyle: {
            fontWeight: "normal",//主标题文字字体的粗细。
            color: "white", //主标题文字颜色
            fontSize: getRate(14)//主标题文字的字体大小
        },
        subtext: "",//副标题文本
        //副标题文本样式
        subtextStyle: {
            color: "white",//颜色
            fontSize: getRate(22)//字体
        }
    },
    color: ["#FFD200", "#0012FF", "#2FD1FF", "#4EE988", "#2752E9"],//调色盘颜色列表。
    tooltip: {
        trigger: "item",
        formatter: "{b}<br/> 数量：{c}，百分比{d}%",
        ...tooltipObj
    },
    //图例
    legend: {
        type: "scroll",//图例的类型：滚动
        right: "15%",
        orient: "vertical",//图例列表的布局朝向:垂直
        top: "middle",//图例组件离容器上侧的距离。
        itemGap: 18,//图例每项之间的间隔
        itemWidth: 10,//图例标记的图形宽度。
        itemHeight: 10,//图例标记的图形高度。
        textStyle: {
            color: "#fff",//颜色
            fontSize: getRate(12, 11)//字体大小
        },
        data: [],
        formatter: null
    },
    series: [
        {
            type: "pie",
            radius: ["40%", "55%"],//半径
            right: "35%",
            bottom: 0,
            avoidLabelOverlap: false,//是否启用防止标签重叠策略，默认开启
            //饼图图形上的文本标签
            label: {
                show: false,//隐藏
                position: "center" //居中
            },
            //标签的视觉引导线配置
            labelLine: {
                show: false//隐藏
            },
            data: []
        }
    ]
};
//折线图
const lineColor = ["#009CFF", "#0078FF", "#07D3FF", "#FEB144", "#FFEA00"];
const hexToRgba = (hex, opacity) => {
  let rgbaColor = "";
  const reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
};
//折线图配置项
export const lineOption:any= {
    tooltip: {
      trigger: "axis",
      ...tooltipObj
    },
    grid: {
      left: "3%",
      right: "30",
      bottom: "120",
      top: "10px",
      containLabel: false //grid 区域是否包含坐标轴的刻度标签。
    },
    xAxis: {
      type: "category",
      name: "",
      nameTextStyle: {
        color: "rgba(255, 255, 255, 0.5)" //name的颜色
      },
      data: [],
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: getRate(10,10),
        color: "rgba(255, 255, 255, 0.8)"
      },
      axisLine: {
        lineStyle: {
          color: "rgba(0, 33, 107, 1)"
        }
      }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: getRate(10,10),
        color: "rgba(255, 255, 255, 0.5)"
      },
      splitLine: {
        lineStyle: {
          // type: "dashed",
          color: "rgba(0, 33, 107, 0.5)"
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: []
    },
    series: [
      {
        name: "支付金额",
        type: "line",
        smooth: true,
        data: [],
        areaStyle: {
          //渐变色
          color:new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(77, 232, 255, 0.6)"
              },
              {
                offset: 1,
                color: "rgba(42, 166, 255, 0.6)"
              }
            ],
            false
          ),
          shadowColor: hexToRgba(lineColor[0], 0.1),//阴影颜色
          shadowBlur: 5
        },
        itemStyle: {
          color: "#38C0FE"
        }
      }
    ]
  };