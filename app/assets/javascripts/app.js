/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'todomvc/todo',
		'todomvc/todoFocus',
		'todomvc/todoEscape',
		'todomvc/todoStorage'
	], function (todoCtrl, todoFocusDir, todoEscapeDir, todoStorageSrv) {
		angular
			.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
