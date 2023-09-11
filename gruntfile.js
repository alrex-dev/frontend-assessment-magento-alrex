module.exports = function ( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.read('package.json'), 
        
        sass: {
            options: {
                sourcemap: 'auto'
            },
            
            dist: {
                files: {
                    'assets/css/style.css' : 'src/style.scss'
                }
            }
        },
        
        watch: {
            css: {
                files: 'src/**/*.scss',
                //tasks: ['sass', 'concat']
                tasks: ['sass']
            }
        }
    });
    
    grunt.registerTask(
        'dev',         
        ['sass', 'watch']
    );  
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-sass');
}