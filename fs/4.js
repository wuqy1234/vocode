function hello() {
    return 'hello,你好世界';
}
let aa = {
    hello,
    hello1() {
        return 'hello,你好世界11';
    }
}
let bb = {
    ...aa
}
console.log(bb);