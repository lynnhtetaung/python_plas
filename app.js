var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var logger = require('morgan');
var compiler = require('compilex');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('date-utils');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var option = { stats: true };
compiler.init(option);

//execute additional programs
const { exec } = require("child_process");
exec("java -jar CWPValidator.jar", {
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: Infinity,
  cwd: 'addon'
}, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log("CWPValidator.jar is running");
});
var currentPath = process.cwd();            // Current Working Directory (Not accept parameters and returns a string)

console.log("=============================================================================");
console.log(`CWPValidator.jar is running at ${currentPath}`);

compiler.flush(function () {
  console.log('All temporary files flushed !');
});

module.exports = app;
