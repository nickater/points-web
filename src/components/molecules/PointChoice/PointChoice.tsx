import { FunctionComponent } from "react";

type PointChoiceProps = {
  value: number;
};
export const PointChoice: FunctionComponent<PointChoiceProps> = ({ value }) => {
  return <div className="text-3xl">{value}</div>;
};
