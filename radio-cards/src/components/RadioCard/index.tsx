import { ReactElement, type FC } from "react";

type Props = {
  Radio: ReactElement
  value?: string
  onClick?: () => void
  direction?: "row" | "column"
  size?: number
  color?: string
  labelPlacement?: "top" | "start" | "bottom" | "end"
  onError?: string
};

export const RadioCard: FC<Props> = ({Radio}) => {
  return (

    <label>
      <Radio />
    </label>
  )
};
