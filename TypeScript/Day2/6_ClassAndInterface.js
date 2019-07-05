var Customer = (function () {
    function Customer(n, a) {
        this.name = n;
        this.age = a;
    }
    Customer.prototype.greet = function (msg) {
        return "Hello";
    };
    Customer.prototype.doWork = function () {
        return "I am working";
    };
    Customer.prototype.doShopping = function () {
        console.log("Let us go to a Mall");
    };
    return Customer;
}());
var c1 = new Customer("Abhijeet", 25);
var c2 = new Customer("Abhijeet", 25);
var c3 = new Customer("Abhijeet", 25);
