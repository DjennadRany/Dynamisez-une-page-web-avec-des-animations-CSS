
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var rename = require("gulp-rename");
const concat = require('gulp-concat');

function buildStyles() {
  return gulp.src(['./src/assets/scss/**.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/dist/css"));

};


exports.default = buildStyles;

exports.watch = function () {
    gulp.watch(['./src/assets/scss/**/*.scss']);
 
  };
