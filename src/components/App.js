import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import MoreEvents from './MoreEvents'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    moreEvents: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
        <MoreEvents />
      </div>
    </AppContext.Provider>
  )
}

export default App
