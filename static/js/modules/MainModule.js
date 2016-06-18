(function (define) {
    define(
        [
            'angular',
            'controllers/MainController',
            'services/ModelService',
            'providers/RowTypeProvider',
            'routers/MainRouter',
            'ng-ui-router',
            'ng-resource',
            'ui-scroll'
        ],
        function (ng, MainCtrl, ModelService, RowTypeProvider, MainRouter) {
            var moduleName = 'Demo.MainModule';

            ng.module(moduleName, ['ui.router', 'ngResource', 'ui.scroll.jqlite', 'ui.scroll'])
                .controller('MainCtrl', MainCtrl)
                .provider('RowType', RowTypeProvider)
                .factory('ModelService', ModelService)

                // the RowTypeProvider can be configured as follows
                // .config(['RowTypeProvider', function(rowTypeProvider){
                //     rowTypeProvider.setItemsBeforeAd(30);
                //     // rowTypeProvider.setEmptyRowsPerAd(12);
                // }])

                .config(MainRouter);

            return moduleName;
        }
    )
}(define));
