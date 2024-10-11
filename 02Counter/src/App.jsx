import { useState } from 'react'    // will be used to change the data in the UI
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;
  const addValue = () => {
    // counter++;
    if(counter < 20){
      setCounter(++counter);      
      // setCounter(++counter);
      // setCounter(++counter);
      // setCounter(++counter);
      console.log("value added :", counter);    // value adding
    }

  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(--counter);
      console.log("value removed :", counter);    // value removed
    }
  }

  return (
    <>
      {/* Counter Upto 20 */}
      <h1>COUNTER</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value </button>
      {/* <br/> */}
      <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
