// Requis
var gulp = require('gulp');

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

// Tâche "build"
gulp.task('build', ['fontAwesome', 'hoverCss']);