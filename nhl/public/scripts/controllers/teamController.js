'use strict';

nhlApp.controller('teamController', function($scope, teamFactory) {
    $scope.teamData = {};
    
    $scope.submitTeam = function() {
        $scope.teamData = teamFactory.get($scope.teamAbbr).success(function(data) {
            $scope.teamData = data;
        });
    }
});
