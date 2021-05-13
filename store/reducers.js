import { combineReducers } from 'redux'
import { cloneDeep } from 'lodash'
import * as types from './types'

const fetchIdsByTypeReducer = (state = {}, { type, payload = {} }) => {
  const { ids, newsType } = payload
  switch (type) {
    case types.SET_LIST:
      return {
        ...state,
        [newsType]: ids
      }
    default:
      return state
  }
}

const itemsReducer = (state = {}, { type, payload = {} }) => {
  const { items = [] } = payload
  const _state = state
  switch (type) {
    case types.SET_ITEMS:
      items.forEach(item => {
        if (item) {
          _state[item.id] = item
        }
      })
      console.log(_state)
      return cloneDeep(_state)
    default:
      return state
  }
}

const reducers = {
  items: itemsReducer,
  ids: fetchIdsByTypeReducer
}

export default combineReducers(reducers)
