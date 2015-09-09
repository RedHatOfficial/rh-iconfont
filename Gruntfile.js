'use strict';

module.exports = function (grunt) {
  var pkg = require('./package.json');


  ////////////////////////
  // Configure Tasks
  ////////////////////////


  require('./grunt_tasks/bump.js')(grunt, pkg);
  require('./grunt_tasks/files.js')(grunt, pkg);
  require('./grunt_tasks/iconfont.js')(grunt, pkg);
  require('./grunt_tasks/sass.js')(grunt, pkg);

  grunt.config.merge({
    pkg: grunt.file.readJSON('package.json'),
  });

  require('load-grunt-tasks')(grunt);


  grunt.registerTask('default', [
    'clean', // files
    'webfont', // iconfont
    'sass'
  ]);

};
