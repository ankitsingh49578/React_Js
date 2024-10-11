import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setCColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setCColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "red"}}
          >Red</button>

          <button 
          onClick={() => setCColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "green"}}
          >Green</button>

          <button 
          onClick={() => setCColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button 
          onClick={() => setCColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button 
          onClick={() => setCColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button 
          onClick={() => setCColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "pink"}}
          >Pink</button>

          <button 
          onClick={() => setCColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor: "black"}}
          >Black</button>

          <button 
          onClick={() => setCColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-2 border-slate-400' 
          style={{backgroundColor: "white"}}
          >white</button>

          <button 
          onClick={() => setCColor("cyan")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-slate-200' 
          style={{backgroundColor: "cyan"}}
          >Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
