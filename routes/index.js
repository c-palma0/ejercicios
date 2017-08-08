var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});
/*
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});*/

var options = {
  host: '127.0.0.1',
  path: '/',
  port: '8081',
 
};


router.post('/go', function(req, res, next) {
  
          callback = function(response) {
            var str = ''
            response.on('data', function (chunk) {
              str += chunk;
            });

            response.on('end', function () {
              console.log(str);
            });
          }

          var req = http.request(options, callback);
          req.end();
 // res.redirect('/test/');
});

module.exports = router;



