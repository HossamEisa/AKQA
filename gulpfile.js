 const livereload = require('gulp-livereload'),
   gulp = require('gulp');


 // gulp plugin to minify HTML.
 htmlmin = require('gulp-htmlmin'),
   //minify CSS
   cleanCSS = require('gulp-clean-css'),
   //minify JS
   terser = require('gulp-terser'),
   //concat files
   concat = require('gulp-concat'),

   // Sass
   sass = require('gulp-sass')(require('sass'));

 const {
   parallel
 } = require('gulp');
 // mini HTML
 function minifiyhtml() {
   return gulp
     .src('./src/*.html')
     .pipe(htmlmin({
       collapseWhitespace: true
     }))
     .pipe(gulp.dest('build'))
     .pipe(livereload());

 }

 // Minify CSS to Build
 function minifyCSS() {
   return gulp
     .src('src/css/*.css')
     .pipe(cleanCSS({
       compatibility: 'ie8'
     }))
     .pipe(concat('all.css'))
     .pipe(gulp.dest('build/css'))
     .pipe(livereload());
 }
 // Minify JS to Build
 function minifyJS() {
   return gulp
     .src([
       'src/js/fancybox.umd.js',
       //  custom
       'src/js/navMenu.js',
       'src/js/backTop.js',
       'src/js/scroll-animation.js',
       'src/js/carousel-custom.js',
       'src/js/loading.js',
     ])
     .pipe(terser())
     .pipe(concat('all.js'))
     .pipe(gulp.dest('build/js/'))
 }

 // Move Fonts to Build
 function moveFonts() {
   return gulp
     .src('src/fonts/*')
     .pipe(gulp.dest('build/fonts'))
 }
 // Move Fonts to images
 function moveImages() {
   return gulp
     .src('src/images/*')
     .pipe(gulp.dest('build/images'))
 }


 //  Sass Compiler
 function sassCompiler() {
   return gulp.src('src/scss/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('src/css'));
 }


 exports.default = function () {
   require("./server.js");
   livereload.listen();
   gulp.watch(["./src/index.html", "./src/js/*.js", 'src/scss/**/*.scss'],
     parallel(sassCompiler, minifiyhtml, minifyCSS, minifyJS, moveFonts, moveImages));
 }