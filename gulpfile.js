var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
 
gulp.task('less', function () {
  return gulp.src('blog.less')
    .pipe(less({
      paths: [ path.join('less_files', 'less', 'includes') ]
    }))
    .pipe(gulp.dest('.'));
});