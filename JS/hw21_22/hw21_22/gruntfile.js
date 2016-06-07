module.exports = function(grunt) {

  require ('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
    options: {
      sourceMap: true,
      presets: ['babel-preset-es2015']
    },
            dist: {
                files: {
                  'js/dist/script_main.js': 'js/src/*.js'
                }
              }
            
        },

  //   concat: {
  //     options: {
  //       separator: ';'
  //     },
  //     dist: {
  //       src: ['js/src/*.js'],
  //       dest: 'js/dist/script.min.js'
  //     }
  //   },
  //   uglify: {
  //     options: {
  //       separator: ';'
  //     },
  //     dist: {
  //       src: ['js/dist/script.min.js'],
  //        dest: 'js/dist/script.min.js'
  //     }
  //   },
  //   cssmin: {
  //   target: {
  //     files: {
  //       'css/dist/style.min.css': ['css/src/reset.css']
  //     }
  //   }
  // },

  //  sass: {
  //   dist: {
  //     files: [{
  //       expand: true,
  //       cwd: 'css',
  //       src: ['*.scss'],
  //       dest: 'css',
  //       ext: '.css'
  //     }]
  //   }
  // },
  watch: {
    babel: {
      files: ['js/src/*.js'],
      tasks: ['babel']
    }
  },
});

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  

  grunt.registerTask('default', ['babel']);

};