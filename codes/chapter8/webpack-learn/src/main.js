import $ from 'jquery';
// import './css/index.css';
// import './css/index.less';
// import './css/iconfont.css'
import './css/index.scss';

// import tab from './js/tab.js';

import tab from './js/tab';

$(() => {
  $('li:odd').css('backgroundColor', 'lightblue');
  // $('li:even').css('backgroundColor', 'lightgreen')
  $('li:even').css('backgroundColor', 'pink');
});
console.log('module.hot', module.hot);
if (module.hot) {
  // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
  module.hot.accept('./js/tab.js', () => {
    // 方法会监听 tab.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
    console.log('tab变化了', tab.say());
  });
}
