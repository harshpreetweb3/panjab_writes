import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'
import Connect from './Connect'
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {
        login ? (
          <div className='main'>
            <Header />
            <Notes />
          </div>
        ) : (
          <Connect login={login} setLogin={setLogin} />
        )
      }
    </>
  )
}

export default App
