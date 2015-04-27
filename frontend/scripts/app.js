define([
    'angular',
    'uiRouter',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('cobeUsersModule', [
        'app.services',
        'app.controllers',
        'ui.router'
    ]);
});