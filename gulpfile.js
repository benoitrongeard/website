// Requis
const gulp = require("gulp"),
  csscomb = require("gulp-csscomb"),
  useref = require("gulp-useref"),
  gulpif = require("gulp-if"),
  uglify = require("gulp-uglify"),
  minifyCss = require("gulp-clean-css");

const source = "./node_modules";
const destinationFonts = "./app/resources/fonts";
const destinationLibs = "./app/resources/libs";

//Fonction pour inclure Font-Awesome
gulp.task("fontAwesome", function () {
  return gulp
    .src(source + "/font-awesome/fonts/*")
    .pipe(gulp.dest(destinationFonts + "/font-awesome/"));
});

//Fonction pour inclure Hover css
gulp.task("hoverCss", function () {
  return gulp
    .src(source + "/hover.css/css/hover.css")
    .pipe(gulp.dest(destinationLibs + "/hover-css/"));
});

//Fonction pour inclure Animate
gulp.task("animateCss", function () {
  return gulp
    .src(source + "/animate.css/animate.min.css")
    .pipe(gulp.dest(destinationLibs + "/animate/"));
});

//Fonction pour inclure ProgressBar
gulp.task("progressBar", function () {
  return gulp
    .src(source + "/progressbar.js/dist/progressbar.min.js")
    .pipe(gulp.dest(destinationLibs + "/progressbar/"));
});

//Fonction pour inclure Jquery
gulp.task("jquery", function () {
  return gulp
    .src(source + "/jquery/dist/jquery.min.js")
    .pipe(gulp.dest(destinationLibs + "/jquery/"));
});

//Fonction pour inclure JqueryInView
gulp.task("jqueryInView", function () {
  return gulp
    .src(source + "/jquery-inview/jquery.inview.min.js")
    .pipe(gulp.dest(destinationLibs + "/jquery-inview/"));
});

//Fonction pour inclure PaceJs
gulp.task("pace", function () {
  return gulp
    .src(source + "/pace-progress/pace.min.js")
    .pipe(gulp.dest(destinationLibs + "/pace/"));
});

//Fonction pour lancer CSSComb
gulp.task("csscomb", function () {
  gulp
    .src("app/assets/scss/**")
    .pipe(csscomb())
    .pipe(gulp.dest("app/assets/scss"));
});

//Fonction pour rassembler tous les JS, les CSS et les minifier
gulp.task("useref", function () {
  return gulp
    .src("app/*.html")
    .pipe(useref())
    .pipe(gulpif("*.js", uglify()))
    .pipe(gulpif("*.css", minifyCss()))
    .pipe(gulp.dest("app/"));
});

// Tâches
gulp.task(
  "build",
  gulp.series(
    "fontAwesome",
    "hoverCss",
    "animateCss",
    "progressBar",
    "jquery",
    "jqueryInView",
    "pace"
  )
);
gulp.task("dev", gulp.series("csscomb"));
gulp.task("production", gulp.series("useref"));
