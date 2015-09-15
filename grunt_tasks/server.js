module.exports = function (grunt, pkg) {

  grunt.config.merge({

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist'
        }
      }
    }

  });

}
