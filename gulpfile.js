const gulp = require('gulp');
const babel = require('gulp-babel');
const path = require('path');
const fractal = require('./packages/fain-src/fractal');

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

gulp.task('build:docs', ['build:js', 'build:sass'], () => {
  const builder = fractal.web.builder();
  const logger = fractal.cli.console;
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

gulp.task('build', ['build:js', 'build:sass', 'build:docs']);

gulp.task('dev:build', ['build:js', 'build:sass']);
gulp.task('dev:fain', () => gulp.watch(`${paths.src}/**/*.@(js|jsx|scss)`, ['dev:build']));
gulp.task('dev:fractal', ['dev:build'], () => fractal.cli.exec('start --sync'));

gulp.task('dev', ['dev:build', 'dev:fain', 'dev:fractal']);

gulp.task('default', ['build']);
