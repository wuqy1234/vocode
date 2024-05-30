function Cat(e) {
    console.log("你好", e);
    //因为这个原型上的方法是定义在函数内部的,所以需要函数运行了才能访问到
    Cat.prototype.sayHi = function () {
        console.log('Meow, My name is ');
    }
}
Cat()
Cat.prototype.sayHi()