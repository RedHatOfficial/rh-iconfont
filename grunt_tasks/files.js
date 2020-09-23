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

    copy: {
      preview: {
        files: [{
          expand: true,
          src: ['fixtures/*'],
          dest: './dist/',
          filter: 'isFile',
          rename: function(dest, src) {
            return dest + 'index.html';
          }
        }]
      },
      pfe: {
        files: [{
          expand: true,
          // flatten: true,
          src: ['pfe*/dist/*.{umd.js,css}'],
          cwd: './node_modules/@patternfly',
          dest: './dist/assets/',
          filter: 'isFile'
        }]
      }
    },

    clean: {
      assetsDist: ["./dist/*"]
    },

    // Watch for changes and trigger compass and livereload
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
          livereload: true
      },
      preview: {
          files: "fixtures/{,**/}*.html",
          tasks: ["copy"]
      }
    }

  });

}
