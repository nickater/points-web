import { FunctionComponent } from "react";
import { PointCard } from "../../molecules/PointCard/PointCard";

type PointCardsProps = {
  onCardSelection: (value: number) => void;
};
export const PointCards: FunctionComponent<PointCardsProps> = ({
  onCardSelection,
}) => {
  const options = [0, 1, 3, 5, 8, 13];

  return (
    <div>
      <ul className="flex">
        {options.map((option, index) => (
          <div key={index} className="mx-2">
            <PointCard onSelection={onCardSelection} value={option} />
          </div>
        ))}
      </ul>
    </div>
  );
};
