//init file.......
"use strict";
console.log('init file loaded-------------------');
console.log('before require keyword');

require(['config'], function() {
    console.log('after require keyword');
    // your code.
    require(['main']);
});
