import axios from 'axios'
import { useEffect } from 'react'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

const useMoreEventsFetcher = dispatch => {
  useEffect(() => {
    console.log("Let's fetch data here.")

    const getEvents = async () => {
      const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
      const data = response.data
      dispatch({ type: 'GET_EVENTS', data })
    }

    getEvents()
  }, [dispatch])
}

export default useMoreEventsFetcher
