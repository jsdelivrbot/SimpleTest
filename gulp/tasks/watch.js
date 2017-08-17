var gulp = require('gulp'),
    watch = require('gulp-watch'),
    historryApiFallback = require('connect-history-api-fallback'),
    browserSync = require('browser-sync').create();

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "temp",
      middleware: [
        historryApiFallback()
      ]
    }
  });

  watch('./app/*.html', () => {
    gulp.start('htmlRefresh');
  });

  watch('./app/styles/**/*.scss', () => {
    gulp.start('cssInject');
  });

  watch('./app/scripts/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });

});

gulp.task('htmlRefresh', ['copyHtml'], () => {
  browserSync.reload();
});

gulp.task('cssInject', ['sass'], () => {
  return gulp
    .src('./temp/styles/app.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});
