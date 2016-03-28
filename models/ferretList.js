var mongoose = require('mongoose');
var ferretListSchema = new mongoose.Schema({
  seller: String,
  price: Number,
  location: String,
  item: String,
  contactInfo: String,
  category: String,
  date: String,
  condition: String,
  description: String,
  photo: String
});

ferretListSchema.methods.change = function(cb) {
	console.log("in method");
	this.save(cb);
};

mongoose.model('ferretList', ferretListSchema, 'items');
