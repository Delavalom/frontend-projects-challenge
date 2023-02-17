import { CountdownTimer } from "./components/CountdownTimer";
import { FaqComponent } from "./components/FaqComponent";
import { RadioCard } from "./components/RadioCard";
import { Radio } from "./components/RadioCard/Radio";
import { data } from "./data/data";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      {/* <RadioCard Radio={Radio} />
      <FaqComponent questions={data} /> */}
      <CountdownTimer />
    </main>
  );
}

export default App;
