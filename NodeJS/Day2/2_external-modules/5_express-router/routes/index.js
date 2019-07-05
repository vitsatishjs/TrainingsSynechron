const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { pTitle: "Employee Management" });
});

module.exports = router;