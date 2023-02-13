import { useState } from 'react'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full h-screen'>
      <Navbar />
    </main>
  )
}

export default App
