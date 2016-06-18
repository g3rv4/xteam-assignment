(function (define) {
    define(['lodash'], function (_) {
        var AdIdService = function () {
            var svc = {
                elements: [],
                seeds: {},
                index: 0
            };

            for(var i = 0; i < 16; i++)
                svc.elements.push(i);

            svc.elements = _.shuffle(svc.elements);

            // not repeating the one used for the index, as it's seen all the time
            svc.seeds.index = svc.elements.pop();

            svc.get = function(seed){
                if(!svc.seeds[seed]) {
                    svc.seeds[seed] = svc.elements[svc.index % svc.elements.length];
                    svc.index++;
                }
                return svc.seeds[seed];
            };

            return svc;
        };

        return [AdIdService];
    });
}(define));
