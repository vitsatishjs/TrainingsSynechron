var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function test(strings) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(strings);
    console.log(args);
    return "Ok";
}
var fName = "Manish";
var lName = "Sharma";
var html = test(__makeTemplateObject(["Hello, ", " ", ", How are you"], ["Hello, ", " ", ", How are you"]), fName, lName);
console.log(html);
