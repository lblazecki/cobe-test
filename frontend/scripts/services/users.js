define(['./module', 'Promise'], function (services, Promise) {
    'use strict';
    services.factory('usersDataHolder', function ($http) {
        var users = null;

        this.loadUsers = function () {
            return new Promise(function(resolve) {
                if (users) {
                    return resolve(users);
                }

                $http.get('/users/').success(function(backendUsers) {
                    users = backendUsers;
                    resolve(users);
                });
            });
        };

        this.loadUser = function (userId) {
            return this.loadUsers()
                .then(function (users) {
                    var matchedUser;

                    users.forEach(function (user) {
                        if (user.id == userId) {
                            matchedUser = user;
                        }
                    });

                    return matchedUser;
                });
        };

        this.saveUser = function(newUser) {
            return new Promise(function (resolve, reject) {
                $http.post('/users/', newUser).success(function(user) {
                    users.push(user);
                    resolve();
                }).error(function (error) {
                    reject(error || {});
                });
            });
        };

        return this;
    });
});