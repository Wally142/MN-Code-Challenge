myApp.controller('FormController', function (SenateService, $location) {
    console.log('FormController created');
    var vm = this;

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
    }//end info function
});// end controller