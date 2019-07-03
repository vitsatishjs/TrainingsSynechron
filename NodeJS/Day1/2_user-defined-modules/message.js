// console.log("Message.js", module);

var fname = "Manish";
var lname = "Sharma";

// module.exports = fname;
// module.exports = lname;

module.exports.firstname = fname;
module.exports.lastname = lname;

// module.exports = function (message) {
//     console.log(`${message}, logged`)
// }

module.exports.log = function (message) {
    console.log(`${message}, logged`)
}

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

module.exports.Employee = Employee;