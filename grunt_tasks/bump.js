module.exports = function (grunt, pkg) {

  grunt.config.merge({

    bump: {
        options: {
          files: ['package.json', 'bower.json'],
          updateConfigs: ['pkg'],
          commit: true,
          commitMessage: 'Release %VERSION%',
          commitFiles: [''],
          createTag: true,
          tagName: '%VERSION%',
          tagMessage: 'Version %VERSION%',
          push: true,
          pushTo: 'origin',
          gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
          globalReplace: false
        }
      },

    // Misc Shell Scripts
    // https://github.com/sindresorhus/grunt-shell
    shell: {
      bumpCommitDev: {
        command: 'git commit -am "updating version numbers to <%= pkg.version %> "'
      },
      bumpPushDev: {
        command: 'git push origin HEAD'
      },
      bumpSwitchBranch: {
        command: 'git checkout -b temp'
      },
      bumpAddDist: {
        command: 'git add dist -f'
      },
      bumpRemoveTemp: {
        command: 'git checkout - && git branch -D temp'
      }

    },

  });

  // tag provides an automated method for creating new tagged releases of webrh and pushing the tag to origin
  // grunt tag:[patch, minor, major, prerelease, git]
  // grunt tag is the same as grunt tag:prerelease

  grunt.registerTask('tag', function(option, pre) {
    var releaseType = '',
        releaseTypes = ['patch', 'minor', 'major', 'prerelease', 'git'];


    if (option == undefined) {
      releaseType = 'prerelease';
    }
    else if (releaseTypes.indexOf(option) > -1) {
      if (pre == 'pre') {
        releaseType = 'pre' + option;
      }
      else {
        releaseType = option;
      }

    }
    else if (!isNaN(option.charAt(0))) {
      grunt.option('setversion', option);
    }
    else {
      grunt.fail.fatal(option + ' is not a valid release type');
    }

    grunt.task.run('bump-only:' + releaseType );
    grunt.task.run('shell:bumpCommitDev');
    grunt.task.run('shell:bumpPushDev');
    grunt.task.run('shell:bumpSwitchBranch');
    grunt.task.run('default');
    grunt.task.run('shell:bumpAddDist');
    grunt.task.run('bump-commit');
    grunt.task.run('shell:bumpRemoveTemp');
  });

}
