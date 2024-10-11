import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Ankit Singh",
    age: 21
  }

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>
      Tailwind Test!
    </h1>
    <Card username={myObj.username} btnText='Click me'></Card>
    <Card username='Hitesh' ></Card>
    </>
  )
}

export default App
