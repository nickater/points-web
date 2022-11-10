import { useState } from "react";
import { PointChoice } from "../../components/molecules/PointChoice/PointChoice";
import { PointCards } from "../../components/organisms/PointCards/PointCards";
import { PointsTemplate } from "../../templates/PointsTemplate";

export const PointsScreen = () => {
  const options = [0, 1, 3, 5, 8, 13, 18];
  const [pointChoice, setPointChoice] = useState(options[0]);

  return (
    <PointsTemplate
      pointsChoice={<PointChoice value={pointChoice} />}
      pointCards={
        <PointCards
          options={options}
          selectedCardValue={pointChoice}
          onCardSelection={setPointChoice}
        />
      }
    />
  );
};
