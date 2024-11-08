/* imports needed modules*/
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var layout = require('express-ejs-layouts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');

app.use(layout);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req, res, next){
    res.status(404).send("Can't find the page you're looking for, Sorry!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;