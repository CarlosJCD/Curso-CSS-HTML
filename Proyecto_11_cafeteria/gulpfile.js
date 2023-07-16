const { src } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function css(done) {
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(dest('build/css'))

    done();
}

exports.css = css;
