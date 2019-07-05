// // Types of Decorators
// // Class Decorator <T extends Function>(target:T) => T | void
// // Property Decorator (target: Object, propertyKey: string | symbol) => void;
// // Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// // Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// function log<T>(target: T, key: string, descriptor: any) {
//     // console.log(descriptor);
//     var originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//         var a = args.map(a => JSON.stringify(a)).join();
//         console.log(key + " is called with arguments as " + a);
//         var result = originalMethod.apply(this, args);
//         return result;
//     }

//     return descriptor;
// }

// class Calculate {
//     @log
//     add(x: number, y: number) {
//         return x + y;
//     }

//     @log
//     sub(x: number, y: number) {
//         return x - y;
//     }

//     div(x: number, y: number) {
//         return x / y;
//     }
// }

// var c = new Calculate();
// console.log(c.add(23, 45));
// console.log(c.sub(2, 4));

// ------------------------------------------- Class Decorator

function CityDecorator<T extends { new(...args: any[]): {} }>(target: T) {
    return class extends target {
        city = "Pune";

        hello = function () {

        }
    }
}

@CityDecorator
class MyPerson {
    name: string;

    constructor(n = "NA") {
        this.name = n;
    }
}

var c = new MyPerson("Manish");
console.log(c);
