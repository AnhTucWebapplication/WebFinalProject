var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/','/shoping-cart.html'], function(req, res, next) {
  res.render('shoping-cart');
});

module.exports = router;
