//基础类型示例
(() => {
    //1.布尔类型
    let isDone: boolean = false;
    isDone = true;
    // isDone = 1 // error：Type 'number' is not assignable to type 'boolean'
    console.log(isDone); //true

    //2.数值类型
    let decLiteral: number = 10; // 十进制
    let binaryLiteral: number = 0b1010; // 二进制
    let octalLiteral: number = 0o12; // 八进制
    let hexLiteral: number = 0xa; // 十六进制
    console.log(decLiteral, binaryLiteral, octalLiteral, hexLiteral); //10 10 10 10

    //3.字符串类型
    let name: string = '尹天仇';
    name = '喜剧之王';
    // name = 32 // error
    let age: number = 32;
    const info = `我是${name}，我今年${age}岁!`;
    console.log(info);//我是喜剧之王，我今年32岁!

    //4. undefined 和 null
    let u: undefined = undefined;
    let n: null = null;

    //5. 数组
    let listN: number[] = [1, 2, 3, 4];
    let listS: string[] = ["零零恭", "零零喜", "零零发", "零零财"];
    let list: Array<string> = ["周星驰", "李若彤"];

    //6. 元组 Tuple
    let x: [string, number]; // 定义元组类型
    // 初始化数据
    x = ['杨万里', 30]; // OK
    // 错误的初始化
    // x = [30, '杨万里']; // Error：Type 'string' is not assignable to type 'number'

    console.log(x[0].substr(1)); // 万里
    // console.log(x[1].substr(1)); // Error：Property 'substr' does not exist on type 'number'

    //7.枚举
    enum BillType {
        Repair,
        Check,
        Maintain
    }
    // 枚举数值默认从0开始依次递增
    // 根据特定的名称得到对应的枚举数值
    let billType: BillType = BillType.Repair;// 0
    console.log(billType, BillType.Repair, BillType.Check);//0 0 1

    // enum BillType { Repair  = 1, Check, Maintain };//1,2,3
    // let b: BillType = BillType.Check; //2

    // enum BillType { Repair  = 1, Check=3, Maintain=5 };//1,3,5
    // let b: BillType = BillType.Check; //3

    // enum BillType { Repair = 1, Check, Maintain };
    // let billType: string = BillType[2]
    // console.log(billType)  // 显示'Check'，因为上面代码里它的值是2

    //8. any
    let notSure: any = 24;
    notSure = '雪飘人间'; //可以是个字符串
    notSure = false; // 也可以是个布尔值

    let listAny: any[] = [30, false, '归海一刀'];
    listAny[1] = '地字第一号';//可以修改数据类型

    //9.void
    // 表示没有任何类型, 一般用来说明函数的返回值不能是undefined之外的值
    function fn(): void {
        console.log("天苍苍，野茫茫");//返回结果：undefined
        // return undefined;// ok undefined
        // return null;//error:Type 'null' is not assignable to type 'void'
        // return 1 // error:Type 'number' is not assignable to type 'void'
    }
    console.log(fn()); //undefined

    let unusable: void = undefined;

    //10.never
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

    //11.Object
    // declare function create(o: object | null): void;
    // create({ age: 32 }); // OK
    // create(null); // OK
    // create(30); // Error
    // create("石小猛"); // Error
    // create(false); // Error
    // create(undefined); // Error

    // 12.联合类型
    function toStr(x: number | string): string {
        return x.toString()
    }
    // function getLength(x: number | string): number {
    //     // return x.length // error
    //     if (x.length) { // error
    //         return x.length;
    //     } else {
    //         return x.toString().length
    //     }
    // }
    //13. 类型断言
    function getLength(x: number | string): number {
        if ((<string>x).length) {
            return (x as string).length
        } else {
            return x.toString().length
        }
    }
    console.log(getLength('真的爱你'), getLength(1024));//4 4

    // 14 类型推断
    /* 定义变量时赋值了, 推断为对应的类型 */
    let val = 122; // number
    // val = '交通事故报警电话' // error

    /* 定义变量时没有赋值, 推断为any类型 */
    let anyType;  // any类型
    anyType = 122;
    anyType = '交通事故报警电话';

})();

