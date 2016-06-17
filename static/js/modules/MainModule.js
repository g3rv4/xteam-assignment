(function (define) {
    define(
        [
            'angular',
            'controllers/MainController',
            'services/ModelService',
            'routers/MainRouter',
            'ng-ui-router',
            'ng-resource'
        ],
        function (ng, MainCtrl, ModelService, MainRouter) {
            var moduleName = 'Demo.MainModule';

            ng.module(moduleName, ['ui.router', 'ngResource'])
                .controller('MainCtrl', MainCtrl)
                .factory('ModelService', ModelService)
                .config(MainRouter);

            return moduleName;
        }
    )
}(define));
