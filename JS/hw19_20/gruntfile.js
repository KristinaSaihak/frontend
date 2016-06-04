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
    cssmin: {
     options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: {
      files:{
        'css/dist/style.min.css':['css/src/reset.css','css/src/stylesheet.css','css/src/style.css']
      }
    }
  },

  uglify: {
    dist: {
      src: ['js/dist/script.min.js'],
      dest: 'js/dist/script.min.js'
    }
  },
  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/src',
        src: ['*.scss'],
        dest: 'css/src',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      
      files: ['css/src/*.scss'],
      tasks: ['sass'],
    },
}
}
);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [ "concat","uglify","cssmin","sass"]);

};