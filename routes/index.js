var express = require('express');
var router = express.Router();
var axios = require('axios');
var _ = require('lodash');

var usersCollection = [];

function createUserObject(userString) {
    var userObject = {};
    const userArray = _.split(userString, '&');
    _.forEach(userArray, function (dataString) {
        const data = _.split(dataString, '=');
        userObject[data[0]] = data[1];
    });
    // console.log(userObject);
    usersCollection.push(userObject);
    // console.log(usersCollection);
}

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get("https://shielded-headland-24739.herokuapp.com/static/users.txt")
        .then(function (response) {
            const users = _.split(response.data, '|');
            _.forEach(users, function (user) {
                createUserObject(user);
            });
            console.log(usersCollection);
        })
        .catch(function (error) {
            console.log(error);
        });

  res.render('index', { title: 'Express' });
});

module.exports = router;
