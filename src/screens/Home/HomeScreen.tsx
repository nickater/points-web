import { useNavigate } from "react-router-dom";
import { Pressable } from "../../components/atoms/Pressable/Pressable";
import HomeTemplate from "../../templates/HomeTemplate";

export const HomeScreen = () => {
  const navigate = useNavigate();

  const CTAButton = () => {
    const onClick = () => {
      return navigate("/points");
    };

    return (
      <Pressable onClick={onClick}>
        <div className="rounded bg-slate-500 p-4">Start!</div>
      </Pressable>
    );
  };

  return <HomeTemplate mainNode={<CTAButton />} />;
};
