var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'SenateController as sc',
        })
        .when('/form', {
            templateUrl: '/views/form.html',
            controller: 'SenateController as sc'
        }).otherwise({
            redirectTo: '/'
        });
    // $locationProvider.html5Mode(true);
});
