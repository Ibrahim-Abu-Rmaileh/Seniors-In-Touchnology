var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



/* GET Panel page. */
router.get('/', function(req, res, next) {
    res.render('newsLettersMain', { title: 'newsLettersMain' });
});

module.exports = router;