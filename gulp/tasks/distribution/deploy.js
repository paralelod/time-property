var gulp = require('gulp');
var runSequence = require('run-sequence');
var ghPages= require("gulp-gh-pages");
var config = require('../../config').deploy;



gulp.task('ghpages-build', function() {
  runSequence(
    //clean
    'dist-jekyll-clean',
    'data-clean',
    //config + data
    'yamlDistGhPages',
    'data-jekyll',
    //sass
    'dist-scripts-clean',
    'dist-sass-clean',
    'dist-sass-build',
    //scripts
    'dist-scripts-head',
    'dist-scripts-build',
    'dist-jekyll-copy',
    'dist-jekyll-build',
    //'dist-browsersync',
    //back to DEV yml
    'yamlDev'
    );
});

gulp.task("ghpages-deploy", function () {
    return gulp.src(config.ghPages.src)
        .pipe(ghPages({branch: config.ghPages.branch}));
});


gulp.task('html-build', function() {
  runSequence(
    //clean
    'dist-jekyll-clean',
    'data-clean',
    //config + data
    'yamlDistHtml',
    'data-jekyll',
    //sass
    'dist-scripts-clean',
    'dist-sass-clean',
    'dist-sass-build',
    //scripts
    'dist-scripts-head',
    'dist-scripts-build',
    'dist-jekyll-copy',
    'dist-jekyll-build',
    //'dist-browsersync',
    //back to DEV yml
    'yamlDev'
    );
});

gulp.task("html-deploy", function () {
    return gulp.src(config.html.src)
        .pipe(ghPages({branch: config.html.branch}));
});