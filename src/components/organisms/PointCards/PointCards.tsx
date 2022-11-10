import { FunctionComponent } from "react";
import { PointCard } from "../../molecules/PointCard/PointCard";

type PointCardsProps = {
  onCardSelection: (value: number) => void;
  selectedCardValue: number;
};
export const PointCards: FunctionComponent<PointCardsProps> = ({
  onCardSelection,
  selectedCardValue,
}) => {
  const options = [0, 1, 3, 5, 8, 13];

  return (
    <div>
      <ul className="flex flex-wrap gap-4 justify-center">
        {options.map((option, index) => (
          <div key={index} className="mx-2 rounded">
            <PointCard
              isSelected={selectedCardValue === option}
              onSelection={onCardSelection}
              value={option}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
