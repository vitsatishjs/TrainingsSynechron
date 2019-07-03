// console.log("Hello World!");
// console.error(new Error('Whoops, something bad happened'));

// console.log(process.stdin);
// console.log(process.stdout);

// console.log(module);

// console.log(process.cwd());
// console.log(__dirname);

// console.log(__filename);

// var a = 10;
// let a = 10;
// const a = 10;
// console.log(a);
// console.log(typeof a);

// function add(x = 0, y = 0) {
//     return x + y;
// }

// console.log(add(23, 45));
// console.log(add(23));

// ES 5
// var Employee = (function(){
//     function Employee(name){
//         this._name = name;
//     }

//     Employee.prototype.getName = function() {
//         return this._name;
//     }

//     Employee.prototype.setName = function(value) {
//         this._name = value;
//     }

//     return Employee;
// })();

// ES 2015
class Employee {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}

var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());
