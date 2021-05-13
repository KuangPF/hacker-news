import { fetchIdsByType } from 'api'
import * as types from './types'

export const fetchIdsByTypeAction = newsType => (dispatch, getState) => {
  console.log(getState())
  return fetchIdsByType(newsType).then(ids =>
    dispatch({
      type: types.FETCH_LIST_DATA_SUCCESS,
      payload: { ids, newsType }
    })
  )
}
