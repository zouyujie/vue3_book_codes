import { createStore } from "vuex";
const modulesFiles = require.context('./modules', false, /\.ts$/);

//动态加载modules下所有ts文件
const modules = modulesFiles.keys().reduce((modules:any, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules
});
