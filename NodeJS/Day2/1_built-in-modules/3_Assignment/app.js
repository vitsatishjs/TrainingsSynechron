const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        var filepath = `${process.cwd()}${req.url}.pdf`;
        var readStream = fs.createReadStream(filepath);
        res.setHeader("content-type", "application/pdf");

        // readStream.on('data', function (chunk) {
        //     res.write(chunk);
        // });

        // readStream.on('end', function () {
        //     res.end();
        // });
        readStream.pipe(res);

        readStream.on('error', function (err) {
            res.setHeader("content-type", "text");
            res.end("Error Reading File...");
        });
    }
});

server.listen(3000, () => {
    console.log("Server Started...");
});