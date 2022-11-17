import { FunctionComponent } from "react";
import { PointCard } from "../../molecules/PointCard/PointCard";

type PointCardsProps = {
  onCardSelection: (value: string) => void;
  selectedCardValue: string;
  options: string[];
};
export const PointCards: FunctionComponent<PointCardsProps> = ({
  onCardSelection,
  selectedCardValue,
  options,
}) => {
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
