var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('index', {
    title: 'Sign-Up Form',
    info: '<form method="post" action="/submit"><input name="email" type="email" required><input type="submit"></form>'});
});

module.exports = router;
