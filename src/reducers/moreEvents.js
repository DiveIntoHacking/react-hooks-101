const moreEvents = (state = [], action) => {
  switch(action.type) {
    case 'GET_EVENTS':
      return action.data
    default:
      return state
  }
}

export default moreEvents
