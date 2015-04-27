define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('UsersController', function ($scope, $state, googleLogin, usersDataHolder) {
        if (!googleLogin.isLoggedIn()) {
            $state.go('home');
            return;
        }

        usersDataHolder.loadUsers()
            .then(function (users) {
                $scope.users = users;
                $scope.$digest();
            });
    });

    controllers.controller('UserController', function ($scope, $stateParams, usersDataHolder) {
        usersDataHolder.loadUser($stateParams.userId)
            .then(function (user) {
                $scope.user = user;
                $scope.$digest();
            });
    });

    controllers.controller('CreateUserController', function ($scope, $state, usersDataHolder) {
        $scope.update = function(user) {
            if (!user.birthday || !user.email) {
                return;
            }

            var newUser = angular.copy(user);
            var birthDate = new Date(newUser.birthday);
            newUser.birthday = (birthDate.getMonth()+1) + '/' + birthDate.getDate() + '/' + birthDate.getFullYear();

            usersDataHolder.saveUser(newUser)
                .then(function () {
                    $state.go('users');
                }).catch(function (error) {
                    alert(error.message);
                })
        };
    });
});