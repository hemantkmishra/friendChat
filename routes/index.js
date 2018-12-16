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

router.get('/dashboard', (req, res) => {

    let result;

    adminModel.getData()
        .then(result => {
            console.log(__line, result);
        })
        .catch(err => {
            console.log(__line, err);
        })

    res.render('dashboard', { title: 'Express', json: result });
});

router.get('/listpage', (req, res) => {

    adminModel.getSingleNameData()
        .then(result => {
            res.render('listpage', { title: 'Express', result: result });
        }).catch(err => {
            console.log(__line, err)
        })
});

router.post('/listpage', (req, res) => {
    let name = req.body.fname
    console.log(__line, name);
    adminModel.getSingleNameData(name)
        .then(result => {
            res.render('listpage', { title: 'Express', result: result });
        }).catch(err => {
            console.log(__line, err)
        })
});

router.get('/listdata', (req, res) => {
    adminModel.getSingleNameData()
        .then(result => {
            res.render('listdata', { title: 'Express', result: result });
        }).catch(err => {
            console.log(__line, err)
        })
});

router.post('/listdata', (req, res) => {
    let name = req.body.fname
    let email = req.body.emailaddress
    let password = req.body.pwd
    console.log(__line, name);
    adminModel.setSingleData(name, email, password)
        .then(result => {
            res.redirect("/listdata")
        }).catch(err => {
            console.log(__line, err)
        })
});

router.post('/getfilterdata', (req, res) => {
    let name = req.body.fname
    console.log(__line, name);
    adminModel.getSingleNameData(name)
        .then(result => {
            res.render('listdata', { title: 'Express', result: result });
        }).catch(err => {
            console.log(__line, err)
        })
});



router.post('/', async (req, res, next) => {
    console.log(req.body)
    res.render('dashboard');
});



module.exports = router;