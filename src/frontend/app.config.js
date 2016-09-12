angular
    .module('phonecatApp')
    .config(['$locationProvider', '$routeProvider', phonecatAppConfig]);

function phonecatAppConfig($locationProvider, $routeProvider) {
    $routeProvider
        .when('/phones', {
            template: '<phone-list></phone-list>'
        })
        .when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        })
        .otherwise('/phones');
}
