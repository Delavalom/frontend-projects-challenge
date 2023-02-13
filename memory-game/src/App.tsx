import { useContext, useRef, useState } from "react";
import { Card } from "./components/Card";
import { GameBoard } from "./components/GameBoard";
import { getRandomNumbers } from "./utils/utils";
import { CardContext, SelectionContext } from "./context/SelectionContext";

type Answer = { 1: number; 2: number }

function App() {
  const cards = useRef<number[] | null>(null);
  const [clearedCards, setClearedCards] = useState<Set<number>>(new Set());
  const [answer, setAnswer] = useState<Answer>({
    1: 0,
    2: 0,
  });
  const [status, setStatus] = useState<"loading" | "playing" | "Game Over">(
    "Game Over"
  );
  const { setIsSelected } = useContext(SelectionContext);

  function reset() {
    setAnswer({ 1: 0, 2: 0 });
    setIsSelected(false);
    setStatus("playing");
  }


  function handleClick(idx: number) {
    if (!cards.current) return


    let copy = { ...answer };
    const card = cards.current[idx]

    if (!answer[1]) {
      copy[1] = card;
      setAnswer(copy);
    } else if (!answer[2]) {
      copy[2] = card;

      setStatus("loading");

      if (copy[1] === copy[2]) {
        const set = new Set<number>([idx]);
        setClearedCards(set);

        setIsSelected(true);

        setTimeout(() => {
          reset()
        }, 3000);
      } else {
        setIsSelected(true);
        setTimeout(() => {
          reset()
        }, 3000);
      }
    }
  }


  const checkIsSelected = (card: number) => {
    return answer !== 1
  };

  const checkIsCleared = (index: number) => {
    return clearedCards.has(index);
  };

  return (
    <main className="w-full h-full flex flex-col items-center gap-8 justify-evenly">
      <h1>Memory Game</h1>
      <p className="w-full text-center">
        {status === "loading" ? `Please wait 3 seconds is ${status}` : status}
      </p>
      {status === "Game Over" ? (
        <button
          onClick={() => {
            cards.current = getRandomNumbers(18)
            setStatus("playing");
            setClearedCards(new Set());
          }}
        >
          Play Again
        </button>
      ) : (
        <GameBoard>
          {cards.current?.map((card, idx) => (
            <CardContext.Provider value={card}>
              <Card
                key={idx}
                isCleared={checkIsCleared(idx)}
                onClick={() => handleClick(idx)}
              />
            </CardContext.Provider>
          ))}
        </GameBoard>
      )}
    </main>
  );
}

export default App;
