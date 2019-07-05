// const fs = require('fs');

// var readStream = fs.createReadStream('./file1.txt');
// var writeStream = fs.createWriteStream('./file2.txt');

// readStream.pipe(writeStream);
// console.log("File Copied...");

const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./file1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('file1.txt.gz'));

console.log("File Compressed...");
