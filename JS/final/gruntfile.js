module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/dist/script.min.js'],
         dest: 'js/dist/script.min.js'
      }
    },
    cssmin: {
    target: {
      files: {
        'css/dist/style.min.css': ['css/src/reset.css','css/src/style.css']
      }
    }
  },

    //cssmin: {
    //  target: {
    //    files: [{
    //      expand: true,
    //      cwd: 'css/src',
    //      src: ['*.css'],
    //      dest: 'css/src',
    //      ext: '.min.css'
    //    }]
    //  }
    //},
   sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['*.scss'],
        dest: 'css/src',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      files: ['css/*.scss'],
      tasks: ['sass'],
    }
  },
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  

  grunt.registerTask('default', ['concat' ,'uglify','cssmin','sass']);

};