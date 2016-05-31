var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compile:es6', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('bundle',function(){
  //
  return browserify('./dist/js/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./dist/'));
  //
});

gulp.task('build',['bundle']);

gulp.task('watch',function(){

	gulp.watch(['./src/js/**/*.js'],['compile:es6']);

});

gulp.task('default',['compile:es6']);
