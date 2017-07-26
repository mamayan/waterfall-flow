/**
 * Created by mayan on 2017/7/26.
 */
var sass = require('gulp-sass');
var gulp = require('gulp');
gulp.task('default',function () {
    gulp.src('index.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'))
    });
