import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import pokemon from './pokemon'
import Pokedex from './Pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Pokedex props={pokemon}/>
    </div>
  )
}

export default App
