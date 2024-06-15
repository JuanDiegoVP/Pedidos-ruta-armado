import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    <>
      <h1>Distribuciones</h1>
        <button onClick={handleClick}>
          count is {count}
        </button>
    </>
  )
}

export default App
