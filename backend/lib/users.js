var Promise = require('bluebird');
var fs = require('fs');
var User = {};
var Helper = {};
var fileName = 'cobe-users.txt';

User.get = function () {
    return new Promise(function (resolve) {
        resolve(Helper.readUsersFromFs());
    });
};

User.save = function (newUser) {
    var users = Helper.readUsersFromFs();

    return new Promise(function (resolve, reject) {
        if (Helper.emailExists(users, newUser.email)) {
            reject('user by this email already exists in database!');
            return;
        }

        newUser.id = Date.now();
        users.push(newUser);
        Helper.saveUsers(users);
        resolve(newUser);
    });
};

Helper.readUsersFromFs = function() {
    var users = [];
    var readFile;

    if (fs.existsSync(fileName)) {
        readFile = fs.readFileSync(fileName);
    }

    if (readFile) {
        users = JSON.parse(readFile);
    }

    return users;
};

Helper.emailExists = function(users, emailToCheck) {
    var emailExists = false;

    users.forEach(function (user) {
        if (user.email === emailToCheck) {
            emailExists = true;
        }
    });

    return emailExists;
};

Helper.saveUsers = function (users) {
    fs.writeFileSync(fileName, JSON.stringify(users));
};

module.exports = User;
