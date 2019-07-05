var Employee = (function () {
    function Employee(n) {
        if (typeof n == 'string')
            this.name = n;
        else
            throw Error("Name should be a string");
    }

    Employee.prototype.getName = function () {
        return this.name;
    }

    Employee.prototype.setName = function (n) {
        this.name = n;
    }

    return Employee;
})();

var e1 = new Employee();
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());

var e2 = new Employee("Subodh");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());
