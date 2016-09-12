angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ["Phone", phoneListController],
        controllerAs: "$ctrl"
    });

function phoneListController(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
}
