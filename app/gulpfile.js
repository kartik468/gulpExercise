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

// watches js
gulp.task('watchScripts', function() {
	gulp.watch('js/*.js', ['scripts']);
});


gulp.task('default', ['scripts', 'styles', 'watchScripts']);
