var gulp   = require('gulp');
var config = require('../../config').watch;


/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,['jekyll-rebuild']);
  gulp.watch(config.configYml,['yamlDev']);
  gulp.watch(config.scripts,['scripts']);
  gulp.watch(config.imgs,['imgs']);
  gulp.watch(config.sass,['sass']);
  gulp.watch(config.theme,['theme-rebuild']);
});
