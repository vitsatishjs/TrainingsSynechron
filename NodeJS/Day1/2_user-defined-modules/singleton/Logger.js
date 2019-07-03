class Logger {
    log(m) {
        console.log(m + ", logged in Database using logger.js.");
    }
}

Singleton = {
    getInstance()
    {
        if(!Singleton.instance)
            Singleton.instance = new Logger();

        return Singleton.instance;
    }
}

module.exports = Singleton;