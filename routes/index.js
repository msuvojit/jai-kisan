var express = require('express');
var router = express.Router();
var axios = require('axios');
var _ = require('lodash');


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

            var uniqueCompany = _.unionBy(usersCollection, 'companyName');
            var uniqueUniversity = _.unionBy(usersCollection, 'university');

            res.render('index', {
                title: 'Users List',
                users:  JSON.stringify(usersCollection),
                uniqueCompanies: JSON.stringify(uniqueCompany),
                uniqueUniversity: JSON.stringify(uniqueUniversity)
            });
        })
        .catch(function (error) {
            console.log(error);
            res.render('index', { title: 'Users List', users:  JSON.stringify(usersCollection) });
        });

});

module.exports = router;
