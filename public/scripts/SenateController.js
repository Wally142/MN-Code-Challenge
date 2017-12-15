myApp.controller('SenateController', function (SenateService, $location) {
    console.log('SenateController created');

    var vm = this;
    vm.SenateService = SenateService;
    vm.mnSenate = SenateService.mnSenate;

    vm.getSenators = function () {
        SenateService.senators();
    };

});