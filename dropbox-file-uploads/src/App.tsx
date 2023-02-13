import { useState } from 'react'
import { Layout } from './components/Layout/Layout'
import { MainContent } from './components/MainContent/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <MainContent />
    </Layout>
  )
}

export default App
