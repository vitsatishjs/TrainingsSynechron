var express = require('express');
var router = express.Router();

const accCtrl = require('../controllers/accountController');

module.exports = function (passport) {
    router.get('/', accCtrl.login_get);

    router.post('/', accCtrl.login_post(passport));

    return router;
}
