'use strict';

var nhlApp = angular.module('nhlApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('team', {
            url: '/team',
            templateUrl: 'partials/team.partial.html',
            controller: 'teamController',
            data: {
                pageTitle: 'Team Players Data'
            }
        });
});
