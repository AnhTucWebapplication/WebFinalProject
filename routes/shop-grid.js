var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/','/shop-grid.html'], function(req, res) {
  res.render('shop-grid');
});

module.exports = router;
