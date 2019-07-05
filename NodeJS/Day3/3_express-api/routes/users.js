var express = require('express');
var router = express.Router();

const userAPICtrl = require('../controllers/userAPIController');
const accCtrl = require('../controllers/accountController');

router.use(accCtrl.verify);

router.get('/', userAPICtrl.index);

router.get('/:id', userAPICtrl.details);

router.post('/', userAPICtrl.create_user);

router.put('/:id', userAPICtrl.edit_user);

router.delete('/:id', userAPICtrl.delete_user);

module.exports = router;
