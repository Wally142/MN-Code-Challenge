myApp.service('SenateService', function ($http, $location) {
    console.log('SenateService Loaded');

    var self = this;

    self.info = function (data) {
        console.log('Post Happy');
        $http({
            method: 'POST',
            url: '/senate',
            data: data
        }).then(function (response) {
            console.log('citizen request posted', response);
        })
    }
});