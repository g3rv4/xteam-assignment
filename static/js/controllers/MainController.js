(function (define) {
    define(
        [],
        function () {
            var MainController = function (AppConfig, RowTypeService, ModelService, $timeout) {
                var _this = this;
                var Ascii = ModelService.Ascii;

                _this.next_page = 0;
                _this.elements = {
                    current: [],
                    next: []
                };

                _this.loadNextPage = function(callback){
                    var data = Ascii.query({
                        page: _this.next_page,
                        limit: AppConfig.elements_per_page
                    }, function(){
                        _this.elements.next = data;
                        _this.next_page++;
                        if(callback)
                            callback(data);
                    });
                };

                _this.showNextPage = function(){
                    if(_this.elements.next.length == 0)
                        $timeout(_this.showNextPage, 500);
                    else {
                        var base_position = _this.elements.current.length;
                        var i = 0;
                        while (_this.elements.next.length) {
                            var row = RowTypeService.getRowType(base_position + i++);
                            if (row.type == 'element') {
                                row.element = _this.elements.next.pop();
                                row.size = row.element.size + 20;
                            } else {
                                row.size = 200;
                            }
                            _this.elements.current.push(row);
                        }
                        _this.loadNextPage();
                    }
                };

                _this.loadNextPage(function () {
                    _this.showNextPage();
                });

            };

            return ['AppConfig', 'RowTypeService', 'ModelService', '$timeout', MainController];
        }
    );
}(define));
