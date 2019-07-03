const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter a number: ", function (n1) {
//     console.log("You entered %s", n1);
//     rl.close();
// });

// console.log("Last line.............");

rl.question("Enter a number: ", function (n1) {
    var x = parseInt(n1);
    rl.question("Enter a number: ", function (n2) {
        var y = parseInt(n2);
        var sum = x + y;
        console.log("Result is %s", sum);
        rl.close();
    });
});