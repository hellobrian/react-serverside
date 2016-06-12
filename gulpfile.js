var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles:inline', function() {
  return gulp.src('scss/inline.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});
