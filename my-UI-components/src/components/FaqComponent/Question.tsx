import { type FC } from "react";

type Props = {
  question: string;
  answer: string;
  open: boolean;
};

export const Question: FC<Props> = ({ question, answer, open }) => {
  return (
    <details open={open} className="px-8 py-2 border-2 border-slate-900">
      <summary className="font-bold">{question}</summary>
      <p className="my-5 text-slate-500 font-semibold">{answer}</p>
    </details>
  );
};
