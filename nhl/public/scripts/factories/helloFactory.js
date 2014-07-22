'use strict';

nhlApp.factory('helloFactory', function($http) {
    return {
        get: function() {
            return $http({
                url: '/api/helloworld',
                method: 'GET'
            });
        }
    };
});
