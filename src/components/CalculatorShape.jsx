
import React from 'react'
import ButtonCalcu from '../components/Button'
import Display from '../components/Display'

const result = () => {
    alert()
}

// result()

const CalculatorShape = () => {

  return (
    <div className='shapeCalculator'>
      <Display />
      <ButtonCalcu tag="M" cols="1"/>
      <ButtonCalcu tag="C" cols="1"/>
      <ButtonCalcu tag="CC" cols="1"/>
      <ButtonCalcu tag="/" cols="1"/>

      <ButtonCalcu tag="7" cols="1"/>
      <ButtonCalcu tag="8" cols="1"/>
      <ButtonCalcu tag="9" cols="1"/>
      <ButtonCalcu tag="x" cols="1"/>

      <ButtonCalcu tag="4" cols="1"/>
      <ButtonCalcu tag="5" cols="1"/>
      <ButtonCalcu tag="6" cols="1"/>
      <ButtonCalcu tag="-" cols="1"/>
      <ButtonCalcu tag="1" cols="1"/>
      <ButtonCalcu tag="2" cols="1"/>
      <ButtonCalcu tag="3" cols="1"/>
      <ButtonCalcu tag="+" cols="1"/>
  
      <ButtonCalcu tag="0" cols="2"/>
      <ButtonCalcu tag="." cols="1"/>
      <ButtonCalcu tag="=" cols="1" onClick={result}/>
        
    </div>
  )
}

export default CalculatorShape