import React from 'react'
import { useSelector } from 'react-redux'

function Display() {

  const calculator = useSelector(state => state.calculator)

  return (
    <div className='display'>
      
        <div className="valor-anterior">{calculator.historyValue}</div>
        <div className="valor-actual">{calculator.currentValue}</div>
        
    </div>
  )
}

export default Display

