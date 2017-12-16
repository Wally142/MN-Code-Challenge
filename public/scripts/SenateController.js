myApp.controller('SenateController', function (SenateService, $location) {
    console.log('SenateController created');

    var vm = this;
    vm.SenateService = SenateService;
    vm.mnSenate = SenateService.mnSenate;

    vm.info = function () {
        var data = {
            name: vm.nameIn,
            phone: vm.phoneIn,
            address: vm.addressIn,
            email: vm.emailIn,
            comments: vm.commentIn,
            real: vm.humanIn
        }

        SenateService.info(data);
        vm.nameIn = null;
        vm.phoneIn = null;
        vm.addressIn = null;
        vm.emailIn = null;
        vm.commentIn = null;
        vm.humanIn = null;
    }

    vm.getSenators = function () {
        SenateService.senators();
    };

    vm.senatorForm = function (id, senator) {
        console.log('name:',id, senator);
        SenateService.person = senator;
        // SenateService.districts = senator;
        SenateService.showSenator(id);
        $location.path('/form');
    }

});//end controller