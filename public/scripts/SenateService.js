myApp.service('SenateService', function ($http, $location) {
    console.log('SenateService Loaded');

    var self = this;
    self.mnSenate = { list: [] };
    self.person = {};
    self.districts = {};

    self.senators = function () {
        console.log('senators and their districts')
        $http({
            method: 'GET',
            url: '/senate'
        }).then(function (response) {
            console.log('senators');
            self.mnSenate.list = response.data;
        });
    };

    self.info = function (data) {
        console.log('Post form');
        $http({
            method: 'POST',
            url: '/senate',
            data: data
        }).then(function (response) {
            console.log('citizen request posted');
        })
    }

    self.showSenator = function (id) {
        console.log('showing correct senator name', id);
        thisId = id;
        $http({
            method: 'GET',
            url: '/senate/form/' + thisId
        }).then(function (response) {
            console.log('response', response.data);
        });
    };

});//end service

