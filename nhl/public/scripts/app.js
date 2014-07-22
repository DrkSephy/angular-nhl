'use strict';

var nhlApp = angular.module('nhlApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'partials/hello.partial.html',
            controller: 'helloController',
            data: {
                pageTitle: 'Hello'
            }
        });
});
