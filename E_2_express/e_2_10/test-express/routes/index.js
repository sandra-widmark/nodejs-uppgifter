var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uppgift 10', paragraph: 'This is an express server'});
});

module.exports = router;
