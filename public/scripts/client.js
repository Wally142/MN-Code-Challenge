var myApp = angular.module('myApp', ['ngRoute']);//source in angular

myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'SenateController as sc',//sc makes using controller functions easier in html
        }).otherwise({
            redirectTo: '/'
        });
    
});

//file to source in angular App and allow for separate html pages or to add multiple views if desired
