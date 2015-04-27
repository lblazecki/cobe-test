define(['./app'], function (app) {
    'use strict';

    return app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url : '',
                templateUrl : 'templates/home.html',
                controller : 'HomeController'
            })
            .state('users', {
                url : '/users',
                templateUrl : 'templates/users.html',
                controller : 'UsersController'
            })
            .state('users.user', {
                url : '/{userId:[0-9]{1,12}}',
                templateUrl : 'templates/users.user.html',
                controller : 'UserController'
            })
            .state('users.create', {
                url : '/create',
                templateUrl : 'templates/users.new-user.html',
                controller : 'CreateUserController'
            })
    });
});