const http = require('http');
const fs = require('fs');
const StringEmitter = require('./StringEmitter');
const WebSocketServer = require('websocket').server;

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

var count = 0;
var clients = [];

const sm = new StringEmitter();

sm.on('data', function (s) {
    if (clients.length > 0) {
        for (const client of clients) {
            if (client) {
                client.sendUTF(s);
            }
        }
    }
})

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function (req) {
    var connection = req.accept("echo-protocol")

    var id = count++;
    clients[id] = connection;

    console.log(`Connection Accepted ["${id}"]`);

    connection.on('close', function () {
        delete clients[id];
        console.log(`Connection Closed ["${id}"]`);
    })

    connection.on('message', function (message) {
        var msg = message.utf8Data;

        for (const client of clients) {
            if (client) {
                client.sendUTF(msg);
            }
        }
    })
});