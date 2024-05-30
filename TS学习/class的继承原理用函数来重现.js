// 定义一个__extends函数，用于类的继承
var __extends =
    (this && this.__extends) ||
    function (d, b) {
        // 遍历父类b的属性，如果有，则将其复制到子类d上
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        // 设置子类的constructor为d
        function __() {
            this.constructor = d;
            // 当下面的Cat调用__extends函数时,由于Cat的值是一个立即调用的闭包函数,
            //所以返回了一个函数,即:function Cat() {_super.apply(this, arguments)};
            //__extends(Cat, _super);在变量Cat下面,因此参数里的Cat是变量Cat右边的值,同时函数被立即执行了.
            //因此这里的"d"是闭包函数返回的function Cat() {_super.apply(this, arguments)};d拥有一个封闭的环境.
        }
        // 利用原型链实现继承
        d.prototype = (b === null ? Object.create(b) : ((__.prototype = b.prototype), new __()))
        //三元运算符表达式中,可以用括号括起来true和false的返回值,括号中可以执行多个表达式,最终返回最后一个表达式.
        //在((__.prototype = b.prototype), new __())中,两个表达式都会执行,返回的是最后面的表达式,即:new __(),
        //当名为"__()"下划线的函数使用new调用时,会立即创建this.constructor = d这个属性,
        // 同时"__()"下划线的函数变成了一个实例对象,因此this会暂时指向这个实例对象,当使用d.prototype=new __()时,此时this就指向d(d为cat)
        //所以说这里发生了2次原型继承,第一次__.prototype = b.prototype,第二次d.prototype=new __(),
        //b是父级,new __()是中间桥梁,d是子级.  new __()是中间桥梁不仅继承了父级b而且还集和了d这个子级的所有,
        //最后这个中间桥梁被子级继承了,所以子级顺利继承了父级.这是整个继承过程.
        console.log(b === null ? Object.create(b) : ((__.prototype = b.prototype), '执行最后一个表达式'));
    };

// 定义Animal基类
var Animal = (function () {
    function Animal(name) {
        // 构造函数，初始化动物名字
        this.name = name;
    }
    return Animal;
})();

// 定义Cat类，继承自Animal类

let Cat = (function (_super) {

    __extends(Cat, _super);
    // Cat类的构造函数，调用父类的构造函数
    function Cat() {
        _super.apply(this, arguments);

    }
    // 定义Cat类的sayHi方法，用于打印问候语
    Cat.prototype.sayHi = function () {
        console.log('Meow, My name is ' + this.name);
    };
    return Cat;
})(Animal);

// 创建一个Cat类的实例，并初始化名字为'Tom'
//当使用new时,不仅创建了实例,同时执行了构造器函数
var cat = new Cat('Tom');


