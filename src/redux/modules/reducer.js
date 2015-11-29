import { combineReducers } from 'redux'
// import { routerStateReducer } from 'redux-router'
// import chat from './chat'
import task from './task'
import resource from './resource'
// import company from './company'
// import project from './project'
import user from './user'
import form from './form'

import requestReducer from './request/reducer'
import storageReducer from './storage/reducer'
import viewsReducer from './views/reducer'

const rootReducer = combineReducers({
  // router: routerStateReducer,
  user, task, resource,
  form,
  request: requestReducer,
  storage: storageReducer,
  views: viewsReducer
})

export default rootReducer
