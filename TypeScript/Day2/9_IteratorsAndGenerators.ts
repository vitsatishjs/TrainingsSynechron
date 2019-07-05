// class Queue {
//     private data: any[] = [];

//     push(d: any) {
//         this.data.push(d);
//     }

//     pop(): any {
//         return this.data.shift();
//     }

//     [Symbol.iterator]() {
//         const self = this;
//         let i = 0;

//         return {
//             next() {

//                 let v, d = true;

//                 if (self.data[i] !== undefined) {
//                     v = self.data[i];
//                     d = false;
//                     i += 1;
//                 }

//                 return {
//                     value: v,
//                     done: d
//                 }
//             }
//         }
//     }
// }

// class Queue {
//     private data: any[] = [];

//     push(d: any) {
//         this.data.push(d);
//     }

//     pop(): any {
//         return this.data.shift();
//     }

//     *[Symbol.iterator]() {
//         for (let i = 0; i < this.data.length; i++) {
//             yield this.data[i];
//         }
//     }
// }

// Iterable
class Queue {
    private data: any[] = [];

    push(d: any) {
        this.data.push(d);
    }

    pop(): any {
        return this.data.shift();
    }

    // Generator
    *[Symbol.iterator]() {
        yield* this.data; 
    }
}

var q1 = new Queue();
q1.push(10);
q1.push(20);
q1.push(30);

// Iterator
for (const item of q1) {
    console.log(item);
}