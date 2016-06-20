(function (define) {
    define(
        [
            'angular',
            'controllers/MainController',
            'services/ModelService',
            'services/RowTypeService',
            'routers/MainRouter',
            'ng-ui-router',
            'ng-resource',
            'ng-vs-repeat'
        ],
        function (ng, MainCtrl, ModelService, RowTypeService, MainRouter) {
            var moduleName = 'Demo.MainModule';

            ng.module(moduleName, ['ui.router', 'ngResource', 'vs-repeat'])
                .controller('MainCtrl', MainCtrl)
                .factory('ModelService', ModelService)
                .factory('RowTypeService', RowTypeService)
                .config(MainRouter)
                .constant('AppConfig', {
                    elements_per_page: 50,
                    elements_before_ad: 20
                });

            return moduleName;
        }
    )
}(define));
