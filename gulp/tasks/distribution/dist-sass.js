var gulp = require('gulp');
var sass = require('gulp-sass');
var clean   = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var config = require('../../config').sass;
var manifest = require('../../config').manifest;
var assetManifest = require('gulp-asset-manifest');

gulp.task('dist-sass', function() {
  runSequence(
        'dist-sass-clean',
        'dist-sass-build'
    
    );
});


var compression = config.distCompresseion;


gulp.task('dist-sass-clean', function () {
  return gulp.src(config.cssClean, {read: true})
    .pipe(clean());
});


gulp.task('dist-sass-build', function() {
    gulp.src(config.sassStyleSrc)
        .pipe(sass({outputStyle: compression}).on('error', sass.logError))
        .pipe(rename(config.cssDist))
        .pipe(gulp.dest(config.cssPathDist))
        .pipe(assetManifest({
            bundleName: manifest.styleBundle,
            manifestFile:manifest.styleDest,
            log:true
        }));
});
