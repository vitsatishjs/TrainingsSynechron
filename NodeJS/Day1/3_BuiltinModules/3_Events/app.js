const StringEmitter = require('./StringEmitter');

let sm = new StringEmitter();

// setInterval(function () {
//     var s = sm.getString();
//     console.log(s);
// }, 2000);

// sm.getStringUsingCB(function (s) {
//     console.log(s);
// });

sm.on('data', function (s) {
    console.log("S1 - ", s);
});

var count = 0;
function S2(s) {
    ++count;
    console.log("S2 - ", s.toUpperCase());
    if (count > 2) {
        sm.removeListener('data', S2);
    }
}

sm.on('data', S2);