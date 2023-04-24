import React from 'react'
import Body from './components/Body'
import { CalContextProvider } from './components/Context'

function App() {
  return (
    <div>
      <CalContextProvider>
         <Body/>
      </CalContextProvider>
     
    </div>
  )
}

export default App
