(() => {
    //1.普通接口
    // 定义人的接口
    // interface IPerson {
    //     id: number;
    //     name: string;
    //     age: number;
    //     sex: string;
    //     skill: string[]
    // }
    // 定义实现了IPerson接口的per对象
    // const per: IPerson = {
    //     id: 1,
    //     name: '陈家洛',
    //     age: 30,
    //     sex: '男',
    //     skill:['庖丁解牛']
    // };

    //2.可选属性
    // interface IPerson {
    //     id: number;
    //     name: string;
    //     age: number;
    //     sex: string;
    //     skill?: string[]
    // }
    // const per: IPerson = {
    //     id: 1,
    //     name: '陈家洛',
    //     age: 30,
    //     sex: '男',
    //     // skill:['庖丁解牛'] //可以没有
    // };

    //3.可读属性
    // interface IPerson {
    //     readonly id: number;
    //     name: string;
    //     age: number;
    //     sex: string;
    //     skill?: string[]
    // }
    // const per: IPerson = {
    //     id: 1,
    //     name: '陈家洛',
    //     age: 30,
    //     sex: '男',
    //     // skill:['庖丁解牛'] //可以没有
    //     wife: '香香公主' // error 没有在接口中定义, 不能有
    // };
    // per.id = 7; // error 只读属性不能修改

    //4.函数类型
    // 接口可以描述函数类型(参数的类型与返回的类型)
    // interface ISearchData {
    //     (list: string[], name: string): string[]
    // }

    // const search: ISearchData = function (list: string[], name: string): string[] {
    //     return list.filter(f => { return f == name });
    // }
    // console.log(search(['桃花','仙人','种桃树'], '桃花')); //["桃花"]

    //5.类类型
    //动物接口
    interface IAnimal {
        eat(): void;     //吃东西的方法 
    }
    //人的接口
    interface IPerson{
       study():void; //学习的方法
       sing():void; //唱歌的方法
    }
    // class User implements Animal{
    //     eat(){
    //         console.log('大口吃肉');
    //     }
    // }
    // 1.一个类可以实现多个接口
    class User implements IAnimal,IPerson{
        eat(){
            console.log('大口吃肉');
        }
        study(){
            console.log('钻木取火');
        }
        sing(){
            console.log('两只老虎爱跳舞');
        }
    }
    // 2. 一个接口可以继承多个接口
    interface IUser extends  IAnimal,IPerson{

    }
})();