module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: '29%',
                        suffix: '_1x',
                        quality: 30
                    }, {
                        name: 'small',
                        width: '58%',
                        suffix: '_2x',
                        quality: 30
                    }, {
                        name: 'large',
                        width: '50%',
                        suffix: '_1x',
                        quality: 30
                    }, {
                        name: 'large',
                        width: '100%',
                        suffix: '_2x',
                        quality: 30
                    }],
                    separator: '_',
                    newFilesOnly: false
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images-src/',
                    dest: 'images/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};
