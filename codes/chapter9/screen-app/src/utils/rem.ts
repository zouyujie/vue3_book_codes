// 设置 rem 函数
function setRem () {
    //  PC端
    console.log('非移动设备')
    // 基准大小
    const baseSize = 1920;
    const basePc = baseSize / 1920; // 表示1920的设计图,使用1920PX的默认值
    let vW = document.documentElement.clientWidth;//window.innerWidth; // 当前窗口的宽度
    const vH = document.documentElement.clientHeight;//window.innerHeight; // 当前窗口的高度
    // 非正常屏幕下的尺寸换算
    const dHeight=937;//1080
    const dueH = vW * dHeight / 1920;
    console.log('值',vW,vH,dueH)
    if (vH < dueH) { // 当前屏幕高度小于应有的屏幕高度，就需要根据当前屏幕高度重新计算屏幕宽度
      vW = vH * 1920 /dHeight
    }
    const rem = vW * basePc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize =  rem + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
};