import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  const nextState = { ...state }
  nextState.price = state.price + 1

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState(nextState)}>+1</button>
      <button onClick={() => setState(prevState => ({ ...prevState, price: prevState.price + 1 }))}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
