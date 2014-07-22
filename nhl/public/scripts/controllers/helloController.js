'use strict';

nhlApp.controller('helloController', function($scope, helloFactory) {
    $scope.pageData = {};
    $scope.pageData = helloFactory.get().success(function(data) {
        $scope.pageData = data;
    });
});
