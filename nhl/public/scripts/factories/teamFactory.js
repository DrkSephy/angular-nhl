'use strict';

nhlApp.factory('teamFactory', function($http) {
    return {
        get: function(teamAbbr) {
            return $http({
                url: '/api/team',
                method: 'GET',
                params: {
                    teamAbbr: teamAbbr
                }
            });
        }
    };
});
