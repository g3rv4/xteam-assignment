(function(define) {
    define(
        ['angular', 'modules/MainModule'],
        function (ng, MainModule) {
            var app, appName = 'Demo';

            app = ng.module(appName, [MainModule])
                .config(['$locationProvider', function($locationProvider){
                    $locationProvider.html5Mode(true);
                }]);

            ng.bootstrap(ng.element(document.getElementsByTagName("body")[0]), [appName]);

            return app;
        }
    );
}(define));
