define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('HomeController', function ($scope, $state, googleLogin) {
        this.googleLogin = function () {
            if (googleLogin.isLoggedIn()) {
                $state.go('users');
                return;
            }

            googleLogin.login()
                .then(function () {
                    $state.go('users');
                }).catch(function (error) {
                    alert('Sign in failed, error is : ' + error);
                });
        }
    });
});