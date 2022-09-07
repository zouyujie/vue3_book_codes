(() => {
    //----------------1.泛型引入--------------
    // function createArray(value: any, count: number): any[] {
    //     const arr: any[] = [];
    //     for (let index = 0; index < count; index++) {
    //         arr.push(value);
    //     }
    //     return arr;
    // }
    // const arr1 = createArray(17, 3);
    // const arr2 = createArray('鹅', 3);
    // console.log(arr1[0].toFixed(), arr2[0].substr(0)); //17 鹅

    //----------------2.泛型函数--------------
    // function createArray <T> (value: T, count: number) {
    //     const arr: Array<T> = []
    //     for (let index = 0; index < count; index++) {
    //       arr.push(value)
    //     }
    //     return arr
    //   }
    //   const arr1 = createArray<number>(17, 3)
    //   console.log(arr1[0].toFixed());
    //   console.log(arr1[0].substr(0)); // error

    //   const arr2 = createArray<string>('鹅', 3)
    //   console.log(arr2[0].substr(0));
    //   console.log(arr2[0].toFixed()) // error

    //----------------3.多个泛型参数的函数--------------
    //   function swap <K, V> (a: K, b: V): [K, V] {
    //     return [a, b];
    //   }
    //   const result = swap<string, number>('孙悟空', 72);
    //   console.log(result[0].length, result[1].toFixed()); //3 "72"

    //----------------4.泛型接口--------------
    //定义基接口
    interface Ibase<T> {
        data: T[];//数据列表
        add: (t: T) => void; //添加
        detail: (id: number) => T | undefined; //获取详情
    }
    //定义用户类
    class User {
        id?: number; //id主键自增
        name: string; //姓名
        age: number; //年龄

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    //定义一个实现了基接口Ibase<T>的类UserService，泛型类指定为User
    class UserService implements Ibase<User> {
        data: User[] = [];

        add(user: User): void {
            user = { ...user, id: Date.now() };
            this.data.push(user);
            console.log('添加用户', user.id);
        }

        detail(id: number): User | undefined {
            return this.data.find(item => item.id === id);
        }
    }

    const userService = new UserService();//实例化对象
    userService.add(new User('女帝', 29));//添加数据
    userService.add(new User('石瑶', 27));
    console.log(userService.data);

    //----------------5.泛型类--------------
    class GenericNumber<T> {
        zeroValue?: T;
        add?: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };

    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "大唐";
    stringNumeric.add = function (x, y) { return x + y; };

    console.log(stringNumeric.add(stringNumeric.zeroValue, "不良人")); //大唐不良人

    //----------------6.泛型约束--------------
    // 没有泛型约束
    // function fn<T>(x: T): void {
    //     console.log(x.length);  // error
    // }

    //定义一个接口，来约束对象属性
    interface LengthAttribute {
        length: number;
    }
    // 指定泛型约束
    function fun<T extends LengthAttribute>(x: T): void {
        console.log(x.length);
    }

    fun('李淳风');
    // fun(31); // error：number类型没有length属性



})();