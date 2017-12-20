myApp.controller('SenateController', function (SenateService, $location) {
    //controller is two way bind between html and angular/javascript
    var vm = this;
    vm.SenateService = SenateService;
    vm.mnSenate = SenateService.mnSenate;
    //variables that bind between controller and service
    vm.info = function (email) {

        var data = { // object sending the data taken in from the form
            name: vm.nameIn,
            phone: vm.phoneIn,
            address: vm.addressIn,
            email: vm.emailIn,
            comments: vm.commentIn,
            real: vm.humanIn,
            senator_id: vm.senator,
            district_id: vm.district,
            senator_email: email
        }

        SenateService.info(data);// function taking in the data object to be sent to database
        vm.nameIn = null;// these clear fields after a submission
        vm.phoneIn = null;
        vm.addressIn = null;
        vm.emailIn = null;
        vm.commentIn = null;
        vm.humanIn = null;
        vm.senator = null;
        vm.district = null;
    }

    vm.getSenators = function () {// function that is displaying the senators and districts on the DOM
        SenateService.senators();
    };
});//end controller