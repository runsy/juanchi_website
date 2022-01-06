#!/usr/bin/env node
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var apiRouter = require("./routes/api");
var apiComments =  require("./routes/comments");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use("/api", apiRouter);
app.use("/comments", apiComments);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//app.use(express.static(path.join(__dirname, '../frontend/build'))); //  "public" off of current is root
//console.log(path.join(__dirname, '../frontend/build'));
//app.get("/api", function (req, res) {
   //res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
//})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
