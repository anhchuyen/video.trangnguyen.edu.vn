'use strict'

/**
 * File: youtube
 * Created by: tanmv
 * Date: 19/11/2018
 * Time: 23:15
 *
 */

import {Get} from './index'
const YOUTUBE_KEY = process.env.YOUTUBE_KEY

export const getId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\\&\\?]*).*/
  const match = url.match(regExp)
  if (match && match[7].length === 11) {
    return match[7]
  }
  return null
}

export const getListFromUrl = async (listUrl) => {
  const listId = listUrl.reduce((arr, url) => {
    arr.push(getId(url))
    return arr
  }, [])

  const results = await getListFromId(listId)
  return results
}

export const getListFromId = async (listId) => {
  const results = await Get(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_KEY}&fields=items(id,contentDetails(duration),snippet(title,channelId,thumbnails(medium),description,tags),statistics)&part=snippet,contentDetails,statistics&id=${listId.join(',')}`)
  return results
}
