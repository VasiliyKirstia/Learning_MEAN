module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                cwd: "src/frontend/html/",
                src: "**/*.jade",
                dest: "dist/frontend/html",
                expand: true,
                ext: ".html"
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
                cwd: "dist/frontend/html/",
                src: "**/*.html",
                dest: "dist/frontend/html"
            }
        },
        copy: {
            backend: {
                expand: true,
                cwd: "src/backend",
                src: "*",
                dest: "dist/backend"
            },
            frontend: {
                expand: true,
                cwd: "./",
                src: "bower_components/**/*",
                dest: "dist/frontend"
            }
        },
        clean: {
            frontend: {
                expand: true,
                cwd: "dist/frontend",
                src: "*"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('clean-all', "Clean frontend and backend directories.", ['clean:frontend']);
    grunt.registerTask('build-backend', "Copy backend source code.", ['copy:backend']);
    grunt.registerTask('build-frontend', "Prepare frontend source code.", ['jade:compile', 'htmlmin:frontend', 'copy:frontend']);
    grunt.registerTask('default','Build frontend and backend.', ['clean-all', 'build-frontend', 'build-backend']);
};
