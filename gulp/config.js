
//design
var designSrc = './_design/layout.sketch';

// config
var configSrc ='./_config';
var configBuild =configSrc+'/build';

//dev
var devSrc = './_dev';
var dataSrc = devSrc+'/_data';


//build 
var buildSrc = './_build';
var imgsSrc = buildSrc+'/_img';
var sassSrc = buildSrc+'/_sass';
var scriptSrc = buildSrc+'/_scripts';
var scriptSrcInit = buildSrc+'/_scripts/_init';
var bowerSrc = buildSrc+'/bower';
var themeSrc = './_build/_themes/time-property';
var themeAssets = themeSrc+'/assets';

//dist
var distSrc = './_dist';
var distHtml = distSrc+'/_site';



module.exports = {

  //--------- deploy ----------//

  deploy: {
     ghPages: {
       branch:'gh-pages',
       src: distSrc+'/**/*.*'
     },
    html: {
       branch:'html',
       src: distHtml+'/**/*.*'
     }
  },

  //--------- theme ----------//

  theme: {
    includes: themeSrc+'/_includes/**/*.*',
    layouts: themeSrc+'/style.json'
  },

  //--------- manifest ----------//

  manifest: {
    styleBundle: 'style',
    styleDest: dataSrc+'/style.json',
    scriptBundle: 'script',
    scriptDest: dataSrc+'/script.json',
    imagesBundle: 'images',
    imagesDest: dataSrc+'/image.json',
    jekyllBundle: 'jekyll',
    jekyllDest: dataSrc+'/jekyll.json'
  },

  //--------- sketch app ----------//

  sketch: {
    sketchSrc: designSrc,
    sketchImgDest: imgsSrc
  },
  
  //--------- images ----------//
  
   images: {
    // responsive resize

    imgSrc: imgsSrc,
    imgSrcResp: imgsSrc+'/responsive/',
    imgDest:themeAssets+'/img/',

    imgBreakpoints: {
      sizes: [480,791,1042,1482,1920]
    },
    
    //dist
    
    imgDistSrc:[
      themeAssets+'/imgs/**/*.*',
      themeAssets+'/fonts/**/*.*'
    ],
    imgDistDest: distSrc+'/lib/imgs',
    fontsDistDest: distSrc+'/lib/fonts'
  },

  //--------- yaml ----------//

  yaml: {
    yamlDevSrc:  [
      configSrc+'/dev.yml',
      configBuild+'/*.yml'
    ],
    yamlDistGhPagesSrc:  [
      configSrc+'/dist-gh-pages.yml',
      configBuild+'/*.yml'
    ],
    yamlDistHtmlSrc:  [
      configSrc+'/dist-html.yml',
      configBuild+'/*.yml'
    ],

    pathBuild:devSrc,
    yamlBuild:'_config.yml',
    yamlClean: configSrc+'_config.yml'
  },
  
  //--------- sass ----------//

  sass: {
    sassStyleSrc: sassSrc+'/style.scss',
    cssDist: 'style.css',
    cssPathDist: themeAssets+'/css/',
    cssClean: themeAssets+'/css/',
    devCompresseion: 'uncompressed',
    distCompresseion: 'compressed'
  },

  //--------- scripts ----------//

  script: {

      headSrc: [
        bowerSrc+'/picturePolyfill/dist/picturefill.js'
      ],

      // head js dist
      scriptHeadDist:'head.js',

      // scripts src
      scriptsSrc: [
        bowerSrc+'/foundation/js/vendor/jquery.js' ,
        bowerSrc+'/foundation/js/vendor/modernizr.js' ,
        bowerSrc+'/foundation/js/vendor/fastclick.js' ,
        bowerSrc+'/foundation/js/foundation.min.js',
        bowerSrc+'/jquery.easing/js/jquery.easing.min.js' ,
        scriptSrc+'/my_scripts/**/'
        // bowerSrc+'/imagesloaded/imagesloaded.pkgd.min.js',
        // bowerSrc+'/isotope/dist/isotope.pkgd.min.js',
        // bowerSrc+'/fullpage.js/dist/jquery.fullpage.min.js',
        // bowerSrc+'/FitVids.js-master/jquery.fitvids.js',
        // bowerSrc+'/swipebox-master/src/js/jquery.swipebox.min.js',
        // bowerSrc+'/slick-carousel/slick/slick.min.js' ,
        // bowerSrc+'/aos/dist/aos.js',
        // bowerSrc+'/animsition-master/animsition.min.js',
        // scriptSrcInit+'/_init/animsition_init.js',
        // scriptSrcInit+'/_init/aos_init.js',
        // scriptSrcInit+'/_init/fitivid_init.js',
        // scriptSrcInit+'/_init/foundation_init.js',
        // scriptSrcInit+'/_init/fullpage_init.js',
        // scriptSrcInit+'/_init/isotope_init.js',
        // scriptSrcInit+'/_init/swipebox_init.js',
      ],
      //js dist
      scriptsDist: 'script.js',
      
      // dist src
      pathDist: themeAssets+'/js/',
      
      //js clean
      scriptsClean: themeAssets+'/js/'

    },

  //--------- jekyll ----------//

  jekyll: {

    build: 'jekyll build --source ./_dev --destination ./_dev/_site',
    buildWatch: 'jekyll build --watch --source ./_dev --destination ./_dev/_site',

    jekyllSrcDist: [
      '!./_dev/_site/**/*.*',
      devSrc+'/**/*.*',
      '!'+themeSrc+'/.git',
      '!'+themeSrc+'/*.gemspec',
      '!'+themeSrc+'/.gitignore',
      '!'+themeSrc+'/*.md',
      themeSrc+'/**/**/*.*',
      themeAssets
    ],
    
    jekyllPathDist: './_dist/',

    jekyllBuildDist: 'jekyll build --config _dist/_config.yml --source ./_dist/ --destination ./_dist/_site'
  },

  //--------- browser sync ----------//

  browsersync: {
    baseDir: devSrc+'/_site/',
    watchPath: [devSrc+'/_site/**/**/**/*.*'],
    port: 2222,
    baseDirDist: distSrc+'/_site/',
    portDist:9292
  },

  //--------- watch ----------//
  
  watch: {
    jekyll: devSrc+'/**/**/*.*',
    yml: configSrc+'/**/**/*.*',
    imgs: imgsSrc+'/**/**/*.*',
    scripts: scriptSrc+'/**/*.*',
    sass: sassSrc+'/**/**/*.*',
    theme: themeSrc+'/**/**/*.*'
  }

};
