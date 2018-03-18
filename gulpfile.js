'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var del = require('del');
var plumber = require('gulp-plumber');
var ftp = require('gulp-ftp');

gulp.task('delHtml',function() {
  del(['html/*.html']);
});
gulp.task('delJs',function() {
  del(['html/js/*.js']);
});
gulp.task('delSass',function() {
  del(['html/css/*.css']);
});

gulp.task('copyHtml',function() {
  return gulp.src(['assets/**/*.html'])
  .pipe(plumber())
  .pipe(gulp.dest('html/'))
  .pipe(browserSync.stream());
});

gulp.task('copyJs',function() {
  return gulp.src(['assets/js/*.js'])
  .pipe(plumber())
  .pipe(gulp.dest('html/js/'))
  .pipe(browserSync.stream());
});

gulp.task('sass',function() {
  return gulp.src(['assets/sass/*.scss'])
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('html/css/'))
  .pipe(browserSync.stream());
});

gulp.task('upload', function () {
  return gulp.src(['html/**'])
  .pipe(ftp({
host: "ftp.sim.zdrv.com", //FTPホストアドレス
user: "zdXXXX", //FTPユーザー名
pass: "XXXX", //FTPパスワード
port: 21, //ポート番号
remotePath: "/WEB_ROOT/zdis53.sim.zdrv.com/HtDocs/test/" //サーバ上のアップロードパス
  }))
})

gulp.task('default',['delHtml','delJs','delSass','copyHtml','copyJs','sass'], function() {
  browserSync.init({
    server: {
      baseDir: 'html'
    }
  });
  gulp.watch(['assets/**/*.html'],['delHtml','copyHtml']);
  gulp.watch(['assets/js/*.js'],['delJs','copyJs']);
  gulp.watch(['assets/sass/*.scss'],['delSass','sass']);
})
