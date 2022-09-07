(() => {
    /**
     *--------------- 1.基本示例------------------
     */
    // // 命名函数
    // function add(x, y) {
    //     return x + y
    // }

    // // 匿名函数
    // let myAdd = function (x, y) {
    //     return x + y;
    // }

    /**
    * ---------------2.为函数定义类型-----------
    */
    // // 命名函数
    // function add(x: number, y: number): number {
    //     return x + y
    // }

    // 匿名函数
    // let myAdd = function (x: number, y: number): number {
    //     return x + y;
    // }
    // 书写完整函数类型
    let myAdd: (x: number, y: number) => number =
        function (x: number, y: number): number {
            return x + y
        }

    /**
     * --------3.可选参数和默认参数--------------
     */

    // function getUrl(prefix: string = '/api/', url?: string): string {
    //     if (url) {
    //         return prefix + '-' + url;
    //     } else {
    //         return prefix;
    //     }
    // }

    // console.log(getUrl('/ctrl/', 'base/getUserList'));///ctrl/-base/getUserList
    // console.log(getUrl('/ctrl/'));///ctrl/
    // console.log(getUrl());///api/

    //--------------4.剩余参数----------------
    function getUrl(prefix: string, ...urls: string[]) {
        return prefix + urls.join("/");
    }

    let fullUrl = getUrl("/base/", "user", "getList");///base/user/getList
    console.log(fullUrl);

    let getUrlFun: (prefix: string, ...rest: string[]) => string = getUrl;

    //--------------5.函数重载----------------
    // 重载函数声明
    function add(x: string, y: string): string;
    function add(x: number, y: number): number;

    // 定义函数实现
    function add(x: string | number, y: string | number): string | number {
        // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        return '';
    }

    console.log(add(2, 17)); //19
    console.log(add('金风', '玉露')); //金风玉露
    // console.log(add(1, '凡')); // error
})();