module.exports = function (grunt, pkg) {

  grunt.config.merge({

    connect: {
      server: {
        options: {
          base: './dist',
          open: true,
          livereload: true
        }
      }
    }

  });

}
