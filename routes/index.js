var express = require('express');
var router = express.Router();
var axios = require('axios');
var _ = require('lodash');

// var usersCollection = [];
//
// function createUserObject(userString) {
//     var userObject = {};
//     const userArray = _.split(userString, '&');
//     _.forEach(userArray, function (dataString) {
//         const data = _.split(dataString, '=');
//         userObject[data[0]] = data[1];
//     });
//     usersCollection.push(userObject);
// }

/* GET home page. */
router.get('/', function(req, res, next) {
    var usersCollection = [];
    axios.get("https://shielded-headland-24739.herokuapp.com/static/users.txt")
        .then(function (response) {
            const users = _.split(response.data, '|');
            _.forEach(users, function (user) {
                var userObject = {};
                const userArray = _.split(user, '&');
                _.forEach(userArray, function (dataString) {
                    const data = _.split(dataString, '=');
                    userObject[data[0]] = data[1];
                });
                usersCollection.push(userObject);
            });
            // console.log(usersCollection);
            res.render('index', { title: 'Users List', users:  JSON.stringify(usersCollection) });
        })
        .catch(function (error) {
            console.log(error);
            res.render('index', { title: 'Users List', users:  JSON.stringify(usersCollection) });
        });

  // res.render('index', { title: 'Users List', users:  JSON.stringify(usersCollection) });
  // usersCollection = [];
});

module.exports = router;
