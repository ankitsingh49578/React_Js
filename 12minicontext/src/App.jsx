// Context Api means a global variable banana hai and all data will go inside that variable

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <UserContextProvider>
      <h1>Learning About useContext Or Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
