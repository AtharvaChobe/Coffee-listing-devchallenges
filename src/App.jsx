import React from 'react'
import GetData from './components/GetData'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/bg-cafe.jpg')] bg-contain bg-top bg-no-repeat">
      <GetData />
    </div>
  )
}

export default App