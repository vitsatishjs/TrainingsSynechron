var dev1;
(function (dev1) {
    var Employee = /** @class */ (function () {
        function Employee(n) {
            this.name = n;
        }
        Employee.prototype.getName = function () {
            return this.name;
        };
        Employee.prototype.setName = function (n) {
            this.name = n;
        };
        return Employee;
    }());
    dev1.Employee = Employee;
    var e1 = new Employee("Manish");
    console.log(e1.getName());
    e1.setName("Abhijeet");
    console.log(e1.getName());
    var e2 = new Employee("Subodh");
    console.log(e2.getName());
    e2.setName("Ramakant");
    console.log(e2.getName());
})(dev1 || (dev1 = {}));
