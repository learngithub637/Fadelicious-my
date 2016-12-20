var gulp    = require ('gulp'),
    connect = require('gulp-connect'),
    opn     = require('opn');
    sass 	= require('gulp-sass');

//сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port:8888
  });
  opn('http://localhost:8888');
});

// работа с файлами
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

// SASS $ SCSS
gulp.task('scss', function () {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass', function () {
  return gulp.src('./app/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

// слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/scss/*.scss'], ['scss']);
});

// дефолт
// gulp.task('default', ['connect', 'watch']);

gulp.task('work', ['connect', 'watch']);