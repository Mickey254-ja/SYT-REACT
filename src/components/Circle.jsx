import React from 'react'

function Circle(isClicked) {
    console.log(isClicked)
  return (
    <div className="circle" style={{backgroundColor:isClicked ? 'pink':'green'}}>

    </div>
  )
}

export default Circle;