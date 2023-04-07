import React from 'react'

function Button({setIsClicked,isClicked}) {
  return (
    <button className="button" onClick={()=>setIsClicked(isClicked)}>
      Click me
    </button>
  )
}

export default Button