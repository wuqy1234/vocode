interface SearchFunc {
    //下面不能用箭头
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = (source: string, subString: string) => source.search(subString) !== -1;
//下面必须用箭头
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}


function reverse1(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

let hello:string