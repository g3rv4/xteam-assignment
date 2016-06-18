(function (define) {
    define(
        ['lodash', 'angular'],
        function (_, ng) {
            var MainController = function (RowType) {
                var _this = this;
                _this.used_ads = [];

                _this.scroll_params = {
                    items_before_ad: 20,
                    empty_rows_per_ad: 9
                };

                _this.rows = {};
                _this.rows.get = function(index, count, success){
                    var res = [];
                    var start = Math.max(index, 1);
                    for (var i = start; i < index + count; i++) {
                        var row = RowType.getRowType(i-1);
                        row.element = 'Showing element ' + row.position;
                        res.push(row);
                    }
                    success(res);
                };
                
                _this.getNextAd = function(){

                };
            };

            return ['RowType', MainController];
        }
    );
}(define));
