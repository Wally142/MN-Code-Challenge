myApp.controller('SenateController', function (SenateService, $location) {
    console.log('SenateController created');

    var vm = this;
    vm.SenateService = SenateService;
    vm.mnSenate = SenateService.mnSenate;

    vm.getSenators = function () {
        SenateService.senators();
    };

    vm.senatorForm = function (id1, id2) {
        console.log('id1:', id1, 'id2:', id2);

        $location.path('/form');
    }

});//end controller