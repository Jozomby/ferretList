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

router.get('/all', function(req, res, next) {
  ferretList.find(function(err, items){
    if(err){ return next(err); }
    res.json(items);
  });
});

/* POST an item */
router.post('/item', function(req, res, next) {
	console.log("IN POST ITEM");
	var item = new ferretList(req.body);
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
		if (err) {
			return next(err);
		} 
		res.sendStatus(200);
	});
});

router.get('/search', function(req, res, next) {
	var description = req.query.q;
	var condition = req.query.condition;
	var category = req.query.category;
	var location = req.query.location;
	var price = req.query.price;
	
	var que = new RegExp(description);
	var con = new RegExp(condition);
	var cat = new RegExp(category);
	var loc = new RegExp(location);

	ferretList.find(function(err,items) {
		if (err) return console.error(err);
		else {
			var jsonresult = [];
			for(var i = 0; i < items.length; i++) {
				var result1 = items[i].description.search(que);
				var result2 = items[i].item.search(que);
				var result3 = items[i].condition.search(con);
				var result4 = items[i].category.search(cat);
				var result5 = items[i].location.search(loc);
				var result6 = -1;
				if(items[i].price <= price){
					result6 = 1;
				}
				
				var found = 1;
				if(description != null){
					if(result1 == -1 && result2 == -1){
						found = 0;
					}
				}
				if(condition != null){
					if(result3 == -1){
						found = 0;
					}
				}
				if(category != null){
					if(result4 == -1){
						found = 0;
					}
				}
				if(location != null){
					if(result5 == -1){
						found = 0;
					}
				}
				if(price != null){
					if(result6 == -1){
						found = 0;
					}
				}
				
				
				if(found == 1) {
					jsonresult.push(items[i]);
				}
			}
			res.status(200).json(jsonresult);
		}
	})
});

module.exports = router;
