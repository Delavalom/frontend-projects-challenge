import { ReactNode, type FC } from "react";

type Props = {
    children: ReactNode
};

export const GameBoard: FC<Props> = ({children}) => {
  return (
    <section
      id="game-board"
      className="items-stretch justify-center border border-slate-800 h-fit w-fit gameboard gap-2 p-2"
    >
      {children}
    </section>
  );
};
