var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home - Sameeha Imtiaz Portfolio' });
});

/* GET about me page */
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About Me'});
});

router.get('/projects', function(req, res, next){
  res.render('projects', { title: 'My Projects'});
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Me'});
});



module.exports = router;
