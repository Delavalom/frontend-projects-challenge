import { useContext, type FC } from "react";
import { SelectionContext } from "../context/SelectionContext";

type Props = {
  value: number;
  onClick: () => void;
  isCleared: boolean;
  isSelectedCard: boolean;
};

export const Card: FC<Props> = ({
  value,
  onClick,
  isCleared,
  isSelectedCard,
}) => {
  const { isSelected } = useContext(SelectionContext);

  return (
    <button
      disabled={isSelected || isSelectedCard}
      id="card"
      className={`flex items-center justify-center text-lg font-semibold w-16 h-16 ${
        isCleared ? "no-displayed" : ""
      }`}
      onClick={onClick}
    >
      {isSelectedCard && value}
    </button>
  );
};
