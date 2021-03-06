var path = require('path');
var dest = './build';
var src = './src';
var relativeSrcPath = path.relative('.', src);

module.exports = {
    dest: dest,

    js: {
        src: src + '/js/**',
        dest: dest + '/js',
        uglify: false
    },

    webpack: {
        entry: src + '/js/app.es6',
        output: {
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js']
        },
        module: {
            loaders: [
                {
                    test: /\.es6$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader' // <- without es6 polyfills
                    // loader: 'babel-loader?experimental&optional=selfContained'
                }
            ]
        }
    },

    copy: {
        src: [
            src + '/www/index.html'
        ],
        dest: dest
    },

    stylus: {
        src: [
            src + '/styl/**/!(_)*'
        ],
        dest: dest + '/css/',
        output: 'app.css',
        autoprefixer: {
            browsers: ['last 2 versions']
        },
        minify: false
    },

    watch: {
        js: relativeSrcPath + '/js/**',
        styl: relativeSrcPath + '/styl/**',
        www: relativeSrcPath + '/www/index.html'
    }
};