module.exports = function (grunt, pkg) {
  grunt.config.merge({

    webfont: {
      rh_icon: {
        src: 'src/iconfont/vectors/rh_icon/*.svg',
        dest: 'dist/fonts/rh_icon',
        destCss: 'dist/files/',
        options: {
          fontFilename: 'rh-iconfont',
          relativeFontPath: '../fonts/rh_icon',
          font: 'rh-iconfont',
          stylesheet: 'scss',
          template: 'src/iconfont/templates/sass-template.css',
          htmlDemo: true,
          htmlDemoTemplate: 'src/iconfont/templates/html-template.html',
          codepointsFile: 'codepoints.rh_icon.map',
          destHtml: 'dist/files',
          templateOptions: {
            "fontFamilyName": "rh-iconfont",
            "baseClass": "rh-icon",
            "pathFromDist": "fonts/rh_icon/rh-iconfont"
          }
        }
      },
      rh_web_icon: {
        src: 'src/iconfont/vectors/web_icon/*.svg',
        dest: 'dist/fonts/web_icon',
        destCss: 'dist/files/',
        options: {
          fontFilename: 'rh-web-iconfont',
          relativeFontPath: '../fonts/web_icon',
          font: 'web-iconfont',
          stylesheet: 'scss',
          template: 'src/iconfont/templates/sass-template.css',
          htmlDemo: true,
          htmlDemoTemplate: 'src/iconfont/templates/html-template.html',
          codepointsFile: 'codepoints.rh_web_icon.map',
          destHtml: 'dist/files',
          templateOptions: {
            "fontFamilyName": "rh-web-iconfont",
            "baseClass": "web-icon",
            "pathFromDist": "fonts/web_icon/rh-web-iconfont"
          }
        }
      }
    },
  });
}
