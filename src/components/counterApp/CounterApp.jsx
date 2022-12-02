import React, { useReducer } from 'react'
import { TYPES } from '../data/types'
import { counterReducer } from '../reducers/counterReducer'

const initialState = 0;

export const CounterApp = () => {

  //Se recomienda poner un nombre al estado y al dispatch que se relacione con el componente
  const [counter, counterDispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h4>Clicks: {counter}</h4>
      
      <button
        onClick={() => counterDispatch({type: TYPES.counter_app.INCREMENT})}
      >
        Increment
      </button>
      
      <button
        onClick={() => counterDispatch({type: TYPES.counter_app.DECREMENT})}
      >
        Decrement
      </button>
      
      <button
        onClick={() => counterDispatch({type: TYPES.counter_app.RESET})}
      >
        Reset
      </button>
    </>
  )
}
