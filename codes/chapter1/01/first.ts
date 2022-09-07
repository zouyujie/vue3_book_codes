//自调用函数
(() => {
        function greeter(msg:string) {
            return '你好，' + msg;
        }
        let msg = '中国';
        console.log(greeter(msg));
    })();