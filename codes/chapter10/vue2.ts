//订阅者
class Watcher {
  constructor() {}

  update() {
    console.log("发生update");
  }
}
//发布订阅者
class Dep {
  static target: ?Watcher;
  subs: Array<Watcher>;

  constructor() {
    this.subs = [];
  }

  addSub(sub: Watcher) {
    this.subs.push(sub);
  }

  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }

  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
class Vue {
  constructor(options) {
    observer(options.data);
  }
  //响应式处理
  observe(obj) {
    if (typeof obj !== "object" || obj == null) {
      return;
    }
    // 增加数组类型判断，若是数组则覆盖其原型
    if (Array.isArray(obj)) {
      const originalProto = Array.prototype;
      //拷贝一份数组原型方法
      const arrayProto = Object.create(originalProto);
      defineReactiveArr(obj, arrayProto);
    } else {
      //对象遍历处理
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        defineReactive(obj, key, obj[key]);
      }
    }
  }
  /*对象处理*/
  defineReactive(obj, key, val) {
    observe(val); // 解决嵌套对象问题
    Object.defineProperty(obj, key, {
      get() {
        dep.depend(); //依赖收集
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          observe(newVal); // 新值是对象的情况
          val = newVal;
          dep.notify(); //派发更新
        }
      },
    });
  }
  /*数组处理*/
  defineReactiveArr(obj, arrayProto) {
    Object.setPrototypeOf(obj, arrayProto);
    //这七个方法会让数组的长度或顺序发生变化，需要单独处理
    ["push", "pop", "shift", "unshift", "splice", "reverse", "sort"].forEach(
      (method) => {
        //方法重写
        arrayProto[method] = function () {
          originalProto[method].apply(this, arguments);
          let inserted;
          switch (method) {
            case 'push':
            case 'unshift':
              inserted = arguments
              break
            case 'splice':
              inserted = arguments.slice(2)
              break
          }
          observe(inserted);//处理项进行响应式化
          dep.notify(); //派发更新
        };
      }
    );
  }
}
