var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../../config').browsersync;


gulp.task('dist-browsersync', function () {
    browserSync(
        { server: {
             baseDir: config.baseDirDist,
            },
            port: config.portDist,
        }
    );
});