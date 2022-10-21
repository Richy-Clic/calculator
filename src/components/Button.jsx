import React from 'react'

function ButtonCalcu(props) {
  return (
    <div className={`btn-calculator column-${props.cols}`} onClick={props.onClick}>
        {props.tag}
    </div>
  )   
}

export default ButtonCalcu