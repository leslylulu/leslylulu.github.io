const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#625173',
              '@link-color': '#625173' // 链接色
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};