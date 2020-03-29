var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world!");
});

router.get('/version', function(req, res, next) {
  res.send("1.0.1");
});


module.exports = router;
