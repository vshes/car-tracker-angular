(function () {
    'use strict';
    angular.module('app')
        .controller('homeController',homeControllerFn);

    homeControllerFn.$inject =['$route','$rootScope'];
    function homeControllerFn($route,$rootScope) {

        var homeVm  = this;
        homeVm.flag = true;
    }

})();