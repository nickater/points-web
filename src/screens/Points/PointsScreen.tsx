import { useState } from "react";
import { PointCards } from "../../components/organisms/PointCards/PointCards";
import { PointsTemplate } from "../../templates/PointsTemplate";

export const PointsScreen = () => {
  const [pointChoice, setPointChoice] = useState(0);

  const PointsChoice = () => {
    return <div>{pointChoice}</div>;
  };

  return (
    <PointsTemplate
      pointsChoice={<PointsChoice />}
      pointCards={<PointCards onCardSelection={setPointChoice} />}
    />
  );
};
