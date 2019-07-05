// function Show() {
//     console.log("Show Completed...");
// }

// // Show();
// // var r = Show();
// // console.log(r);

// var data:void;
// data = 10;

// ----------------------- Typescript
// function Show(): void {
//     console.log("Show Completed...");
// }

// Fn Declarartion
function add1(x: number, y: number): number {
    return x + y;
}

// Fn Expression
var add2 = function (x: number, y: number): number {
    return x + y;
}

var add3: (x: number, y: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
};

var add4: (x: number, y: number) => number;
add4 = function (a, b) {
    return a + b;
};

var add5: (x: number, y: number) => number;
add5 = (a, b) => {
    return a + b;
}

var add6: (x: number, y: number) => number;
add6 = (a, b) => a + b;

// console.log(add1(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));
// console.log(add4(2, 3));
// console.log(add5(2, 3));
// console.log(add6(2, 3));


// Use Lambdas as Callback Functions

var employeeArr = [
    { id: 1, name: "ABC", city: "Pune" },
    { id: 2, name: "XYZ", city: "Mumbai" },
    { id: 3, name: "PQR", city: "Pune" }
];

// function FilterFn(item:any, index:number, arr: any[]){
//     return item.city === "Pune";
// }

// var results = employeeArr.filter(FilterFn)
// console.log(results);

// Anonymous Fn
// var results = employeeArr.filter(function (item: any, index: number, arr: any[]) {
//     return item.city === "Pune";
// });
// console.log(results);

// var results = employeeArr.filter(function (item, index, arr) {
//     return item.city === "Pune";
// });
// console.log(results);

// Multi Line Lambda
// var results = employeeArr.filter((item, index, arr) => {
//     return item.city === "Pune";
// });
// console.log(results);

// Singleline Lambda
// var results = employeeArr.filter((item, index, arr) => item.city === "Pune");
// console.log(results);

// setInterval(() => {
//     console.log("Check");
// }, 1000);

// document.getElementById("b1").addEventListener("click", () => { });