var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/userController');
const accCtrl = require('../controllers/accountController');

router.use(accCtrl.isAuthenticated);

router.get('/', function(req, res, next) {
  res.redirect('users/index');
});

router.get('/index', userCtrl.index);

router.get('/details/:id', userCtrl.details);

router.get('/create', userCtrl.create_get);

router.post('/create', userCtrl.create_post);

router.get('/edit/:id', userCtrl.edit_get);

router.post('/edit/:id', userCtrl.edit_post);

router.get('/delete/:id', userCtrl.delete_get);

router.post('/delete/:id', userCtrl.delete_post);

module.exports = router;
