import { FunctionComponent } from "react";

type HomeTemplateProps = {
  mainNode: JSX.Element;
};
const HomeTemplate: FunctionComponent<HomeTemplateProps> = ({ mainNode }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div>{mainNode}</div>
    </div>
  );
};

export default HomeTemplate;
