import { type FC, useContext } from "react";
import { CardContext } from "../context/SelectionContext";

type Props = {
  onClick: () => void;
  isCleared: boolean;
  isSelected: boolean
};

export const Card: FC<Props> = ({ onClick, isCleared, isSelected }) => {
  const card = useContext(CardContext);

  return (
    <button
      disabled={isSelected}
      id="card"
      className={`flex items-center justify-center text-lg font-semibold w-16 h-16 ${
        isCleared ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      {card}
    </button>
  );
};
