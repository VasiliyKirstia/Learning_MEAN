module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "src/frontend",
                  src: "**/*.jade",
                  dest: "dist/frontend",
                  expand: true,
                  ext: ".html"
                } ]
            }
        },
        htmlmin: {
            frontend: {
                options: {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    collapseInlineTagWhitespace: true,
                    html5: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs: true
                },
                expand: true,
                cwd: "dist/frontend",
                src: "**/*.html",
                dest: "dist/frontend"
            }
        },
        copy: {
            backend: {
                expand: true,
                cwd: "src/backend",
                src: "*",
                dest: "dist/backend"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build-backend', "Copy backend source code.", ['copy:backend']);
    grunt.registerTask('build-frontend', "Prepare frontend source code.", ['jade:compile', 'htmlmin:frontend']);
    grunt.registerTask('default','Build frontend and backend.', ['build-frontend', 'build-backend']);
};
