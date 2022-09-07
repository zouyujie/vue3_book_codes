(function () {
    var Student = /** @class */ (function () {
        function Student(userName, age, skill) {
            this.userName = userName;
            this.age = age;
            this.skill = skill;
            this.msg = userName + age + skill;
        }
        return Student;
    }());
    function greeter(person) {
        return "丐帮： " + person.userName + "年龄：" + person.age + "，绝技 " + person.skill;
    }
    var user = new Student("萧峰", 32, "降龙十八掌、擒龙功");
    document.body.innerHTML = greeter(user);
})();
