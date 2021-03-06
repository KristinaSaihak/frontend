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
        'css/dist/cssmin.css':['css/src/css1.css','css/src/css2.css']
      }
    }
  },

  uglify: {
    dist: {
      src: ['js/dist/script.min.js'],
      dest: 'js/dist/script.min.js'
    }
  }
}
);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [ "concat","uglify","cssmin"]);

};