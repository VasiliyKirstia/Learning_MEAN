module.exports = function(grunt) {
    grunt.initConfig({
        clean: ["dist/"],

        less: {
            compile: {
                options: {},
                files: [ {
                    cwd: "src/styles",
                    src: "**/*.less",
                    dest: "dist/styles",
                    expand: true,
                    ext: ".css"
                } ]
            }
        },

        pug: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [ {
                    cwd: "src/templates",
                    src: "**/*.pug",
                    dest: "dist/templates",
                    expand: true,
                    ext: ".html"
                } ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('clean-all', 'Cleaning all distribution directories.', ['clean']);
    grunt.registerTask('compile-styles', 'Compiling styles.', ['less:compile']);
    grunt.registerTask('compile-templates', 'Compiling templates.', ['pug:compile']);

    grunt.registerTask('default','Build frontend.', ['clean-all', 'compile-styles', 'compile-templates']);
};
