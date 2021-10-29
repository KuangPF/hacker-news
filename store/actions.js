import { fetchIdsByType, fetchItems, fetchUser } from 'api'
import * as types from './types'

const itemsPerPage = 20

export const fetchItemsData = (newsType, page) => (dispatch, getState) => {
  const { ids, items } = getState()
  const start = (page - 1) * itemsPerPage
  const end = page * itemsPerPage
  let currentIds = ids[newsType].slice(start, end)
  // 做一定的缓存
  const now = Date.now()
  currentIds = currentIds.filter(id => {
    const item = items[id]
    if (!item) {
      return true
    }
    if (now - item.__lastUpdated > 1000 * 60 * 3) {
      return true
    }
    return false
  })

  if (currentIds.length) {
    return fetchItems(currentIds).then(_items => {
      return dispatch({
        type: types.SET_ITEMS,
        payload: { items: _items }
      })
    })
  }
  return Promise.resolve()
}

export const fetchListData = (newsType, page) => dispatch => {
  dispatch({
    type: types.SET_ACTIVE_TYPE,
    payload: { newsType }
  })
  dispatch({
    type: types.SET_API_LOADING,
    payload: true
  })
  return fetchIdsByType(newsType)
    .then(ids =>
      dispatch({
        type: types.SET_LIST,
        payload: { ids, newsType }
      })
    )
    .then(() => {
      dispatch(fetchItemsData(newsType, page))
    })
    .then(() => {
      dispatch({
        type: types.SET_API_LOADING,
        payload: false
      })
    })
}

// get user info
export const fetchUserData = id => dispatch => {
  return fetchUser(id).then(user =>
    dispatch({
      type: types.SET_USER,
      payload: { user, id }
    })
  )
}
