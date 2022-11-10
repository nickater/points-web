import { FunctionComponent } from "react";
import { Pressable } from "../../atoms/Pressable/Pressable";

type PointCardProps = {
  value: number;
  onSelection: (value: number) => void;
};
export const PointCard: FunctionComponent<PointCardProps> = ({
  value,
  onSelection,
}) => {
  return (
    <Pressable onClick={() => onSelection(value)}>
      <div className="border border-slate-600 p-4 text-8xl rounded-md">
        {value}
      </div>
    </Pressable>
  );
};
