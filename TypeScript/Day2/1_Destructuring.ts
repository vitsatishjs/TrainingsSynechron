// const calculator = (function () {
//     function add(x: number, y: number): number {
//         return x + y;
//     }

//     function sub(x: number, y: number): number {
//         return x - y;
//     }

//     function mul(x: number, y: number): number {
//         return x * y;
//     }

//     function div(x: number, y: number): number {
//         return x / y;
//     }

//     // return {
//     //     add: add,
//     //     sub: sub,
//     //     mul: mul
//     // };

//     // Shortcut - Object Literal
//     return { add, sub, mul };
// })();

// console.log(calculator);

// var add = calculator.add;
// var sub = calculator.sub;

// console.log(add(23, 45));
// console.log(sub(23, 45));

// Object Destructuring
// var { add, sub } = calculator;

// console.log(add(23, 45));
// console.log(sub(23, 45));

// Array Destructuring
var arr = [10, 20, 30, 40, 50, 60];
// var x = arr[0];
// var y = arr[1];

// var [x, , y] = arr;
// console.log(x, y);

// var [x, , y] = arr;
// console.log(`Before, x: ${x} & y: ${y}`);

// [x, y] = [y, x];

// console.log(`After, x: ${x} & y: ${y}`);

var [x, ...y] = arr;
console.log(x, y);
