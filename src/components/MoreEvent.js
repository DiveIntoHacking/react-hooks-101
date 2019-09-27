import React from 'react'

const Event = ({ event }) => {
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td></td>
    </tr>
  )
}

export default Event
