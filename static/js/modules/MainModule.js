(function (define) {
    define(
        [
            'angular',
            'controllers/MainController',
            'services/ModelService',
            'routers/MainRouter',
            'ng-ui-router',
            'ng-resource',
            'ui-scroll'
        ],
        function (ng, MainCtrl, ModelService, MainRouter) {
            var moduleName = 'Demo.MainModule';

            ng.module(moduleName, ['ui.router', 'ngResource', 'ui.scroll.jqlite', 'ui.scroll'])
                .controller('MainCtrl', MainCtrl)
                .factory('ModelService', ModelService)
                .config(MainRouter);

            return moduleName;
        }
    )
}(define));
