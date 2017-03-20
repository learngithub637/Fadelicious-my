var gulp    = require ('gulp'),
    connect = require('gulp-connect'),
    opn     = require('opn'),
    sass 	= require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css');

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

// DIST
// gulp.task('prefix', () =>
//     gulp.src('./app/css/style.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./app/css/style.css'))
// );

// gulp.task('minify-css', function() {
//   return gulp.src('./app/css/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./dist/css'));
// });

// gulp.task('concat-css', function () {
//   return gulp.src('./app/css/*.css')
//     .pipe(concatCss("./temp/style.css"))
//     .pipe(gulp.dest('./dist/css'));
// });

gulp.task('dist-css', function() {
  return gulp.src('./app/css/style.css')
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./dist/css'));
});