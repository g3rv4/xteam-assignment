(function (define) {
    define(
        ['lodash', 'angular'],
        function (_, ng) {
            var MainController = function () {
                var _this = this;
                _this.used_ads = [];

                _this.rows = {};
                _this.rows.get = function(index, count, success){
                    var res = [];
                    var start = Math.max(index, 1);
                    for (var i = start; i < index + count; i++) {
                        res.push(i.toString() + ' elephants')
                    }
                    success(res);
                };
                
                _this.getNextAd = function(){

                };
            };

            return [MainController];
        }
    );
}(define));
