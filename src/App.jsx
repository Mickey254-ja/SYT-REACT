import './App.css'
import Button from './components/Button'
import Circle from './components/Circle'
import { useState } from 'react'

function App() {
 // A function that returns an array
 const [isClicked,setIsClicked] = useState(true)
  return (
    <div className="App">
     <Circle isClicked={isClicked} />
     <Button setIsClicked={setIsClicked} isClicked={isClicked} />
    </div>
  )
}

export default App
