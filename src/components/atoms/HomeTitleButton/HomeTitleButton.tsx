import { useNavigate } from "react-router-dom";
import { Pressable } from "../Pressable/Pressable";

export const HomeTitleButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    return navigate("/");
  };

  return (
    <Pressable onClick={onClick}>
      <div className="my-auto mx-4">Points</div>
    </Pressable>
  );
};
