module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                cwd: "src/frontend/",
                src: "**/*.jade",
                dest: "dist/frontend",
                expand: true,
                extDot: 'last',
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
                cwd: "dist/frontend/",
                src: "**/*.html",
                dest: "dist/frontend"
            }
        },

        uglify: {
            frontend: {
                expand: true,
                cwd: "src/frontend/",
                src: ["**/*.js", "!**/*.spec.js"],
                dest: "dist/frontend",
                extDot: 'last',
                ext: ".min.js"
            },
            backend: {}
        },

        copy: {
            backend: {
                expand: true,
                cwd: "src/backend/",
                src: "*",
                dest: "dist/backend"
            },
            bower_components: {
                expand: true,
                cwd: "./",
                src: "bower_components/**/*",
                dest: "dist/frontend"
            },
            styles: {
                expand: true,
                cwd: "src/frontend/",
                src: "**/*.css",
                dest: "dist/frontend"
            },
            phones: {
                expand: true,
                cwd: "src/frontend/phones",
                src: "**/*.*",
                dest: "dist/frontend/phones"
            },
            images: {
                expand: true,
                cwd: "src/frontend/img",
                src: "**/*.*",
                dest: "dist/frontend/img"
            }
        },

        clean: {
            frontend: {
                expand: true,
                cwd: "dist/frontend",
                src: "**/*.*"
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
    grunt.registerTask('copy-frontend', "Copy frontend directories.", ['copy:bower_components', 'copy:styles', 'copy:phones', 'copy:images']);

    grunt.registerTask('prepare-frontend', "Compile and minify frontend.", ['jade:compile', 'htmlmin:html', 'uglify:frontend']);

    grunt.registerTask('build-backend', "Prepare backend source code.", ['copy-backend']);
    grunt.registerTask('build-frontend', "Prepare frontend source code.", ['clean:frontend', 'copy-frontend', 'prepare-frontend']);

    grunt.registerTask('default','Build frontend and backend.', ['clean-all', 'build-frontend', 'build-backend']);
};
