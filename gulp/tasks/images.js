const { src, dest } = require('gulp');

// Image Compression
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

//File paths
const DIST_PATH = 'dist';
<<<<<<< HEAD
const IMAGES_PATH = 'src/images/**/*.{png,jpeg,jpg,svg,gif,xml,ico,jason}';
=======
const IMAGES_PATH = 'src/images/**/*.{png,jpeg,jpg,svg,gif}';
>>>>>>> ec4e382e052527760f45a3b6ea085e4265e550d6

// Images
function imagesFn() {
  return src(IMAGES_PATH)
    .pipe(imagemin(
      [
        imagemin.gifsicle(),
        imagemin.mozjpeg(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminPngquant(),
        imageminJpegRecompress()
      ]
    ))
    .pipe(dest(DIST_PATH + '/images'));
}

exports.build = imagesFn;
