var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var panel = require('./routes/panel');
var courses = require('./routes/courses');
var volunteers = require('./routes/volunteers');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://oriamir:0509731212Aa!@ds034279.mlab.com:34279/sit');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Connection succeded');
});

var adminSchema = new Schema({
  name: String,
  email: String,
  id: Number
});
var Admin = mongoose.model('Admins', adminSchema);

var coursesSchema = new Schema({
  name: String,
  details: String,
  id: Number
});
var Course = mongoose.model('Courses', coursesSchema);



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/panel', panel);
app.use('/courses', courses);
app.use('/volunteers', volunteers);


var volunteersSchema = new Schema({
  title: String,
  location: String,
  description: String
});
var Vol = mongoose.model('Vol', volunteersSchema);

// Posting a new volunteering to the database
app.post('/postvolunteers',function (req, res) {
  console.log(req.body.title);
  console.log(req.body.location);
  console.log(req.body.description);
  new Vol({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description
  }).save(function(err){
    if(err)
      console.log(err);
    else
      res.json('saved');
  });
});

// Getting all volunteers from database
app.get('/getvolunteers', function (req, res) {
  Vol.find(function(err, volunteers) {
    res.json(volunteers);
  });
});







// Posting a new course to the database
app.post('/postcourse',function (req, res) {
  console.log(req.body.name);
  console.log(req.body.details);
  new Course({
    name: req.body.name,
    details: req.body.details,
    id: req.body.id
  }).save(function(err){
    if(err)
      console.log(err);
    else
      res.json('saved');
  });
});

// Getting all the courses from the database
app.get('/course', function (req, res) {
  Course.find(function(err, course) {
    res.json(course);
  });
});




// Posting a new admin to the database
app.post('/postadmin',function (req, res) {
  console.log(req.body.name);
  console.log(req.body.email);
  new Admin({
    name: req.body.name,
    email: req.body.email,
    id: req.body.id
  }).save(function(err){
    if(err)
      console.log(err);
    else
      res.json('saved');
  });
});

// Getting all the admins from the database
app.get('/admins', function (req, res) {
  Admin.find(function(err, admins) {
    res.json(admins);
  });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
