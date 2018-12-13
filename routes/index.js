let express = require('express');
let mysql = require('mysql');
let router = express.Router();
let async = require('asyncawait/async');
let await = require('asyncawait/await');
let readDB = require('../scripts/db');
let adminModel = require('../adminModel/dashboard');

router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next) {
    console.log(req.body)
    res.render('index');
});

router.get('/dashboard', async (req, res, next) => {

    try {
        let result;

        result = await adminModel.getData();
        console.log(__line, result);

        res.render('dashboard', { title: 'Express', json: result });
    } catch (err) {
        console.log(err)
    }

});


router.post('/', async (req, res, next) => {
    console.log(req.body)
    res.render('dashboard');
});



module.exports = router;