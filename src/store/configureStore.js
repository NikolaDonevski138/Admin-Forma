import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/users' //../reducers/users
import filtersReducer from '../reducers/filters' //../reducers/filters

export default () => {
  const store = createStore(
    combineReducers({
      users: usersReducer, //users:usersReducer
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
