var express = require('express');
var router = express.Router();

/* GET home page. */
let myJSON = [{"name":"John", "age":31, "city":"New York"},{"name":"abhijeet", "age":31, "city":"New York"},{"name":"hemant", "age":31, "city":"New York"},{"name":"sanjana", "age":31, "city":"New York"},{"name":"gunjan", "age":31, "city":"New York"},{"name":"akshya", "age":31, "city":"New York"}];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', json : myJSON });
});


router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express', json : myJSON });
});


router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('dashboard');
});

module.exports = router;
