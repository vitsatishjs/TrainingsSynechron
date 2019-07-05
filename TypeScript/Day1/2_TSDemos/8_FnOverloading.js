function Hello() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length == 0)
        console.log("Hello World");
    else
        console.log("Hello,", args[0]);
}
Hello();
Hello("Manish");
function Addition(x, y) {
    return x + y;
}
Addition(2, 3);
Addition("Manish", "Sharma");
