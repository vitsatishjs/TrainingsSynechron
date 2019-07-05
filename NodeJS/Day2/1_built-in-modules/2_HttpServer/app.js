// const http = require('http');

// var server = http.createServer((req, res) => {
//     // console.log(req.url);
//     console.log(req);
//     res.setHeader("content-type", "text/html");
//     res.write("<h1>Response from Node Http Server</h1>");
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("Server Started...");
// });

const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, content) => {
        res.setHeader("content-type", "text/html");
        res.write(content);
        res.end();
    })
});

server.listen(3000, () => {
    console.log("Server Started...");
});