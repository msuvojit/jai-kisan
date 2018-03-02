var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get("https://shielded-headland-24739.herokuapp.com/static/users.txt")
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
  res.render('index', { title: 'Express' });
});

module.exports = router;
