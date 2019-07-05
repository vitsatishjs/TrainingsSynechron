// Template Strings

// var fName = "Manish";
// var lName = "Sharma";
// var message = "How are you?";

// var fMsg = "Hello, " + fName + " " + lName + ", \n" + message;
// console.log(fMsg);

// var fMsg = `Hello, ${fName} ${lName},


//         ${message}`;
// console.log(fMsg);

// var fMsg = `1 and 1 is ${1 + 1}`;
// console.log(fMsg);

// Tagged Template Literals
function test(strings: any, ...args: any[]) {
    console.log(strings);
    console.log(args);
    return "Ok";
}

var fName = "Manish";
var lName = "Sharma";

const html = test`Hello, ${fName} ${lName}, How are you`;
console.log(html);