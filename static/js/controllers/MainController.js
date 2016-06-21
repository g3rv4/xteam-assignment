(function (define) {
    define(
        ['moment'],
        function (moment) {
            var MainController = function (AppConfig, RowTypeService, ModelService, $timeout, $scope) {
                var _this = this;
                var Ascii = ModelService.Ascii;

                _this.next_page = 0;
                _this.sort_by = 'id';
                _this.elements = {
                    current: [],
                    next: []
                };

                _this.loadNextPage = function(callback){
                    var data = Ascii.query({
                        skip: _this.next_page * AppConfig.elements_per_page,
                        limit: AppConfig.elements_per_page,
                        sort: _this.sort_by
                    }, function(){
                        _this.elements.next = data;
                        _this.next_page++;
                        if(data.length < AppConfig.elements_per_page) {
                            _this.elements.next.push({ type: 'final', size: 40 });
                            _this.finished = true;
                        }
                        if(callback)
                            callback(data);
                    });
                };

                _this.showNextPage = function(){
                    if(_this.elements.next.length == 0 && !_this.finished)
                        // the API is taking some time... just retry in half a second
                        $timeout(_this.showNextPage, 500);
                    else {
                        var base_position = _this.elements.current.length;
                        var i = 0;
                        while (_this.elements.next.length) {
                            var row = RowTypeService.getRowType(base_position + i);
                            if (row.type == 'element') {
                                row.element = _this.elements.next.shift();
                                row.size = row.element.size + 20;
                                if(row.element.date)
                                    row.show_relative = moment().diff(moment(row.element.date), 'days') < 7;
                                else
                                    row.type = 'final';
                            } else {
                                row.size = 200;
                            }
                            row.position = base_position + i++;
                            _this.elements.current.push(row);
                        }
                        if(!_this.finished)
                            _this.loadNextPage();
                    }
                };

                $scope.$watch(function () {
                    return _this.sort_by;
                },function(value){
                    if(value){
                        _this.next_page = 0;
                        _this.finished = false;
                        _this.elements = {
                            current: [],
                            next: []
                        };
                        _this.loadNextPage(function () {
                            _this.showNextPage();
                        });
                    }
                });

            };

            return ['AppConfig', 'RowTypeService', 'ModelService', '$timeout', '$scope', MainController];
        }
    );
}(define));
