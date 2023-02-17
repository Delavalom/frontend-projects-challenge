import { ChangeEvent, type FC } from "react";

type Props = {
  value: number;
  name: "hours" | "minutes" | "seconds";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const Input: FC<Props> = ({
  value = 0,
  name,
  onChange,
  disabled = false,
}) => {
  const dots = name !== "seconds" && ":";
  return (
    <>
      <input
        disabled={disabled}
        min={0}
        type="number"
        max={name === "hours" ? 23 : 59}
        name={name}
        value={value}
        onChange={onChange}
      />
      {dots}
    </>
  );
};
