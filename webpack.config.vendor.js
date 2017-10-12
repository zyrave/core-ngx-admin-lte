const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const treeShakableModules = [
    '@angular/animations',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    'zone.js',
];
const nonTreeShakableModules = [
    'bootstrap',
    'es6-promise',
    'es6-shim',
    'event-source-polyfill',
    'jquery',
    'ngx-bootstrap',
    /** Styles **/
    'bootstrap/dist/css/bootstrap.css',
    'font-awesome/css/font-awesome.css',
    'ionicons/css/ionicons.min.css',
    'admin-lte/dist/css/AdminLTE.min.css',
    'admin-lte/dist/css/skins/_all-skins.css',
    'icheck/skins/flat/blue.css',
    'morris.js/morris.css',
    'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
    // 'bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.css',
    './ClientApp/assets/css/styles.css',
    /** Scripts **/
    'jquery/dist/jquery.js',
    'jqueryui/jquery-ui.js',
    'bootstrap/dist/js/bootstrap.js',
    'raphael/raphael.js',
    'morris.js/morris.js',
    'jquery-sparkline/jquery.sparkline.js',
    'jquery-knob/dist/jquery.knob.min.js',
    'moment/moment.js',
    'daterangepicker/daterangepicker.js',
    'bootstrap-datepicker/js/bootstrap-datepicker.js',
    'jquery-slimscroll/jquery.slimscroll.js',
    // 'bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.js',
    'icheck/icheck.js',
    'admin-lte/dist/js/adminlte.min.js',
    './ClientApp/assets/js/scripts.js'
];
const allModules = treeShakableModules.concat(nonTreeShakableModules);

module.exports = (env) => {
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const isDevBuild = !(env && env.prod);
    const sharedConfig = {
        stats: {
            modules: false
        },
        resolve: {
            extensions: ['.js']
        },
        module: {
            rules: [{
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?|$)/,
                use: 'url-loader?limit=100000'
            }]
        },
        output: {
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, './ClientApp')), // Workaround for https://github.com/angular/angular/issues/14898
            new webpack.IgnorePlugin(/^vertx$/) // Workaround for https://github.com/stefanpenner/es6-promise/issues/100
        ]
    };

    const clientBundleConfig = merge(sharedConfig, {
        entry: {
            // To keep development builds fast, include all vendor dependencies in the vendor bundle.
            // But for production builds, leave the tree-shakable ones out so the AOT compiler can produce a smaller bundle.
            vendor: isDevBuild ? allModules : nonTreeShakableModules
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist')
        },
        module: {
            rules: [{
                test: /\.css(\?|$)/,
                use: extractCSS.extract({
                    use: isDevBuild ? 'css-loader' : 'css-loader?minimize'
                })
            }]
        },
        plugins: [
            extractCSS,
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
        ])
    });

    const serverBundleConfig = merge(sharedConfig, {
        target: 'node',
        resolve: {
            mainFields: ['main']
        },
        entry: {
            vendor: allModules.concat(['aspnet-prerendering'])
        },
        output: {
            path: path.join(__dirname, 'ClientApp', 'dist'),
            libraryTarget: 'commonjs2',
        },
        module: {
            rules: [{
                test: /\.css(\?|$)/,
                use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize']
            }]
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname, 'ClientApp', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            })
        ]
    });

    return [clientBundleConfig, serverBundleConfig];
}
