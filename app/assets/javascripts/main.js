/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../lib/angularjs/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});

/*
require.config({
    // Packages = top-level folders; loads a contained file named 'main.js"
   // packages: [/!*'common', 'home', 'user', 'dashboard', *!/'todomvc'],
    shim: {
        'jsRoutes': {
            deps: [],
            // it's not a RequireJS module, so we have to tell it what var is returned
            exports: 'jsRoutes'
        },
        // Hopefully this all will not be necessary but can be fetched from WebJars in the future
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'bootstrap': ['jquery']
    },
    paths: {
        'requirejs': ['../lib/requirejs/require'],
        'jquery': ['../lib/jquery/jquery'],
        'angular': ['../lib/angularjs/angular'],
        'angular-route': ['../lib/angularjs/angular-route'],
        'angular-cookies': ['../lib/angularjs/angular-cookies'],
        'bootstrap': ['../lib/bootstrap/js/bootstrap'],
        'jsRoutes': ['/jsroutes']
    }
});*/
