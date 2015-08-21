var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Node Sign-Up Form' });
  res.send('<form method="post" action="/submit"><input name="email" type="email" required><input type="submit"></form>');
});

router.post('/submitl', function(req, res, next){
  var email = req.body.email;
  console.log(email);


});

module.exports = router;
