module.exports = {
    configureWebpack: {
      devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: 'https://blind-helper.herokuapp.com/'
      }
    }
  }