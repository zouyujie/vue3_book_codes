(() => {
    // 1.ECMAScript 的内置对象
    let b: Boolean = new Boolean(1);
    let n: Number = new Number(true);
    let s: String = new String('18岁');
    let d: Date = new Date();
    let r: RegExp = /^1/;
    let e: Error = new Error('error message');
    console.log(b); //Boolean对象
    b = true; 
    console.log(b); //true
    let bl: boolean = new Boolean(2);  // error：Boolean类型不能赋值给boolean类型

    //2.BOM 和 DOM 的内置对象
    const div: HTMLElement | null = document.getElementById('app');
    const divs: NodeList = document.querySelectorAll('div');
    document.addEventListener('click', (event: MouseEvent) => {
        console.dir(event.target);//html
    })
    const fragment: DocumentFragment = document.createDocumentFragment();

})();