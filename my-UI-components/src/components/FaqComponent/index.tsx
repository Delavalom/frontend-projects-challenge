import { type FC } from "react";
import { Question } from "./Question";

export type Question = {
  question: string;
  answer: string;
  open: boolean;
};

type Props = {
  questions: Question[];
};

export const FaqComponent: FC<Props> = ({ questions }) => {
  return (
    <section className="h-80 w-full max-w-md">
      {questions.map((question, idx) => {
        if (idx === 0) {
          return (
            <Question
              question={question.question}
              answer={question.answer}
              open={true}
            />
          )
        }
        return (
          <Question
            question={question.question}
            answer={question.answer}
            open={question.open}
          />
        )
      })}
    </section>
  );
};
