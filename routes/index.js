var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ferretList = mongoose.model('ferretList');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/items', function(req, res, next) {
  console.log(req.body);
  var terms = req.body;
  ferretList.find(terms, function(err,items) {
    if (err) return console.error(err);
    else {
      console.log(items);
      res.json(items);
    }
  })
});
  

module.exports = router;
