// config file......
'use strict';
console.log('config file loaded-------------------');

requirejs.config({
    baseUrl: 'js',
    deps: ['init'],
    paths: {
        angular: [
            'vendor/angular',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min'
        ],
        jquery1: [
            'vendor/jquery-1.12.1',
            'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min'
        ],
        backbone: [
            'vendor/backbone-1.2.3',
            'https://cdnjs.cloudflare.com/ajax/libs/backbone/1.3.1/backbone'
        ],
        underscore1: [
            'vendor/underscore-1.8.3',
            'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore'
        ]
    },
    shim: {
        'jquery1': {
            exports: '$'
        },
        'underscore1': {
            exports: '_'
        }
    }
});
