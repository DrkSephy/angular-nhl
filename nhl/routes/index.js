var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    var url = "http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/PIT/iphone/clubroster.json";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            res.render('helloworld', {title: body});
        }
                
    });
    //res.render('helloworld', { title: 'Test' });
});

module.exports = router;
