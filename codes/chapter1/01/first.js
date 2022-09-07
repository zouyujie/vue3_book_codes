//自调用函数
(function () {
    function greeter(msg) {
        return '你好，' + msg;
    }
    var msg = '中国';
    console.log(greeter(msg));
})();
