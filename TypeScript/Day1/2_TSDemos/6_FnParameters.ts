// function Hello(name: string) {
//     console.log("Hello,", name);
// }

// Hello("Manish");
// Hello();
// Hello("Manish", "Sharma");

// Optional Parameters
// function Hello(name?: string) {
//     console.log("Hello,", name);
// }

// Hello("Manish");
// Hello();

// function Add(a?: number, b?: number): number {
//     a = a || 0;
//     b = b || 0;
//     return a + b; ''
// }

// Default Parameters
function Add(a = 0, b = 0): number {
    return a + b; ''
}

console.log(Add(2, 3));
console.log(Add(2));
console.log(Add());