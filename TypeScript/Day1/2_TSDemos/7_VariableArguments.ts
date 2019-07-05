// var numberArr1 = [10, 20, 30, 40];
// var numberArr2: number[];
// var numberArr3: Array<number>;

// Rest Parameter
// function Average(...args: number[]) {
//     var sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }

//     var length = args.length;
//     if (length > 0)
//         return sum / length;
//     else
//         return sum;
// }

// console.log(Average());
// console.log(Average(1));
// console.log(Average(1, 2));
// console.log(Average(1, 2, 3, 4, 5));
// console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Average(...numArr));        // Spread Operator

// Array Spread
// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numArr);
// console.log(...numArr);

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var nArr = [...numArr, 10, 20, 30];
// console.log(nArr);

// Object Spread
// var empObj = { id: 1, name: "Manish", city: "Pune" };

// // var e1 = empObj;
// // var e1 = Object.assign({}, empObj);
// var e1 = { ...empObj };

// console.log(empObj);
// console.log(e1);

// e1.id = 100;
// console.log(empObj);
// console.log(e1);

// var a1 = { id: 1, name: "Manish" };
// var a2 = { city: "Pune" };

// var a3 = { ...a1, ...a2 };
// console.log(a3);