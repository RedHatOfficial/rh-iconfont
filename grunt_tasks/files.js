module.exports = function (grunt, pkg) {

  grunt.config.merge({

    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeUselessStrokeAndFill: false
          }
        ]
      },
      dist: {
        expand: true,
        cwd: 'src/iconfont',
        src: ['vectors/**/*.svg'],
        dest: 'dist/svg',
        flatten: true,
      }
    },

    clean: {
      assetsDist: ["./dist/*"]
    },

  });

}
