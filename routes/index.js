var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MongoData = mongoose.model('GraphData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  MongoData.find({}, {_id: 0}, function(err, data){
  if(err){ return next(err); }
  res.json(data);
  });
});

module.exports = router;