(function () {
    function greeter(person) {
        return "\u4E10\u5E2E\uFF1A" + person.userName + "\uFF0C\u5E74\u9F84\uFF1A" + person.age + "\uFF0C\u7EDD\u6280\uFF1A" + person.skill;
    }
    var user = { userName: "萧峰", age: 32, skill: "降龙十八掌、擒龙功" };
    document.body.innerHTML = greeter(user);
})();
