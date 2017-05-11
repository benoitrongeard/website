// Requis
var gulp = require('gulp');
var csscomb = require('gulp-csscomb');

var source = './node_modules';
var destinationFonts = './app/resources/fonts';
var destinationLibs = './app/resources/libs';

//Fonction pour inclure Font-Awesome
gulp.task('fontAwesome', function(){
    return gulp.src(source + '/font-awesome/fonts/*')
        .pipe(gulp.dest(destinationFonts + '/font-awesome/'));
});

//Fonction pour inclure Hover css
gulp.task('hoverCss', function(){
    return gulp.src(source + '/hover.css/css/hover.css')
        .pipe(gulp.dest(destinationLibs + '/hover-css/'));
});

//Fonction pour inclure Animate
gulp.task('animateCss', function(){
    return gulp.src(source + '/animate.css/animate.min.css')
        .pipe(gulp.dest(destinationLibs + '/animate/'));
});

//Fonction pour inclure ProgressBar
gulp.task('progressBar', function(){
    return gulp.src(source + '/progressbar.js/dist/progressbar.min.js')
        .pipe(gulp.dest(destinationLibs + '/progressbar/'));
});

//Fonction pour inclure Jquery
gulp.task('jquery', function(){
    return gulp.src(source + '/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(destinationLibs + '/jquery/'));
});

//Fonction pour inclure JqueryInView
gulp.task('jqueryInView', function(){
    return gulp.src(source + '/jquery-inview/jquery.inview.min.js')
        .pipe(gulp.dest(destinationLibs + '/jquery-inview/'));
});

//Fonction pour lancer CSSComb
gulp.task('csscomb', function() {
    gulp.src('app/assets/scss/**')
        .pipe(csscomb())
        .pipe(gulp.dest('app/assets/scss'));
});

// Tâche "build"
gulp.task('build', ['fontAwesome', 'hoverCss', 'animateCss', 'progressBar', 'jquery', 'jqueryInView']);
gulp.task('production', ['csscomb']);