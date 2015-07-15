var gulp = require('gulp')
var less = require('gulp-less')
var react = require('gulp-react')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')

var DEST = 'build'

gulp.task('jsxtranform', function(){
    gulp.src('./src/**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest(DEST))
})

gulp.task('less', function(){
    gulp.src('./src/**/*.less')
        .pipe(less({
            plugins: [new LessPluginAutoPrefix({ browsers: ["last 2 versions"] })]
        }))
        .pipe(gulp.dest(DEST))

})

gulp.task('copy', function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest(DEST))
})

gulp.task('build', ['jsxtranform', 'less', 'copy'])

gulp.task('watch', ['build'], function(){
    gulp.watch('./src/**/*', ['build'])
})

gulp.task('default', ['build'])