var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('newsLetters', { title: 'News Letters' });
});

module.exports = router;