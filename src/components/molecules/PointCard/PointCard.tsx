import { FunctionComponent } from "react";
import { Pressable } from "../../atoms/Pressable/Pressable";

type PointCardProps = {
  value: number;
  onSelection: (value: number) => void;
  isSelected: boolean;
};
export const PointCard: FunctionComponent<PointCardProps> = ({
  value,
  onSelection,
  isSelected,
}) => {
  const onClick = () => onSelection(value);

  return (
    <Pressable onClick={onClick}>
      <div
        className={`border border-slate-600 p-4 text-8xl rounded-md ${
          isSelected && "bg-slate-400"
        }`}
      >
        {value}
      </div>
    </Pressable>
  );
};
