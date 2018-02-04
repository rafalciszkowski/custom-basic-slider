var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

gulp.task("buildCss", function(){
    return gulp.src("app/sass/**/*.scss")
        // .pipe(concat("sccs-files.scss"))
        .pipe(sass({outputStyle:"compressed"}).on('error', sass.logError))
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/css"))
})

gulp.task("buildCss:watch", function(){
    gulp.watch("app/sass/**/*.scss", ["buildCss"])
})
