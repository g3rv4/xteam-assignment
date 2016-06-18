(function (define) {
    define(
        [],
        function () {
            var Ad = function (AdIdService) {
                return {
                    restrict: 'E',
                    replace: true,
                    template: '<img class="ad" src="/ad/?r={{ id }}" />',
                    link: function (scope, element, attr) {
                        scope.id = AdIdService.get(attr.location);
                    }
                }
            };

            return ['AdIdService', Ad]
        }
    );
}(define));
