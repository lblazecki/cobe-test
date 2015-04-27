define(['./module', 'Promise'], function (services, Promise) {
    'use strict';
    services.factory('googleLogin', [function () {
        var clientId = '384776137884-tptnkpu2k9jdj5s7kbieoijl9ci24jv3.apps.googleusercontent.com';
        var scopes = 'https://www.googleapis.com/auth/plus.login';
        var isLoggedIn = false;

        this.login = function () {
            return new Promise(function (resolve, reject) {
                gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: false }, function (authResult) {

                    if (authResult['status']['signed_in']) {
                        console.log('user is signed in');
                        //console.log(authResult);

                        isLoggedIn = true;
                        resolve();
                    } else {
                        console.log('Sign-in state: ' + authResult['error']);

                        reject(authResult['error']);
                    }
                });
            });
        };

        this.isLoggedIn = function() {
            return isLoggedIn;
        }
        return this;
    }]);
});