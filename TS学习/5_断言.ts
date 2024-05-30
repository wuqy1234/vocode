interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
//访问共同属性不会出错
function getName(animal: Cat | Fish) {
    return animal.name;
}


function isFish(animal: Cat | Fish) {//传了一个对象，判断是否是Fish类型
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}
//上面的例子编译时不会报错，但在运行时会报错
// swim(tom);

////////////////////////////////////////////////////////////////

class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

console.log(isApiError(new ApiError()));

////////////////////////////////////////////////////////////////////
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError1(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
///////////////////////////////////////////////////////////////
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom1 = getCacheData('tom') as Cat;
tom1.run();
/////////////////////////////////////////////////////////////////
interface Animal {
    //这里什么都没有也是可以的，但是不建议
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
let tom2: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal: Animal = tom2;
///////////////////////////////
interface Animal {
    name: string;
}
interface Cat extends Animal {
    run(): void;
}
let tom3: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};
let animal1: Animal = tom3;
//这里和上面的是一样的
////////////////////////////////////
interface Animal {
    name: string;

}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat).run();
}
function testCat(cat: Cat) {
    return (cat as Animal).name;
}
////////////////////////////////////////////////
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat1(cat: Cat) {
    return (cat as any as Fish);//双重断言
}
///////////////////////////////////////////////////
//类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除
function toBoolean(something: any): boolean {
    return something as boolean;
}

toBoolean(1);
/////////////////////////////////////////////////////////////////////
//所谓断言,其目的是为了规范数据类型,避免错漏.
function getCacheData1(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom4 = getCacheData1('tom') as Cat;
tom4.run();
//////////////////////////////////////////////////////////
function getCacheData2(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}


let tom5: Cat = getCacheData2('tom');
tom5.run();


//上面的例子中，我们通过类型声明的方式，将 tom 声明为 Cat，
//然后再将 any 类型的 getCacheData('tom') 赋值给 Cat 类型的 tom。
//any类型的数据能够赋值给任何类型，所以这里没有报错。
//any类型相当于空接口，它没有任何类型属性，所以它赋值给任何类型都不会报错。
//使用了空接口的变量，其他类型变量引用该变量就会报错,但是可以通过断言来解决。
interface Cat1 {}
let aa: Cat1 = {
    name: "bob",
    run() {},
}
tom5 = {
    name: "bob",
    run() { },
}
//在aa赋值后,其他类型变量引用aa就会报错
//让tom5 = aa;会报错,因为两者的接口不一致
//除非aa是any类型,那么tom5 = aa;就b
////////////////////////////////////////////////////
//使用了空接口的变量，其他类型变量引用该变量就会报错,但是可以通过断言来解决。
//断言哪个接口,那么就能使用哪个接口中的属性和方法了
let bb = getCacheData2('tom') as Cat1;
// bb.run();由于bb是Cat1类型,所以cat1没有run方法,所以报错
/////////////////////////////////////////////////////////////////
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal3: Animal = {
    name: 'tom'
};
// let tom6 = animal3 ;tom没有确定类型,所以会类型推断为animal3
let tom6 = animal3 as Cat;//这里是改变了tom6的类型,所以可以调用run方法
tom6.run()
 //父集可以断言为子集,然后可以调用子集的方法,子集可以断言为父集后,只能使用父集的方法和属性
// const animal3: Cat = {
//     name: 'tom',
//     run() { console.log('run') }
// };
// let tom6 = animal3 as Animal;
// tom6.name;//使用Animal类型,所以只能使用Animal类型中的属性和方法,不能使用run方法.
/////////////////////////////////////////////////////////////////////////////////////////////////
function getCacheData4<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom7 = getCacheData4<Cat>('tom');
tom.run();


