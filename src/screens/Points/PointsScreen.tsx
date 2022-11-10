import { useState } from "react";
import { PointChoice } from "../../components/molecules/PointChoice/PointChoice";
import { PointCards } from "../../components/organisms/PointCards/PointCards";
import { PointsTemplate } from "../../templates/PointsTemplate";

export const PointsScreen = () => {
  const [pointChoice, setPointChoice] = useState(0);

  return (
    <PointsTemplate
      pointsChoice={<PointChoice value={pointChoice} />}
      pointCards={
        <PointCards
          selectedCardValue={pointChoice}
          onCardSelection={setPointChoice}
        />
      }
    />
  );
};
