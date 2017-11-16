module.exports = function (grunt) {

    grunt.initConfig({

        clean: ['build/'],

        concat: {
            js: {
                src: ['public/js/*.js', 'public/js/**/*.js'],
                dest: 'build/app.js'
            },
            lib_js: {
                nonull: true,

                src: [

                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.js',
                    'node_modules/angular/angular.min.js',
                    'bower_components/angular-route-styles/route-styles.js',
                    'node_modules/angular-animate/angular-animate.min.js',
                    'node_modules/angular-resource/angular-resource.min.js',
                    'node_modules/angular-route/angular-route.min.js',
                    'node_modules/angular-storage/dist/angular-storage.min.js',
                    'node_modules/moment/min/moment.min.js'
                ],
                dest: 'build/lib.js'
            }

        },

        copy: {
            html: {
                files: [
                    {expand: true, cwd: "public/", src: ['**/*.html'], dest: "build/"}
                ]
            },
            css: {
                files: [
                    {expand: true, cwd: "public/", src: ['**/*.css'], dest: "build/"}
                ]
            },
            bootstrap: {
                files: [{
                    expand: true, src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: "build/"
                }]
            },
            images: {expand: true, cwd: "public/" + "/images/", src: "**/*", dest: "build" + "/images/"}
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/app.js': ['build/app.js']
                }
            }
        },

        cssmin: {
            app: {
                files: [{
                    src: "build/css/app.css",
                    dest: "build/css/app.css"
                }, {
                    src: "build/css/inicio.css",
                    dest: "build/css/inicio.css"
                }, {
                    src: "build/css/login.css",
                    dest: "build/css/login.css"
                }]
            }
        },

        watch: {
            scripts: {
                files: ['**/*.js', '**/*.css'],
                tasks: ['clean', 'concat', 'copy', 'uglify', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'concat', 'copy', 'uglify', 'cssmin']);

};