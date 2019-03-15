let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');


gulp.task('styles', function(){
	gulp.src('app/scss/main.scss')
		.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('app/css'));
})