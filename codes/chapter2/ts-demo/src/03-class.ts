/* 
1.类的基本定义与使用
*/
class Greeter {
    // 声明属性
    greeting: string;

    // 构造方法
    constructor(message: string) {
        this.greeting = message;
    }

    // 一般方法
    greet(): string {
        return '你好，' + this.greeting;
    }
}

// 创建类的实例
const greeter = new Greeter('你在他乡还好吗');
// 调用实例的方法
console.log(greeter.greet()); //你好，你在他乡还好吗

/* 
2.类的继承
*/
//动物类
// class Animal {
//     //跑
//     run(distance: number) {
//         console.log(`跑了${distance}m`);
//     }
// }
// //鸭子继承动物类
// class Duck extends Animal {
//     //叫
//     cry() {
//         console.log('嘎嘎嘎');
//     }
// }

// const duck = new Duck(); //实例化鸭子对象
// duck.cry(); //调用鸭子的cry方法 --嘎嘎嘎
// duck.run(100); //可以调用从父中继承得到的run方法 --跑了100m

//-------------复杂实例-----------------
// //动物类
// class Animal {
//     name: string;
    
//     constructor (name: string) {
//       this.name = name;
//     }
  
//     run (distance: number=0) {
//       console.log(`${this.name}跑了${distance}m`);
//     }
  
//   }
//   //蛇类继承动物类
//   class Snake extends Animal {
//     constructor (name: string) {
//       // 调用父类型构造方法
//       super(name);
//     }
  
//     // 重写父类型的方法
//     run (distance: number=5) {
//       console.log('蛇开始游走...');
//       super.run(distance);
//     }
//   }
  
//   //马类继承动物类
//   class Horse extends Animal {
//     constructor (name: string) {
//       // 调用父类型构造方法
//       super(name);
//     }
  
//     // 重写父类型的方法
//     run (distance: number=50) {
//       console.log('马开始奔跑...')
//       // 调用父类型的一般方法
//       super.run(distance);
//     }
//     //马类特有扩展的方法
//     eat () {
//       console.log('吃草');
//     }
//   }
  
//   const snake = new Snake('白素贞');
//   snake.run();
  
//   const horse = new Horse('赤兔马');
//   horse.run();
  
//   // 父类型引用指向子类型的实例 ==> 多态
//   const wuzhui: Animal = new Horse('乌骓马');
//   wuzhui.run();
//   wuzhui.run(24);
  
//   /* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */
//   const qingshe: Snake = new Animal('青蛇');
//   qingshe.run();
//   /* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */
//   const dilu: Horse = new Animal('的卢'); //error:Horse中有eat方法，但是Animal中没有
//   dilu.run();
  

/**
 * 3 公共，私有与受保护的修饰符
 */
//默认为 public
// class Animal {
//     public name: string;
  
//     public constructor (name: string) {
//       this.name = name;
//     }
  
//     public run (distance: number=0) {
//       console.log(`${this.name}跑了${distance}m`);
//     }
//   }

// 理解 private
//   class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// new Animal("Cat").name; // 错误: 'name' 是私有的.

// class Person extends Animal {
//     private age: number = 35;
//     protected skill: string = '小李飞刀';
  
//     run (distance: number=5) {
//       console.log('人开始跑...');
//       super.run(distance);
//     }
//   }
  
//   class Student extends Person {
//     run (distance: number=6) {
//       console.log('学生开始跑...');
  
//       console.log(this.skill); // 子类能看到父类中受保护的成员
//       console.log(this.age); //error: 子类看不到父类中私有的成员
  
//       super.run(distance);
//     }
//   }
  
//   console.log(new Person('李寻欢').name); // 李寻欢--公开的可见
//   console.log(new Person('李寻欢').sex); //undefined--error: 受保护的不可见
//   console.log(new Person('李寻欢').age); //35--error:  私有的不可见

/**
 * 4 readonly 修饰符
 */
//   class Person {
//     readonly name: string = '谢晓峰'
//     constructor(name: string) {
//       this.name = name
//     }
//   }
  
//   let per = new Person('三少爷');
//   console.log(per.name);//三少爷;
//   per.name = '阿吉'; // error
//   console.log(per.name);//阿吉--尽管报错，还是会显示出来

//参数属性
//   class Person {
//     constructor(readonly name: string) {
//     }
//   }
  
//   const per = new Person('三少爷');//三少爷;
//   console.log(per.name);
  
//5.存取器
// class Person {
//     fullName?: string;
// }

// let employee = new Person();
// employee.fullName = "独孤求败";
// if (employee.fullName) {
//     console.log(employee.fullName);//独孤求败
// }
//get set
// class Person {
//     firstName: string = '独孤';
//     lastName: string = '求败';
//     get fullName () {
//       return this.firstName + '-' + this.lastName
//     }
//     set fullName (value) {
//       const names = value.split('-');
//       this.firstName = names[0];
//       this.lastName = names[1];
//     }
//   }
  
//   const p = new Person();
//   console.log(p.fullName);//独孤-求败
  
//   p.firstName = '独孤';
//   p.lastName =  '天峰';
//   console.log(p.fullName);//独孤-天峰
  
//   p.fullName = '逆天-唯我';
//   console.log(p.firstName, p.lastName);//逆天 唯我

  //6.静态属性
//   class Person {
//     name: string = '独孤天峰';
//     static skill: string = '天魔血爪';
//   }
//   console.log(new Person().name);//独孤天峰
//   console.log(Person.skill);//天魔血爪

  //7.抽象类
  abstract class Animal {
    abstract cry ():void;
    run () {
      console.log('动物在奔跑');
    }
  }
  class Person extends Animal {
    cry () {
      console.log('会哭的人不一定流泪');
    }
  }
  const per = new Person();
  per.cry();//会哭的人不一定流泪
  per.run();//动物在奔跑
  
  