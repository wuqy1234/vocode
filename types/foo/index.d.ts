
// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// export default Directions;


// export  function foo(): string;
// export  namespace foo {
//     const bar: number;
// }
// export = foo;

// declare function foo(): string;
// declare namespace foo {
//     const bar: number;
// }

declare module 'foo' {
    export interface Foo {
        foo: string;
    }
}

declare module 'bar' {
    export  function bar(): string;
}