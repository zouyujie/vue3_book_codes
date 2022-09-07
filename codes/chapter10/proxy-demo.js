let arr = [1,2,3];
let p = new Proxy(arr,{
    //三个参数，第一个参数是目标对象，第二个参数是get方法，第三个参数是set方法
    get(data,property,receiver){
        // 1.目标对象
        // 2.被获取的属性值
        // 3.Proxy或继承Proxy
        console.log('get被调用了')
    },
    set(data,property,value,receiver){
    	console.log('数组内部发生了变化，更新后的值为：' + value)
    	
	}
})

p[1] = 5; //数组内部发生了变化，更新后的值为：5
