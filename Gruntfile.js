"use strict";

module.exports = function(grunt) {

    var components = "components/";

    grunt.initConfig({
        reactjs: {
            main:{
                files: [{
                    src:"src/jsx/datepicker.jsx",
                    dest: "dist/js/datepicker.jsx.js"
                }],
                options: {
                    wrapper: true
                }
            }
        },
        copy: [{
            expand: true,
            cwd: components + "react/",
            src: [ "react.min.js"],
            dest: "dist/js/"
        }, {
            expand: true,
            cwd: "vendor/",
            src: [ "fonts/*.*" ],
            dest: "dist/"
        }],
        uglify: {
            module: {
                files: [{
                    src: ["dist/js/*.jsx.js"],
                    dest: "dist/js/",
                    expand: true,
                    flatten: true,
                    ext: ".min.js"
                }],
                options: {
                    mangle: true
                }
            }
        },
        less: {
            main: {
                files: {
                  "dist/css/datepicker.css": ["src/less/datepicker.less"]
                }
            }
        },
        cssmin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        clean: {
          main: ["dist/"]
        }
    });

    grunt.loadNpmTasks("wjsjtu-reactjs");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("default", ["clean", "reactjs", "copy", "uglify:module", "less:main", "cssmin:main"]);
};