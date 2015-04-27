require.config({

    // alias libraries paths
    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
        'Promise': '../bower_components/bluebird/js/browser/bluebird'
    },

    // put libraries to boxes
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },

    // start application
    deps: ['./bootstrap']
});
