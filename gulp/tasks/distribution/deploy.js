var fs = require('fs');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var ghPages= require("gulp-gh-pages");
var GulpSSH = require('gulp-ssh');
var sftp = require('gulp-sftp');
var config = require('../../config').deploy;

// var sshInfo = {
//   host: '192.168.0.21',
//   port: 22,
//   username: 'node',
//   privateKey: fs.readFileSync('/Users/zensh/.ssh/id_rsa')
// };

// var gulpSSH = new GulpSSH({
//   ignoreErrors: false,
//   sshConfig: sshInfo
// });

// gulp.task('sshExec', function () {
//   return gulpSSH
//     .exec(['uptime', 'ls -a', 'pwd'], {filePath: 'commands.log'})
//     .pipe(gulp.dest('logs'))
// })


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