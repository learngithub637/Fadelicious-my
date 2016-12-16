var gulp    = require ('gulp'),
    connect = require('gulp-connect'),
    opn     = require('opn');

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

// слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});

// дефолт
gulp.task('default', ['connect', 'watch']);