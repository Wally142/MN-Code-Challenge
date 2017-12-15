myApp.service('SenateService', function ($http, $location) {
    console.log('SenateService Loaded');

    var self = this;
    self.mnSenate = { list: [] };

    self.senators = function () {
        console.log('senators and their districts')
        $http({
            method: 'GET',
            url: '/senate'
        }).then(function (response) {
            console.log(response);
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
            console.log('citizen request posted', response);
        })
    }//end post call
});//end service