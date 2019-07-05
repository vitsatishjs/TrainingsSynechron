const jwt = require('jsonwebtoken');

module.exports.authenticate = function (req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password
    };

    if (user.username != "manish") {
        res.json({
            success: false,
            message: "Authentication Failed, User not Found...."
        });
    } else if (user.password != "manish") {
        res.json({
            success: false,
            message: "Authentication Failed, Wrong Password...."
        });
    } else {
        var token = jwt.sign(user, "checking", {
            expiresIn: 1440
        });
        res.json({
            success: true,
            message: "Authentication Success....",
            token: token
        });
    }
}

module.exports.verify = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, "checking", function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    success: false,
                    message: "Invalid Token Found"
                })
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        return res.status(403).send({
            success: false,
            message: "No Token Found"
        });
    }
}