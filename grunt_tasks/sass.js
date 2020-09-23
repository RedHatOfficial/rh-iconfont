module.exports = function (grunt, pkg) {
  grunt.config.merge({
    // Sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['./dist/'],
        outputStyle: 'expanded'
      },
      dist: {
        files: [{
          expand: true,
          cwd: './src/sass/',
          src: ['**/*.scss'],
          dest: 'dist/files',
          ext: '.css'
        }]
      }
    },

    // Watch for changes and trigger compass and livereload
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
          livereload: true
      },
      sass: {
          files: "src/sass/*.scss",
          tasks: ["sass"]
      }
    }
  });
}
