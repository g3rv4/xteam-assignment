(function (define) {
    define(
        [],
        function () {
            var MainRouter = function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('main', {
                        url: '/',
                        controller: 'MainCtrl as ctrl',
                        templateUrl: '/templates/main/grid.html'
                    });

                $urlRouterProvider.otherwise('/');
            };
            return ['$stateProvider', '$urlRouterProvider', MainRouter];
        }
    );
}(define));
