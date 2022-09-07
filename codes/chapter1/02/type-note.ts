(()=>{
    function showMsg(person: string[]) {
        return "天龙三兄弟： " + person.join(',');
    }
    let user = ["乔峰","段誉","虚竹"];
    // let user="慕容复";
    document.body.innerHTML = showMsg(user);
})();