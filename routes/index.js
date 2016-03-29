var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ferretList = mongoose.model('ferretList');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET items */
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

/* DELETE an item */
router.delete('/item/:item_id', function(req, res) {
  console.log("IN DELETE ROUTE");
  ferretList.remove({
    _id: req.params.item_id
  }, function(err, item) {
      if (err)
        res.send(err);
      res.json({ message: 'Successfully deleted'});
  });
});

/* POST an item */
router.post('/item', function(req, res, next) {
	console.log("IN POST ITEM");
	var item = new ferretList(req.body);
	console.log(item.price);
	item.save(function(err, item){
		if(err){
			return next(err);
		}
		res.sendStatus(200);
	});
});

/* UPDATE an item */
router.put('/item:ferretList', function(req, res, next) {
	console.log("IN UPDATE ITEM");
	req.ferretList.change(function(err, ferretList){
//		console.log("in update???");
		if (err) {
			return next(err);
		} 
		res.sendStatus(200);
	});
});

router.post('/search', function(req, res, next) {
	console.log("IN SEARCH");
	res.sendStatus(200);
}

module.exports = router;
