(function () {
    'use strict';
    angular.module('app')
        .service('alertService',alertServiceFn);

    alertServiceFn.$inject =['$http','$q','CONFIG']

    function alertServiceFn($http,$q,CONFIG) {
        var self  = this;

        console.log("In Alert Service !");
        self.getAlerts = getAllAlerts;
        self.getById = getAlertsByVin;

        function getAllAlerts() {
            console.log("In service Calling Vehicles End Point !")
            console.log(CONFIG.API_ALERT);
            return $http.get(CONFIG.API_ALERT)
                .then(successFn,errorFn);
        }

        function getAlertsByVin(id) {
            console.log("**** HITTING URL ***"+CONFIG.API_ALERT +id);
            return $http.get(CONFIG.API_ALERT +id)
                .then(successFn,errorFn);
        }

        function successFn(response) {
            console.log("serevre HIT BY ID !")
            return response.data;
        }
        function errorFn(error) {
            return  $q.reject(error);
        }
    }
})();