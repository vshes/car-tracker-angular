(function(){
    angular.module('app',['ngRoute']);
    console.log("Starting App !")

    angular.module('app')
        .config(autoTrackerConfig);

    autoTrackerConfig.$inject =['$routeProvider'];
    function autoTrackerConfig($routeProvider) {

        $routeProvider
            .when('/vehicles', {
                templateUrl:'./app/views/vehicle.list.tmpl.html',
                controller:'vehicleController',
                controllerAs:'vehicleVm'

            })
            .when('/vehicle/:id',{
                templateUrl:'./app/views/vehicle.detail.tmpl.html',
                controller:'vehicleDetailController',
                controllerAs:'vehicleDetVm'
            })
            .when('/alerts',{
                templateUrl:'./app/views/alert.all.tmpl.html',
                controller:'alertController',
                controllerAs:'alertVm'
            })
            .when('/alerts/:id',{
                templateUrl:'./app/views/alert.vid.tmpl.html',
                controller:'alertVidController',
                controllerAs:'alertVidVm'
            })
            .when('/readings',{})
            .when('/readings/:id',{

            })
            .when('/add-vehicle/',{

            })
            .otherwise({
                redirectTo:'/vehicles'
            });

    }
})();