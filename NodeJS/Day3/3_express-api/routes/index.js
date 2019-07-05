var express = require('express');
var router = express.Router();

const accCtrl = require('../controllers/accountController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Application' });
});

router.post('/authenticate', accCtrl.authenticate);


module.exports = router;
