import { combineReducers } from 'redux'

import events from './events'
import moreEvents from './moreEvents'
import operationLogs from './operationLogs'

export default combineReducers({
  events,
  moreEvents,
  operationLogs
})
