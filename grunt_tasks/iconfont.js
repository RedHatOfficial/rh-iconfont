module.exports = function (grunt, pkg) {
  grunt.config.merge({

    webfont: {
      icons: {
        src: 'src/iconfont/vectors/**/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/files/',
        options: {
          fontFilename: 'icons-{hash}',
          relativeFontPath: '../fonts',
          font: 'rh-iconfont',
          stylesheet: 'scss',
          template: 'src/iconfont/templates/sass-template.css',
          htmlDemo: true,
          htmlDemoTemplate: 'src/iconfont/templates/html-template.html',
          destHtml: 'dist/files',
          templateOptions: {
            "fontFamilyName": "rh-iconfont",
            "baseClass": "",
            "mixinPrefix": ""
          }
        }
      }
    },
  });
}
