import { useContext, useRef, useState } from "react";
import { Card } from "./components/Card";
import { GameBoard } from "./components/GameBoard";
import { getRandomNumbers } from "./utils/utils";
import { CardContext, SelectionContext } from "./context/SelectionContext";
import { useImmer } from "use-immer";

type Answer = { 1: number; 2: number };

function App() {
  const cards = useRef<number[] | null>(null);
  const [openCards, setOpenCards] = useImmer<number[]>([]);
  const [clearedCards, setClearedCards] = useState<Set<number>>(new Set());
  const [answer, setAnswer] = useImmer<Answer>({
    1: 0,
    2: 0,
  });
  const [status, setStatus] = useState<"loading" | "playing" | "Game Over">(
    "Game Over"
  );
  const { setIsSelected } = useContext(SelectionContext);

  if (clearedCards.size === 18) {
    setStatus("Game Over")
  }

  function reset() {
    setAnswer({ 1: 0, 2: 0 });
    setIsSelected(false);
    setStatus("playing");
    setOpenCards([]);
  }

  function startOver() {
    cards.current = getRandomNumbers(18);
    setStatus("playing");
    setClearedCards(new Set());
  }

  function handleClick(idx: number) {
    if (!cards.current) return;

    setOpenCards((draft) => {
      draft.push(idx);
    });

    const card = cards.current[idx];

    if (!answer[1]) {
      setAnswer((draft) => {
        draft[1] = card;
      });
    } else if (!answer[2]) {
      setAnswer((draft) => {
        draft[2] = card;
      });

      setStatus("loading");

      if (answer[1] === card) {
        const newSet = new Set(clearedCards);
        newSet.add(card);
        setClearedCards(newSet);
        setIsSelected(true);

        setTimeout(() => {
          reset();
        }, 3000);
      } else {
        setIsSelected(true);

        setTimeout(() => {
          reset();
        }, 3000);
      }
    }
  }

  const checkIsSelected = (idx: number) => {
    return openCards.includes(idx);
  };

  const checkIsCleared = (card: number) => {
    return clearedCards.has(card);
  };

  return (
    <main className="w-full h-full flex flex-col items-center gap-8 justify-evenly">
      <h1>Memory Game</h1>
      <p className="w-full text-center">
        {status === "loading" ? `Please wait 3 seconds is ${status}` : status}
      </p>
      {status === "Game Over" ? (
        <button onClick={startOver}>Play Again</button>
      ) : (
        <GameBoard>
          {cards.current?.map((card, idx) => (
            <Card
              key={idx}
              value={card}
              isSelectedCard={checkIsSelected(idx)}
              isCleared={checkIsCleared(card)}
              onClick={() => handleClick(idx)}
            />
          ))}
        </GameBoard>
      )}
    </main>
  );
}

export default App;
