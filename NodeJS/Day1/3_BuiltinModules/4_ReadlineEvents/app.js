const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var file = fs.createWriteStream('./output.txt');

rl.on('line', (input) => {
    file.write(input + "\n");
});

rl.on('SIGINT', () => {
    rl.question("Are you sure?", (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.close();
            file.end();
        }
    })
});