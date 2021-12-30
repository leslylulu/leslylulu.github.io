const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#345B63',
              '@link-color': '#345B63' // 链接色
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};