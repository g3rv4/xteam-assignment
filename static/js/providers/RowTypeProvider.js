(function (define) {
    define([], function () {
        var RowTypeProvider = function () {
            var items_before_ad = 20;
            var empty_rows_per_ad = 9;

            this.setItemsBeforeAd = function(value) {
                items_before_ad = value
            };

            this.setEmptyRowsPerAd = function(value) {
                empty_rows_per_ad = value
            };

            this.$get = [function RowTypeFactory() {
                var svc = {};

                svc.getRowType = function(i){
                    var position_in_page = i % (items_before_ad + empty_rows_per_ad + 1);
                    if(position_in_page < items_before_ad) {
                        var page = Math.floor(i / (items_before_ad + empty_rows_per_ad + 1));
                        var iter = i % (items_before_ad + empty_rows_per_ad + 1);
                        return {
                            type: 'element',
                            position: page * items_before_ad + iter
                        };
                    } else if(position_in_page < items_before_ad + empty_rows_per_ad)
                        return { type: 'empty' };
                    else
                        return { type: 'ad' };
                };

                return svc;
            }];
        };

        return [RowTypeProvider];
    });
}(define));