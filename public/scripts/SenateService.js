myApp.service('SenateService', function ($http, $location) {
    console.log('SenateService Loaded');
    //service communicates with the controller to get information to and from the DOM

    var self = this;
    self.mnSenate = { list: [] };// object containing senator data

    self.senators = function () {// function that gets the data from the senator table in the database
        console.log('senators and their districts')
        $http({
            method: 'GET',
            url: '/senate'
        }).then(function (response) {
            console.log('senators');
            self.mnSenate.list = response.data;//data coming back from senator table is being stored in mnSenate variable
        });
    };

    self.info = function (data) {//function that posts constituent info to the database and is sent to senate.js (route)
        console.log('Post form');
        $http({
            method: 'POST',
            url: '/senate',
            data: data
        }).then(function (response) {
            console.log('citizen request posted')
        })
    }
});//end service

