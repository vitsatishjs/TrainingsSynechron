const fs = require('fs');

let fData = "";

var readStream = fs.createReadStream('./file1.txt');

// Chunk Size - 64 * 1024

readStream.on('data', (chunk) => {
    fData += chunk;
});


readStream.on('end', () => {
    console.log(fData);
});

readStream.on('error', (err) => {
    console.log(err);
});