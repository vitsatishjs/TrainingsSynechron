const express = require('express');
const router = express.Router();

const empCtrl = require('../controllers/employeesController');

router.get('/', empCtrl.list);

router.get('/details/:id', empCtrl.details);

module.exports = router;