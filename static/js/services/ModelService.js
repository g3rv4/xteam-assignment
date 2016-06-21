(function (define) {
    define(['lodash', 'moment'], function (_, moment) {
        var ModelService = function ($resource) {
            var ModelFactory = function (url) {
                return $resource(url, null, {
                    query: {
                        isArray: true,
                        transformResponse: function (data, headers, status_code) {
                            var result = [];
                            _.forEach(_.split(data, '\n'), function(line){
                                if(line) {
                                    var obj = JSON.parse(line);
                                    obj.date = moment(new Date(obj.date)).toDate();
                                    result.push(obj);
                                }
                            });
                            return result;
                        }
                    }
                });
            };

            return {
                Ascii: ModelFactory('/api/api/products')
            };
        };

        return ['$resource', ModelService];
    });
}(define));
