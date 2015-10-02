module.exports = function (grunt, pkg) {

  grunt.config.merge({

    connect: {
      server: {
        options: {
          port: 9001,
          base: './',
          open: "http://localhost:9001/fixtures/icon-preview.html",
          keepalive: 'true'
        }
      }
    }

  });

}
