const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task('default', ['browserSync', 'sass'], () => {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('index.html', browserSync.reload);
});
