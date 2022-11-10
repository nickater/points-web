import { FunctionComponent } from "react";

type PointsTemplateProps = {
  pointsChoice: JSX.Element;
  pointCards: JSX.Element;
};
export const PointsTemplate: FunctionComponent<PointsTemplateProps> = ({
  pointsChoice,
  pointCards,
}) => {
  return (
    <div className="flex justify-around">
      <div>
        <div className="text-3xl">{pointsChoice}</div>
        <div>{pointCards}</div>
      </div>
    </div>
  );
};
