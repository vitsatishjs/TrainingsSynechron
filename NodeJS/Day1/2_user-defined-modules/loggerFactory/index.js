module.exports.DBLFactory = {
    getLogger: function(){
        const DBLogger = require('./DBLogger');
        return new DBLogger();
    }
}

module.exports.FLFactory = {
    getLogger: function(){
        const FileLogger = require('./FileLogger');
        return new FileLogger();        
    }
}