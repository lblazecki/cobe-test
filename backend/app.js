var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Users = require('./lib/users');

var frontendPath = __dirname + '/../frontend/';

app.set('views', frontendPath);
app.engine('html', require('ejs').renderFile);
app.use(express.static(frontendPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/users', function (req, res) {
    Users.get()
        .then(function (users) {
            res.send(200, users);
        })
        .catch(function (error) {
            res.send(500, {message : error});
        });
});
app.post('/users', function (req, res) {
    var newUser = req.body;

    if (!newUser.email || !newUser.birthday) {
        res.send(400, {message : 'Mandatory fields are email and birthday'});
        return;
    }

    Users.save(newUser)
        .then(function (newUser) {
            res.send(201, newUser);
        })
        .catch(function (error) {
            res.send(400, {message : error});
        });
});

app.listen(3000, function () {
    console.log("Running on port 3000");
});
