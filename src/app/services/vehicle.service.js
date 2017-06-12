(function () {
    'use strict';
    angular.module('app')
        .service('vehicleService',vehicleServiceFn);

    vehicleServiceFn.$inject = ['$http','$q','CONFIG'];
    function vehicleServiceFn($http,$q,CONFIG) {
        var self = this;


        self.getAll = getAllVehicles;
        self.getById = getVehicleById;

        function getAllVehicles() {
            console.log("In service Calling Vehicles End Point !")
            console.log(CONFIG.API_VEHICLE);
            return $http.get(CONFIG.API_VEHICLE)
                .then(successFn,errorFn);
        }

        function getVehicleById(id) {
            console.log("**** HITTING URL ***"+CONFIG.API_VEHICLE_ID +id);
            return $http.get(CONFIG.API_VEHICLE_ID +id)
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