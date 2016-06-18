(function (define) {
    define(
        [],
        function () {
            var Ad = function (AdIdService) {
                return {
                    restrict: 'E',
                    replace: true,
                    template: '<img ng-if="id !== null" class="ad" src="/ad/?r={{ id }}" style="{{ style }}" />',
                    link: function (scope, element, attr) {
                        attr.$observe('location', function(value){
                            if(value) {
                                scope.id = AdIdService.get(value);
                            }
                        });

                        scope.id = null;
                        scope.style = attr.useStyle;
                    }
                }
            };

            return ['AdIdService', Ad]
        }
    );
}(define));
