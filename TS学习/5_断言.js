var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//访问共同属性不会出错
function getName(animal) {
    return animal.name;
}
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
var tom = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
function swim(animal) {
    animal.swim();
}
//上面的例子编译时不会报错，但在运行时会报错
// swim(tom);
////////////////////////////////////////////////////////////////
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
console.log(isApiError(new ApiError()));
function isApiError1(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
///////////////////////////////////////////////////////////////
function getCacheData(key) {
    return window.cache[key];
}
var tom1 = getCacheData('tom');
tom1.run();
var tom2 = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
var animal = tom2;
var tom3 = {
    name: 'Tom',
    run: function () { console.log('run'); }
};
var animal1 = tom3;
function testAnimal(animal) {
    return animal.run();
}
function testCat(cat) {
    return cat.name;
}
function testCat1(cat) {
    return cat; //双重断言
}
///////////////////////////////////////////////////
//类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除
function toBoolean(something) {
    return something;
}
toBoolean(1);
/////////////////////////////////////////////////////////////////////
//所谓断言,其目的是为了规范数据类型,避免错漏.
function getCacheData1(key) {
    return window.cache[key];
}
var tom4 = getCacheData1('tom');
tom4.run();
//////////////////////////////////////////////////////////
function getCacheData2(key) {
    return window.cache[key];
}
var tom5 = getCacheData2('tom');
tom5.run();
var aa = {
    name: "bob",
    run: function () { },
};
tom5 = {
    name: "bob",
    run: function () { },
};
//在aa赋值后,其他类型变量引用aa就会报错
//让tom5 = aa;会报错,因为两者的接口不一致
//除非aa是any类型,那么tom5 = aa;就b
////////////////////////////////////////////////////
//使用了空接口的变量，其他类型变量引用该变量就会报错,但是可以通过断言来解决。
//断言哪个接口,那么就能使用哪个接口中的属性和方法了
var bb = getCacheData2('tom');
var animal3 = {
    name: 'tom'
};
// let tom6 = animal3 ;tom没有确定类型,所以会类型推断为animal3
var tom6 = animal3; //这里是改变了tom6的类型,所以可以调用run方法
tom6.run();
//父集可以断言为子集,然后可以调用子集的方法,子集可以断言为父集后,只能使用父集的方法和属性
// const animal3: Cat = {
//     name: 'tom',
//     run() { console.log('run') }
// };
// let tom6 = animal3 as Animal;
// tom6.name;//使用Animal类型,所以只能使用Animal类型中的属性和方法,不能使用run方法.
/////////////////////////////////////////////////////////////////////////////////////////////////
function getCacheData4(key) {
    return window.cache[key];
}
var tom7 = getCacheData4('tom');
tom.run();
