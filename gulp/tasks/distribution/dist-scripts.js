var gulp = require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var config = require('../../config').script;
var manifest = require('../../config').manifest;
var assetManifest = require('gulp-asset-manifest');

gulp.task('dist-scripts', function() {
  runSequence(
              'dist-scripts-clean',
              'dist-scripts-head',
              'dist-scripts-build'
    );
});

// ######### SCRIPTS CLEAN ###############

gulp.task('dist-scripts-clean', function () {
  return gulp.src(config.scriptsClean, {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('dist-scripts-head', function() {
    return gulp.src(config.headSrc)
    .pipe(concat(config.scriptHeadDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist))
    .pipe(assetManifest({
        bundleName: manifest.scriptBundle,
        manifestFile:manifest.scriptDest,
        log:true
    }));

});


// ######### scripts bottom ###############
 
//concat main.js

gulp.task('dist-scripts-build', function() {
    return gulp.src(config.scriptsSrc)
    .pipe(assetManifest({
        bundleName: manifest.scriptBundle,
        manifestFile:manifest.scriptDest,
        log:true
    }))
    .pipe(concat(config.scriptsDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist))
    .pipe(assetManifest({
        bundleName: manifest.scriptBundle,
        manifestFile:manifest.scriptDest,
        log:true
    }));
});
