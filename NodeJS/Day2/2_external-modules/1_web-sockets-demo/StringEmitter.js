const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        this.run();
    }

    run() {
        var self = this;
        setInterval(function () {
            var str = (function () {
                const strArr = ['NodeJS', 'ReactJS', 'Angular', 'ExtJS', 'jQuery'];
                return strArr[Math.floor(Math.random() * strArr.length)];
            })();
            self.emit('data', str);
        }, 2000);
    }
}

module.exports = StringEmitter;