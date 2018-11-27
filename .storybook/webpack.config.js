const path = require("path");
const gatsbyConfig = require('../gatsby-config')
const getGatsbyPlugin = (pluginName) => {
    return gatsbyConfig.plugins.find(plugin => plugin.resolve === pluginName)
}

module.exports = (baseConfig, env, defaultConfig) => {
    
    // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
    defaultConfig.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
  
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader")
  
    // use @babel/preset-react for JSX and env (instead of staged presets)
    defaultConfig.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]
  
    // use @babel/plugin-proposal-class-properties for class arrow functions
    defaultConfig.module.rules[0].use[0].options.plugins = [
      require.resolve("@babel/plugin-proposal-class-properties"),
    ]

    // scss modules
    defaultConfig.module.rules.push({
        test: /\.module\.s(a|c)ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            },
            'sass-loader',
        ],
        include: path.resolve(__dirname, '../src')
    })

    // scss
    defaultConfig.module.rules.push({
        test: /\.s(a|c)ss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
        exclude: /\.module\.s(a|c)ss$/,
        include: path.resolve(__dirname, '../src')
    })

    // Add svgr as the first item to override default svg file loader
    defaultConfig.module.rules.unshift({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: getGatsbyPlugin('gatsby-plugin-svgr').options
            },
            {
                loader: 'url-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    })
    
    return defaultConfig
  }