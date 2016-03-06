'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify');


// uglify scripts
gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});


// styles
gulp.task('styles', function() {
    console.log('runs styles');
});
gulp.task('default', ['scripts', 'styles']);
