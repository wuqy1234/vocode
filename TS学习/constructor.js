function sayHi(e) {
    console.log("你好", e);
}
let one = new sayHi();

let cc = new one.constructor("小明");
console.log(typeof one,'使用了new就会创建一个实例对象');
console.log(one.constructor);
one.constructor("小红")
function rabbit() { };
let white_rabbit = function () { };
let black_rabbit = {};
rabbit.prototype = {
    //手动设置constructor,只能设置为对象或者已经声明的函数或函数表达式
    constructor: sayHi,//也可以填sayHi,white_rabbit,black_rabbit
    test: function () {
        console.log("test");
    }
}
// console.log(rabbit.constructor===test);
console.log(rabbit.prototype.constructor === rabbit);
//当使用new时,不仅创建了实例,同时执行了构造器函数rabbit
let rabbit_1 = new rabbit();
rabbit_1.test();