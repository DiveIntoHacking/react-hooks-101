import axios from 'axios'
import React, { useContext, useEffect } from 'react'

import MoreEvent from './MoreEvent'
import AppContext from '../contexts/AppContext'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

const Events = () => {
  const { dispatch, state } = useContext(AppContext)

  useEffect(() => {
    console.log("Let's fetch data here.")

    const getEvents = async () => {
      const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
      const data = response.data
      dispatch({ type: 'GET_EVENTS', data })
    }

    getEvents()
  }, [dispatch])

  return (
    <>
      <h4>もっとイベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.moreEvents.map((event, index) => (<MoreEvent key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events
