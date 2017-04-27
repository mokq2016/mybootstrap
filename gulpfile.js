var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	console.log(123);
});

gulp.task('uglify-js', function() {
	gulp.src("src/js/**/*.js")
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});