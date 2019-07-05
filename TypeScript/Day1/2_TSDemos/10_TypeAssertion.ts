let myData: any = "This is just for check...";

let l1 = myData.length;
console.log(l1);

let l2 = (<string>myData).length;
console.log(l2);

let l3 = (myData as string).length;
console.log(l3);

// let l4 = (myData as number).toFixed();
// console.log(l3);