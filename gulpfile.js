const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build:sass', () =>
  gulp.src('src/**/*.scss')
      .pipe(gulp.dest('packages/fain'))
);

gulp.task('build:js', () =>
  gulp.src(['src/**/*.@(js|jsx)'])
      .pipe(babel())
      .pipe(gulp.dest('packages/fain'))
);

gulp.task('build', ['build:js', 'build:sass']);

gulp.task('dev', () => gulp.watch('src/**/*.@(js|jsx|scss)', ['build']));

gulp.task('default', ['build']);
