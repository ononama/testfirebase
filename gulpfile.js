var gulp = require('gulp');
var connect = require('gulp-connect-php');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var connectSSI   = require('connect-ssi');
//var compass = require('gulp-compass');

/*
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
*/


//scss編集後反映&リロード
gulp.task('sass', function () {
//gulp.src('./scss/**/*.scss')
//gulp.src('./assets/scss/**/*.scss')
//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//圧縮
//.pipe(sass().on('error', sass.logError))//圧縮
//.pipe(gulp.dest('./css'))
//.pipe(gulp.dest('./special/css'))
//.pipe(browserSync.reload({stream:true}));
//gulp.src("./*.php").pipe(browserSync.reload({stream:true}));

//指定ソース



gulp.src('./assets/scss/**/styles.scss')
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//圧縮
//.pipe(sass().on('error', sass.logError))//圧縮
.pipe(gulp.dest('./assets/css'))
//.pipe(gulp.dest('./special/css'))
.pipe(browserSync.reload({stream:true}));


gulp.src('./assets/scss/**/news.scss')
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//圧縮
//.pipe(sass().on('error', sass.logError))//圧縮
.pipe(gulp.dest('./assets/css'))
//.pipe(gulp.dest('./special/css'))
.pipe(browserSync.reload({stream:true}));

gulp.src('./assets/scss/**/topics.scss')
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//圧縮
//.pipe(sass().on('error', sass.logError))//圧縮
.pipe(gulp.dest('./assets/css'))
//.pipe(gulp.dest('./special/css'))
.pipe(browserSync.reload({stream:true}));
gulp.src("./*.php").pipe(browserSync.reload({stream:true}));

});




// Watch
gulp.task('watch', function() {
  gulp.watch("./*.php", ['sass']);
  gulp.watch('./assets/scss/import**/*.scss', ['sass'])
    
});
  


/*
gulp.task('server', function() {
　connect.server({
　　port:8894,
　　base:'./'
　}, function (){
　　browserSync({
	proxy: 'localhost:8894',
    port:8894,
    server: {
      baseDir: './',
      middleware: [
        connectSSI({
          baseDir: __dirname + '/',
          ext: '.html'
        })
      ]
    }
　　});
　});
});
*/
/*
gulp.task('connect', function() {
  connect.server({
	port:8894,
	base:'./'
  });
});
*/

gulp.task('server', function() {
  browserSync({
  	port:8899,
    server: {
      baseDir: './',
      middleware: [
        connectSSI({
          baseDir: __dirname + '/',
          ext: '.html'
        })
      ]
    },
  });
});
gulp.task('reload', function () {
browserSync.reload();
});

gulp.task('default', ['server','reload','sass','watch']);