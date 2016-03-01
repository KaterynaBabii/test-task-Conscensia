var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    imageminJpegtran = require('imagemin-jpegtran');
    iconfont = require('gulp-iconfont');
   
    


// build
gulp.task('html', function () {

    return gulp.src('app/*.html')
    	.pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))      
        .pipe(gulp.dest('dist'));
});

// bower
gulp.task('bower', function () {
  gulp.src('./app/*.html')
    .pipe(wiredep({
      directory: "app/bower_components"
    }))
    .pipe(gulp.dest('dist'));
});
// image Task
// Compress
gulp.task('image', function () {
  return gulp.src('app/img/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('imageJPG', function () {
    return gulp.src('app/img/*.jpg')
        .pipe(imageminJpegtran({progressive: true})())
        .pipe(gulp.dest('dist/img'));
});
// Icon font
gulp.task('iconfont', function () {
  gulp.src('app/fonts/*')
  	 .pipe(iconfont({
      fontName: 'myfont', 
      appendCodepoints: true
    }))
      .on('codepoints', function(codepoints, options) {
        // CSS templating, e.g. 
        console.log(codepoints, options);
      })
    .pipe(gulp.dest('dist/fonts'));
});


