import { useState } from 'react'

import {
    Contact,
    Portfolio,
    LandingImage,
    CustomCursor
} from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CustomCursor/>
      <LandingImage/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
