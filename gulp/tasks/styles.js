var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

var sassdocOptions = {
  dest: './temp/styles/sassdoc'
}

/**
 * SOURCEMAPS AND AUTOPREFIXERS COMBINED GIVES ERRORS
 */

// gulp.task('sass', function() {
//   return gulp
//     .src('./app/styles/app.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass(sassOptions).on('error', sass.logError))
//     .pipe(sourcemaps.write('./maps'))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(gulp.dest('./temp/styles'));
// });

gulp.task('sass', function() {
  return gulp
    .src('./app/styles/app.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./temp/styles/'))
});

gulp.task('sassdoc', function() {
  return gulp
    .src('./app/styles/app.scss')
    .pipe(sassdoc(sassdocOptions))
    .resume();
});
