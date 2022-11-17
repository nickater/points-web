import { FunctionComponent } from "react";
import { Pressable } from "../../atoms/Pressable/Pressable";

type PointCardProps = {
  value: string;
  onSelection: (value: string) => void;
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
        className={`border border-slate-600 p-4 text-6xl rounded-md ${
          isSelected && "bg-slate-400"
        }`}
      >
        {value}
      </div>
    </Pressable>
  );
};
