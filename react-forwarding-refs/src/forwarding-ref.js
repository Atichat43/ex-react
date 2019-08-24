import React, { forwardRef } from 'react'

const WrapperButton = forwardRef((props, ref) => (
  <div className="wrapper-button">
    <button 
      ref={ref} 
      onClick={() => console.log(props, ref)} 
      disabled={!props.isSubmit}
      >
        {props.children}
    </button>
  </div>
))

export default WrapperButton