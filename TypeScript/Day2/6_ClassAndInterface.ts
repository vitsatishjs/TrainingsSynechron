// interface IPerson {
//     name: string;
//     age: number;
//     greet: (msg: string) => string;
// }

// class Person implements IPerson {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(msg: string): string {
//         return "Hello";
//     }
// }

// var p1 = new Person("Manish", 36);
// var p2 = new Person("Abhijeet", 36);

// ------------------------------------------ Multiple Interface Implementation
// interface IPerson {
//     name: string;
//     age: number;
//     greet: (msg: string) => string;
// }

// interface IJob {
//     doWork(): string;
// }

// class Person implements IPerson, IJob {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(msg: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am working";
//     }
// }

// --------------------------------- Interface Extends other Interface
interface IPerson {
    name: string;
    age: number;
    greet: (msg: string) => string;
}

interface IJob {
    doWork(): string;
}

interface ICustomer extends IPerson {
    doShopping(): void;
}

class Customer implements ICustomer, IJob {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(msg: string): string {
        return "Hello";
    }

    doWork(): string {
        return "I am working";
    }

    doShopping() {
        console.log("Let us go to a Mall");
    }
}

let c1: ICustomer = new Customer("Abhijeet", 25)

let c2: IJob = new Customer("Abhijeet", 25)

let c3: IPerson = new Customer("Abhijeet", 25)
