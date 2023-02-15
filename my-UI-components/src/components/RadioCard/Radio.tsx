import { type FC } from "react";

type Props = {
  onChange: () => {};
  isChecked: boolean
};

export type RadioType = typeof Radio

export const Radio: FC<Props> = ({ onChange, isChecked }) => {
  return <input type="checkbox" checked={isChecked} onChange={onChange} />;
};
