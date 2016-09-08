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
            html: {
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

        uglify: {
            frontend: {
                expand: true,
                cwd: "src/frontend/js/",
                src: "**/*.js",
                dest: "dist/frontend/js",
                ext: ".min.js"
            },
            backend: {}
        },

        copy: {
            backend: {
                expand: true,
                cwd: "src/backend",
                src: "*",
                dest: "dist/backend"
            },
            bower_components: {
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
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('clean-all', "Clean frontend and backend directories.", ['clean:frontend']);

    grunt.registerTask('copy-backend', "Copy backend directories.", ['copy:backend']);
    grunt.registerTask('copy-frontend', "Copy frontend directories.", ['copy:bower_components']);

    grunt.registerTask('prepare-frontend', "Compile and minify frontend.", ['jade:compile', 'htmlmin:html', 'uglify:frontend']);

    grunt.registerTask('build-backend', "Prepare backend source code.", ['copy-backend']);
    grunt.registerTask('build-frontend', "Prepare frontend source code.", ['copy-frontend', 'prepare-frontend']);

    grunt.registerTask('default','Build frontend and backend.', ['clean-all', 'build-frontend', 'build-backend']);
};
