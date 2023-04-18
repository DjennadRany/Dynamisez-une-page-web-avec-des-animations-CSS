
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");
const concat = require('gulp-concat');

function buildStyles() {
  return gulp.src(['./sass/**/*.scss'])
    .pipe(sass())
    .pipe(concat('all.scss'))
    .pipe(rename("style.css"))
  .pipe(gulp.dest("css/"));

 
};

exports.default = buildStyles;

exports.watch = function () {
    gulp.watch(['./sass/**/*.scss']);
 
  };
