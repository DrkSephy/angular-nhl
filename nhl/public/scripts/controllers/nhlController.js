'use strict';

nhlApp.controller('nhlController', function($scope, $location) {
    $scope.siteTitle = 'Angular NHL';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
