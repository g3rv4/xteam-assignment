(function (define) {
    define(['lodash'], function (_) {
        var ModelService = function ($resource) {
            var ModelFactory = function (url) {
                return $resource(url, null, {
                    query: {
                        isArray: true,
                        transformResponse: function (data, headers, status_code) {
                            var result = [];
                            _.forEach(_.split(data, '\n'), function(line){
                                if(line)
                                    result.push(JSON.parse(line))
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
