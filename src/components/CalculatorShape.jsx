import React from 'react';
import Display from '../components/Display';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, typing } from '../store/caculator/reducer'



const CalculatorShape = () => {

  const operator = useSelector(state => state.calculator.operator)

  const result = () => {
    
  //   switch (operator) {
  //     case '+':
        
  //       break;
    
  //     default:
  //       break;
  //   }
  console.log();
  }

  const dispatch = useDispatch()

  return (
    <div className='shapeCalculator'>
      <Display />
      <div className="btn-calculator" onClick={()=>dispatch(typing('CE'))}> CE </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('C'))}> C </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('M'))}> M </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('/'))}> / </div>

      <div className="btn-calculator" onClick={()=>dispatch(typing(7))}> 7 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(8))}> 8 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(9))}> 9 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('x'))}> X </div>

      <div className="btn-calculator" onClick={()=>dispatch(typing(4))}> 4 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(5))}> 5 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(6))}> 6 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('-'))}> - </div>

      <div className="btn-calculator" onClick={()=>dispatch(typing(1))}> 1 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(2))}> 2 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing(3))}> 3 </div>
      <div className="btn-calculator" onClick={()=>dispatch(add('+'))}> + </div>

      <div className="btn-calculator column-2" onClick={()=>dispatch(typing(0))}> 0 </div>
      <div className="btn-calculator" onClick={()=>dispatch(typing('.'))}> . </div>
      <div className="btn-calculator" onClick={()=>dispatch(result('='))}> = </div>
    </div>
  )
}

export default CalculatorShape