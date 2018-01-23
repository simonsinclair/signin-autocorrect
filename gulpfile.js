// gulpfile.js
//

'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    ui: false,
    server: './public',
    ghostMode: false,
    online: false,
    notify: false,
  });

  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
