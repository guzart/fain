const gulp = require('gulp');
const babel = require('gulp-babel');
const path = require('path');

const paths = {
  dest: path.resolve('./packages/fain'),
  src: path.resolve('./packages/fain-src/src')
};

gulp.task('build:sass', () =>
  gulp.src(`${paths.src}/**/*.scss`)
      .pipe(gulp.dest(paths.dest))
);

gulp.task('build:js', () =>
  gulp.src([`${paths.src}/**/*.@(js|jsx)`])
      .pipe(babel({
        babelrc: false,
        ignore: ['node_modules/*'],
        presets: ['latest', 'react'],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
          'transform-runtime'
        ]
      }))
      .pipe(gulp.dest(paths.dest))
);

gulp.task('build', ['build:js', 'build:sass']);

gulp.task('dev', () => gulp.watch(`${paths.src}/**/*.@(js|jsx|scss)`, ['build']));

gulp.task('default', ['build']);
