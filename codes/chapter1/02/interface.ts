(()=>{
    interface Person {
        userName: string;
        age: number;
        skill:string
    }
    function greeter(person: Person) {
        return `丐帮：${person.userName}，年龄：${person.age}，绝技：${person.skill}`;
    }
    let user = { userName: "萧峰",age:32,skill:"降龙十八掌、擒龙功" };
    document.body.innerHTML = greeter(user);
})()