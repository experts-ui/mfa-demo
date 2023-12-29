const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shellApp",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  devServer: {
    port: 6004,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        /* library: { type: "module" }, */
        // For remotes (please adjust)
        // name: "shellApp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        remotes: {
            "topNavHeader": "https://saswatiaccenture.github.io/Angular-Footer/topNavHeader.js",
            "sideNavBarRemote": "https://saswatiaccenture.github.io/Angular-SideNav/sideNavBarRemote.js",
            "itemDetailsRemote": "https://saswatiaccenture.github.io/AngularItemDetails/itemDetailsRemote.js",
            "topNavigation":"topNavigation@ https://saswatiaccenture.github.io/ReactTopNavMFE/remoteEntry.js"
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
