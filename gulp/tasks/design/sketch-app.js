var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var config = require('../../config').sketch;

gulp.task('sketch', function(){
  return gulp.src(config.sketchSrc)
    .pipe(sketch({
      export: 'slices',
    }))
    .pipe(gulp.dest(config.sketchImgDest));
});