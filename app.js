var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var common = require('./scripts/common');
var app = express();
const esviews = require("es6views")

// view engine setup
esviews.viewEngine(app)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'es6')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexRouter);
app.get('/dashboard', indexRouter);
app.get('/listpage', indexRouter);
app.post('/listpage', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;
