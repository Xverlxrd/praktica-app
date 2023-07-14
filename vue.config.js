const { defineConfig } = require('@vue/cli-service')
//const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  /*chainWebpack: config => {
    config.resolve.alias.set('img', path.resolve(__dirname, 'путь_к_папке_с_изображениями'));
  }*/
})
