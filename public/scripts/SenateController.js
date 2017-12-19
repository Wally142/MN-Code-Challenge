myApp.controller('SenateController', function (SenateService, $location) {
    
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
            real: vm.humanIn,
            senator_id: vm.senator,
            district_id: vm.district
        }
        
        SenateService.info(data);
        vm.nameIn = null;
        vm.phoneIn = null;
        vm.addressIn = null;
        vm.emailIn = null;
        vm.commentIn = null;
        vm.humanIn = null;
        vm.senator = null;
        vm.district = null;
    }

    vm.getSenators = function () {
        SenateService.senators();
    };

    
});//end controller