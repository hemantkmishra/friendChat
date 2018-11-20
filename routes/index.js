let express = require('express');
let mysql = require('mysql');
let router = express.Router();

/* GET home page. */
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hemant",
  database: "fc"
});


router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express', json : result });
});


router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
		con.connect(function(err) {
	  if (err) throw err;
	  con.query("select * from persons;", function (err, result) {
	    if (err) throw err;
		res.render('dashboard', { title: 'Express', json : result });

	  });
	});

});


router.post('/', function(req, res, next) {
  console.log(req.body)
  res.render('dashboard');
});

module.exports = router;
