import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={ () => {
        setCount( ()=>{
          return count + 1
        })
        console.log(count)
      }}>Increase Count</button>
      <h2>You clicked {count} times</h2>
    </>
  )
}

export default App
