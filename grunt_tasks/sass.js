module.exports = function (grunt, pkg) {
  grunt.config.merge({

    // Sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['./dist/']
      },
      dist: {
        files: [{
          expand: true,
          cwd: './src/sass/',
          src: ['**/*.scss'],
          dest: 'dist/assets',
          ext: '.css'
        }]
      }
    }
  });
}
