'use strict'

/**
 * File: index
 * Created by: tanmv
 * Date: 19/11/2018
 * Time: 17:01
 *
 */

import axios from 'axios'

const API_URL = process.env.API_URL

axios.create({
  baseURL: API_URL || '/api',
  method: 'get',
  timeout: 10000,
  responseEncoding: 'utf8',
  headers: {'client-version': '1.0.0'}
})

axios.defaults.headers.post['Content-Type'] = 'application/json'

const getUrl = (url) => {
  if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
    return url
  }
  return url.indexOf('/') === 0 ? API_URL + url : API_URL + '/' + url
}

export const Get = async (url, params = {}) => {
  const results = await axios.get(getUrl(url), {params})
  return results.data
}

export const Post = async (url, params = {}) => {
  const results = await axios.post(getUrl(url), params)
  return results.data
}

export const Put = async (url, params = {}) => {
  const results = await axios.put(getUrl(url), params)
  return results.data
}

export const Delete = async (url) => {
  const results = await axios.delete(getUrl(url))
  return results.data
}
