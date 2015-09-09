module.exports = function (grunt, pkg) {

  grunt.config.merge({

    clean: {
      tmpFolder: ["./tmp"],
      assetsDist: ["./dist/*"]
    },

  });

}
