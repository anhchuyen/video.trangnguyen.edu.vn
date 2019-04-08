'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://admin.trangnguyen.edu.vn/api"',
  YOUTUBE_KEY: '"AIzaSyDyqtMpYJNTlU1JO2YlSKBaaaV4aBk0kxM"'
})
