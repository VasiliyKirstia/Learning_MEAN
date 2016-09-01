module.exports = function(grunt) {

    grunt.initConfig({
        jade: {
            compile:{
                src: 'src/frontend/**/*.jade',
                dest: 'dist/frontend/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['jade']);
};
