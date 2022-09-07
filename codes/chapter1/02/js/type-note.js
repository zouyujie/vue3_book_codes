(function () {
    function showMsg(person) {
        return "天龙三兄弟： " + person.join(',');
    }
    var user = ["乔峰", "段誉", "虚竹"];
    // let user="慕容复";
    document.body.innerHTML = showMsg(user);
})();
