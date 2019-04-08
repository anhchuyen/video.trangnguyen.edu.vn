'use strict'

/**
 * File: videos
 * Created by: tanmv
 * Date: 19/11/2018
 * Time: 17:06
 *
 */

import {Get} from './index'

export const list = async (params) => {
  const list = await Get('/videos.php', {params})
  return list
}
