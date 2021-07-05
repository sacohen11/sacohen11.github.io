
// https://dev.to/caiojhonny/html-includes-with-gulp-js-2def

const gulp        = require('gulp');
const fileinclude = require('gulp-file-include');

const paths = {
  scripts: {
    src: './structure/',
    dest: './'
  }
};

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!structure/headernav.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
