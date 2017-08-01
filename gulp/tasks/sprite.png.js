'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function() {
        var spriteData = $.gulp.src('./source/images/sprite/*.png')
                .pipe($.gp.spritesmith({
                    imgName: 'sprite.png',
                    cssName: 'sprite.scss',
                    cssFormat: 'scss',
                    algorithm: 'top-down'
                }));

        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./source/style/sprite/'));

        return $.merge(imgStream, cssStream);
    });
};