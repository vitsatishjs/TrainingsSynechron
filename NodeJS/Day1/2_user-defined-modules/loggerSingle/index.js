const Logger = require('./Logger');


var instance = null;

function getInstance()
{
    if(!instance)
        instance = new Logger();

    return instance;
}

//module.exports.Logger = getInstance();

module.exports.getLogger = getInstance;