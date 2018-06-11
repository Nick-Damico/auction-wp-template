var gulp = require('gulp');
var sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
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

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('index.html', browserSync.reload);
});

// gulp.task('watch', ['browserSync', 'sass'], () => {
//   gulp.watch('scss/**/*.sass', ['sass']);
//   gulp.watch('index.html', browserSync.reload);
// });
