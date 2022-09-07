(() => {
    class Student {
        // msg: string;
        // constructor(public userName, public age, public skill) {
        //     this.msg = userName + " " + age + " " + skill;
        // }
        msg: string;
        userName: string;
        age: number;
        skill: string;
        constructor(userName: string, age: number, skill: string) {
            this.userName = userName;
            this.age=age;
            this.skill = skill;
            this.msg = userName + age + skill;
        }
    }
    interface Person {
        userName: string;
        age: number,
        skill: string;
    }
    function greeter(person: Person) {
        return "丐帮： " + person.userName + "年龄：" + person.age + "，绝技 " + person.skill;
    }
    let user = new Student("萧峰", 32, "降龙十八掌、擒龙功");
    document.body.innerHTML = greeter(user);
})();