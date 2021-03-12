module.exports = function (grunt, pkg) {
  grunt.config.merge({

    // Sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['./dist/'],
        implementation: require('node-sass'),
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
    }
  });
}
