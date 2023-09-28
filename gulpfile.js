"use strict";
const { series } = require("gulp");
const browsersync = require("browser-sync").create();
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const filter = require("gulp-filter");
const fileinclude = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
const size = require("gulp-size");
const jsmin = require("gulp-uglify");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const cssmin = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const imagesmin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
// const gulpAvif = require("gulp-avif");

const path = {
  src: {
    root: "./src",
    scss: "./src/scss",
    js: "./src/js",
    img: "./src/img/**",
    html: "./*.html",
  },

  dist: {
    root: "./dist",
    css: "./dist/css",
    js: "./dist/js",
    img: "./dist/img",
    html: "./dist",
  },
};

function html() {
  return gulp
    .src(`./src/*.html`)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(path.dist.html))
    .pipe(browsersync.stream());
}

function scripts() {
  return gulp
    .src([`${path.src.js}/*`])
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Scripts",
          message: error.message,
        })),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("scripts.js"))
    .pipe(
      rename({
        basename: "scripts",
        suffix: ".min",
      })
    )
    .pipe(jsmin())
    .pipe(sourcemaps.write())
    .pipe(
      size({
        showFiles: true,
      })
    )
    .pipe(gulp.dest(path.dist.js))
    .pipe(browsersync.stream());
}

function styles() {
  return gulp
    .src(`${path.src.scss}/index.scss`)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "Styles",
          message: error.message,
        })),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        basename: "styles",
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(
      size({
        showFiles: true,
      })
    )
    .pipe(gulp.dest(path.dist.css));
}

function images() {
  const svgFilter = filter("**/*.svg", { restore: true });
  const icoFilter = filter("**/*.ico", { restore: true });

  return (
    gulp
      .src(`${path.src.img}/**/*.{png,jpg,jpeg,svg,ico}`)
      .pipe(svgFilter)
      .pipe(gulp.dest(path.dist.img))
      .pipe(svgFilter.restore)
      .pipe(icoFilter)
      .pipe(gulp.dest(path.dist.img))
      .pipe(icoFilter.restore)
      .pipe(filter(["**", "!**/*.svg", "!**/*.ico"]))
      // .pipe(gulpAvif())
      .pipe(
        imagesmin([
          imagesmin.gifsicle({ interlaced: true }),
          imagesmin.mozjpeg({ quality: 75, progressive: true }),
          imagesmin.optipng({ optimizationLevel: 5 }),
        ])
      )
      .pipe(
        size({
          showFiles: true,
        })
      )
      .pipe(gulp.dest(path.dist.img))
  );
}

function clean() {
  return del(["dist"]);
}

function scriptsDev() {
  return gulp
    .src([`${path.src.js}/*`])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("scripts.min.js"))
    .pipe(jsmin())
    .pipe(gulp.dest(path.dist.js));
}

function stylesDev() {
  return gulp
    .src(`${path.src.scss}/index.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        basename: "styles",
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest(path.dist.css));
}

function watch() {
  browsersync.init({
    server: {
      baseDir: path.dist.html,
    },
  });

  gulp.watch("./src/html/**/*.html", html).on("change", browsersync.reload);
  gulp.watch("./src/**/*.scss", styles).on("change", browsersync.reload);
  gulp.watch(path.src.js, scripts).on("change", browsersync.reload);
  gulp.watch(path.src.img, images).on("change", browsersync.reload);
}

const build = series(clean, html, styles, scripts, images, watch);
const dev = series(clean, html, stylesDev, scriptsDev, images, watch);

exports.build = build;
exports.dev = dev;
