'use strict';

nhlApp.controller('teamController', function($scope, teamFactory) {
    $scope.teamData = {};
    $scope.teamData = teamFactory.get().success(function(data) {
        $scope.teamData = data;
    });
});
