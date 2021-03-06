(function (define) {
    define(['lodash'], function (_) {
        var RowTypeService = function (AppConfig) {
            var svc = {};

            svc.getRowType = function(i){
                var position_in_page = i % (AppConfig.elements_before_ad + 1);
                var page = Math.floor(i / (AppConfig.elements_before_ad + 1));
                if(position_in_page < AppConfig.elements_before_ad) {
                    return { type: 'element' };
                } else
                    return {
                        type: 'ad',
                        location: 'ad' + page
                    };
            };

            return svc;
        };

        return ['AppConfig', RowTypeService];
    });
}(define));