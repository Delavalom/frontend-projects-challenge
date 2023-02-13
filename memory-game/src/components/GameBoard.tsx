import { ReactNode, type FC } from "react";

type Props = {
    children: ReactNode
};

export const GameBoard: FC<Props> = ({children}) => {
  return (
    <section
      id="game-board"
      className="border border-slate-800 h-fit w-fit grid grid-cols-6 grid-rows-6 gap-2 p-2"
    >
      {children}
    </section>
  );
};
