var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('volunteersReg', { title: 'volunteersReg' });
});

module.exports = router;
