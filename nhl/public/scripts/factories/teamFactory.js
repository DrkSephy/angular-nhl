'use strict';

nhlApp.factory('teamFactory', function($http) {
    return {
        get: function() {
            return $http({
                url: '/api/team',
                method: 'GET'
            });
        }
    };
});
