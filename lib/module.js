const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['nuxt-fingerprint2'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-fingerprint2.js',
    ssr:false,
    options
  })
}

module.exports.meta = require('../package.json')
