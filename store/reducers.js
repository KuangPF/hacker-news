import { combineReducers } from 'redux'
import * as types from './types'

const fetchIdsByTypeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_LIST_DATA_SUCCESS:
      return payload.ids
    default:
      return state
  }
}

const reducers = {
  idsByType: fetchIdsByTypeReducer
}

export default combineReducers(reducers)
