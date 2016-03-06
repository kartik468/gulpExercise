'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber');


// uglify scripts
gulp.task('scripts', function() {
    gulp.src('js/*.js')
    	.pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

// watches js
gulp.task('watchScripts', function() {
    gulp.watch('js/*.js', ['scripts']);
});

// styles
gulp.task('styles', function() {
    return gulp.src('./sass/**/*.scss')
    	.pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watchScripts', 'sass:watch']);
