import { useState } from 'react'
import './App.css'
import Lottery from './components/Lottery'
import { sum } from './components/helper'

function App() {
  let winCondition = (arr) =>{      // using this method we can pass function as a prop to the lower components
    // return sum(arr) === 15;    // eg. one condition for winning 
    return (arr.every((num) => num === arr[0]));      // let suppose another condition similary we can make more condition like that 

  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition}></Lottery>
    </>
  )
}

export default App
