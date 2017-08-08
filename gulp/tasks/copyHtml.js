var gulp = require('gulp');

gulp.task('copyHtml', () => {
  return gulp
    .src('./app/*.html')
    .pipe(gulp.dest('./temp'));
});
