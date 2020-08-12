"use strict";

module.exports = function (grunt) {
  var pkg = require("./package.json");
  var fs = require("fs");
  var path = require("path");

  ////////////////////////
  // Configure Tasks
  ////////////////////////

  require("./grunt_tasks/bump.js")(grunt, pkg);
  require("./grunt_tasks/files.js")(grunt, pkg);
  require("./grunt_tasks/iconfont.js")(grunt, pkg);
  require("./grunt_tasks/sass.js")(grunt, pkg);
  require("./grunt_tasks/server.js")(grunt, pkg);

  grunt.config.merge({
    pkg: grunt.file.readJSON("package.json"),
  });

  require("load-grunt-tasks")(grunt);

  // Capture listing of SVGs
  var getSupportedIcons = function (pathname) {
    let iconNames = [];
    if (grunt.file.isDir("./src/iconfont/vectors/" + pathname)) {
      grunt.file
        .expand(
          {
            cwd: "./src/iconfont/vectors/",
          },
          pathname + "/*.svg"
        )
        .map((item) => iconNames.push(path.basename(item, ".svg")));
    }
    return iconNames;
  };

  grunt.registerTask("listing", function () {
    let sets = {};
    grunt.file
      .expand(
        {
          cwd: "./src/iconfont/vectors/",
        },
        "*"
      )
      .map((pathname) => {
        sets[pathname] = getSupportedIcons(pathname);
      });

    let content = JSON.stringify(sets, null, 2);
    grunt.file.write("./dist/svg/icon-sets.json", content);
    Object.keys(sets).forEach((key) => {
      grunt.log.ok(
        key + " was successfully written to ./dist/svg/icon-sets.json."
      );
    });
  });

  grunt.registerTask("default", [
    "clean", // files
    "webfont", // iconfont
    "svgmin", // files
    "listing",
    "sass", // sass
  ]);

  grunt.registerTask("watcher", [
    "clean", // files
    "webfont", // iconfont
    "svgmin", // files
    "listing",
    "sass", // sass
    "connect",
  ]);
};
