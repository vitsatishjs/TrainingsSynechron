// class Queue {
//     private data: number[] = [];

//     push(d: number) {
//         this.data.push(d);
//     }

//     pop(): number {
//         return this.data.shift();
//     }
// }

// var q1 = new Queue();
// q1.push(10);
// q1.push(20);
// q1.push(30);
// console.log(q1.pop());
// console.log(q1.pop());
// console.log(q1.pop());

// class Queue {
//     private data: any[] = [];

//     push(d: any) {
//         this.data.push(d);
//     }

//     pop(): any {
//         return this.data.shift();
//     }
// }

// var q1 = new Queue();
// q1.push(10);
// q1.push("abc");
// q1.push(30);
// console.log(q1.pop());
// console.log(q1.pop());
// console.log(q1.pop());

// class Queue<T> {
//     private data: T[] = [];

//     push(d: T) {
//         this.data.push(d);
//     }

//     pop(): T {
//         return this.data.shift();
//     }
// }

// var q1 = new Queue<number>();
// q1.push(10);
// q1.push(30);
// console.log(q1.pop());
// console.log(q1.pop());

// var q2 = new Queue<string>();
// q2.push("abc");
// q2.push("xyz");
// console.log(q2.pop().toUpperCase());
// console.log(q2.pop().toUpperCase());

// ------------------------------------- Constraints
interface ILength{
    length: number;
}

function getLength<T extends ILength>(arg: T) {
    return arg.length;
}

getLength<string>("abc");
getLength<string[]>(["abc"]);
getLength<number[]>([10, 20, 30, 40, 50]);
// getLength<number>(10);

// var arr = new Array<number>();