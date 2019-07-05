// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = { h: 10, w: 20 };
// console.log(area(s1));

// let s2 = { h: 10, w: 20, l: 30 };
// console.log(area(s2));

// let s3 = { h: 10 };
// console.log(area(s3));

// --------------------------------------- Interface
// interface Rectangle {
//     h: number;
//     w?: number;
// }

// const area = function (rect: Rectangle) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1: Rectangle = { h: 10, w: 20 };
// console.log(area(s1));

// // let s2: Rectangle = { h: 10, w: 20, l: 30 };
// // console.log(area(s2));

// let s3: Rectangle = { h: 10 };
// console.log(area(s3));

// interface IPerson {
//     name: string;
//     age: number;
//     greet: (msg: string) => string;
// }

// var p1: IPerson = {
//     name: "Abhijeet",
//     age: 36,
//     greet: function(m){
//         return "Hello";
//     }
// };

// var p2: IPerson = {
//     name: "Ramkant",
//     age: 36,
//     greet: function(m){
//         return "Hola";
//     }
// };