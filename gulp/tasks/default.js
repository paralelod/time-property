var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence(
              'data-clean',
              ['sass'],
              'yamlDev',
              'scripts',
              'jekyll',
              'data-jekyll',
              'watch'            
    );
});


