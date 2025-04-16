import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>PS Tuitions</h1>
      <h2>Home</h2>
      <h2>Classes</h2>
      <h2>Contact Us</h2>
      <h2>Login</h2>
    </div>
  )
}

export default App
