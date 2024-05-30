function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("不能是负数，并且必须是整数。");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}



let diff, result;
let num = 40;
let i = 1;
let t = 1000;

//测试函数执行完后,隔一秒再执行;
// let start = Date.now();
// setTimeout(function run() {
//     let start1 = Date.now();
//     try {
//         result = fib(num);
//     } catch (err) {
//         result = 0;
//     } finally {
//         diff1 = Date.now() - start1;//计算耗时
//         diff = Date.now() - start;//总耗时
//         console.log('嵌套setTimeout');
//         console.log(`测试函数执行完后,隔${t / 1000}S再执行时所花费的时间:`, diff, diff1, i);
//         start = Date.now();
//     }
//     i++;
//     let timer = setTimeout(run, t);
//     if (i > 10) {
//         clearTimeout(timer);//计时器与下面的计时器重名没有关系,因为块级作用域,这里的timer在下面函数中不可见;
//         console.log('setTimeout执行完毕.................');
//         nextSet();
//     }
// }, 1000);


function nextSet() {

    //测试隔一秒执行一次函数;
    let start_1 = Date.now();
    let i = 1;

    let timer_1 = setInterval(() => {

        let start1 = Date.now();
        try {
            result = fib(num);
        } catch (err) {
            result = 0;
        } finally {
            diff1 = Date.now() - start1;//计算耗时
            diff = Date.now() - start_1;//总耗时
            console.log('setinterval测试:');
            console.log(`每隔${t / 1000}S执行一次函数计算所花费的时间:`, diff, diff1, i);
            start_1 = Date.now();
        }
        i++;
        if (i > 10) {
            clearTimeout(timer_1);
            console.log('setInterval执行完毕.................');
        }
    }, t);
}
//这里是异步的;异步的会在等待同步的执行完了,再执行异步;
(async () => {
    let start = Date.now();
    let aa = await fib(num);
    let diff = Date.now() - start;
    console.log("斐波那锲数:", aa, "计算耗时:", diff, "ms", "异步测试")
})()
//这里是同步的;
let start = Date.now();
let fiblog = fib(num);
let diff1 = Date.now() - start;
console.log("斐波那契数:", fiblog, "计算耗时:", diff1, "ms", "同步测试")

let randomstring = require("randomstring");
let aa = randomstring.generate();
console.log(aa);