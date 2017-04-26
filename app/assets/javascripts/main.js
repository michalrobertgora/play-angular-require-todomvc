/*global require*/
'use strict';


require.config({
	/*
	 * TODO Packages part is from the seed-based modularization of Angular -
	 * looks easy, but I couldn't modify todomvc main/app.js to make it work in that way;
	 * so, packages: is commented out, and deps: ['app'] is used to start todomvc ng with todomvc app.js;
	 */
    // Packages = top-level folders; loads a contained file named 'main.js"
    // packages: [/*'common', 'home', 'user', 'dashboard', */'todomvc'],

	/*
	 * FROM requireJS docs:
	 * shim: Configure the dependencies, exports, and custom initialization for older,
	 * traditional "browser globals" scripts that do not use define() to declare the dependencies and set a module value.
	 */
    shim: {
        'jsRoutes': {
            deps: [],
            // it's not a RequireJS module, so we have to tell it what var is returned
            exports: 'jsRoutes'
        },
        // THIS IS REQUIRED FOR TODOMVC, not sure why
        'angular': {
            deps: ['jquery', 'app'],
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'bootstrap': ['jquery']
    },

	/*
	 * FROM requireJS docs:
	 * paths: path mappings for module names not found directly under baseUrl.
	 * The path settings are assumed to be relative to baseUrl, unless the paths setting starts with a "/" or has a URL protocol in it ("like http:").
	 */
    paths: {
        'requirejs': ['../lib/requirejs/require'],
        'jquery': ['../lib/jquery/jquery'],
        'angular': ['../lib/angularjs/angular'],
        'angular-route': ['../lib/angularjs/angular-route'],
        'angular-cookies': ['../lib/angularjs/angular-cookies'],
        'bootstrap': ['../lib/bootstrap/js/bootstrap'],
        'jsRoutes': ['/jsroutes']
    },
	// todomvc only addition:
    deps: ['app']
});


/*
 * my mix of libs and todomvc main.js - works,
 */
/*require.config({
    shim: {
        angular: {
            exports: 'angular'
        }
    },
    paths: {
        'requirejs': ['../lib/requirejs/require'],
        'jquery': ['../lib/jquery/jquery'],
        'angular': ['../lib/angularjs/angular'],
        'angular-route': ['../lib/angularjs/angular-route'],
        'angular-cookies': ['../lib/angularjs/angular-cookies'],
        'bootstrap': ['../lib/bootstrap/js/bootstrap'],
        'jsRoutes': ['/jsroutes']
    },
	deps: ['app']
});*/



/*
* todomvc main.js content below - works
 */

/*require.config({
	paths: {
		angular: '../lib/angularjs/angular'
	},
	shim: {
		angular: {
			exports: 'angular'
		}
	},
	deps: ['app']
});*/

