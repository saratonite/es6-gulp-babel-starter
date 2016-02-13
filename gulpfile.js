var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function () {
    return gulp.src('src/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('src/js'));
});

gulp.task('watch',function(){

	gulp.watch(['./src/es6/**/*.js'],['es6']);

});

gulp.task('default',['es6']);