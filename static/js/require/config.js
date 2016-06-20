requirejs.config({
    "baseUrl": "/js/",
    "paths": {
        "lodash": "libs/lodash/lodash",

        "angular": "libs/angular/angular",
        "ng-resource": "libs/angular-resource/angular-resource",
        "ng-ui-router": "libs/angular-ui-router/release/angular-ui-router",
        "ng-bootstrap": "libs/angular-bootstrap/ui-bootstrap-tpls",
        "moment": "libs/moment/moment",
        "ng-moment": 'libs/angular-moment/angular-moment',
        'ng-vs-repeat': 'libs/angular-vs-repeat/src/angular-vs-repeat'
    },
    "shim": {
        "angular": {
            exports: "angular"
        },
        "ng-resource": ['angular'],
        "ng-ui-router": ['angular'],
        "ng-bootstrap": ['angular'],
        "moment": {
            exports: 'moment'
        },
        "ng-moment": ['angular', 'moment'],
        'ng-vs-repeat': ['angular']
    }
});
