(function(define) {
    define(
        ['angular', 'modules/MainModule', 'directives/Ad', 'services/AdIdService'],
        function (ng, MainModule, Ad, AdIdService) {
            var app, appName = 'Demo';

            app = ng.module(appName, [MainModule])
                .factory('AdIdService', AdIdService)
                .directive('ad', Ad)
                .config(['$locationProvider', function($locationProvider){
                    $locationProvider.html5Mode(true);
                }]);

            ng.bootstrap(ng.element(document.getElementsByTagName("body")[0]), [appName]);

            return app;
        }
    );
}(define));
