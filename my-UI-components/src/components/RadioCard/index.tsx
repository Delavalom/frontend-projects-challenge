import { type FC } from "react";
import { RadioType } from "./Radio";

type Props = {
  Radio: RadioType
  value?: string
  onClick?: () => void
  direction?: "row" | "column"
  size?: number
  color?: string
  labelPlacement?: "top" | "start" | "bottom" | "end"
  onError?: string
};

export const RadioCard: FC<Props> = ({Radio, value, onClick}) => {
  const handler = onClick ? onClick : () => null
  return (
    <label>
      {value}
      <Radio onChange={() => handler} isChecked />
    </label>
  )
};
