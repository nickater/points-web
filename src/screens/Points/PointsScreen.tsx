import { useState } from "react";
import { useParams } from "react-router-dom";
import { PointChoice } from "../../components/molecules/PointChoice/PointChoice";
import { PointCards } from "../../components/organisms/PointCards/PointCards";
import { useGlobalData } from "../../hooks/useGlobalData";
import { PointsTemplate } from "../../templates/PointsTemplate";

export const PointsScreen = () => {
  const options = [0, 1, 2, 3, 5, 8, 13, 21].map(String);
  const [pointChoice, setPointChoice] = useState(options[0]);
  const { roomId } = useGlobalData();
  const { id } = useParams();

  const onCardClick = (value: string) => {
    setPointChoice(value);
    const request = { roomId, value, id };
    console.log(request);
  };

  return (
    <PointsTemplate
      pointsChoice={<PointChoice value={pointChoice} />}
      pointCards={
        <PointCards
          options={options}
          selectedCardValue={pointChoice}
          onCardSelection={onCardClick}
        />
      }
    />
  );
};
