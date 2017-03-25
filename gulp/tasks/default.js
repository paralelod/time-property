var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence(
              'data-clean',
              'yamlDev',
              'scripts',
              'sass',
              'jekyll',
              'data-jekyll',
              'watch'            
    );
});


//gulp jekyll-new
//gulp --> new command _DEV folder
// gulp --> build _DATA folder in _DEV
// gulp ---> new jekyll theme
// bundle add gem to gemfile

