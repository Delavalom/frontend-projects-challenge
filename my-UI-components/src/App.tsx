import { RadioCard } from "./components/RadioCard"
import { Radio } from "./components/RadioCard/Radio"


function App() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>Radio Cards</h1>
      <RadioCard Radio={Radio} />
    </main>
  )
}

export default App
